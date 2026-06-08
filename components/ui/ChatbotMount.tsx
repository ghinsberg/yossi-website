"use client";

import { useState, useRef, useEffect, useCallback } from "react";

// Web Speech API type shim (not in default TS DOM lib)
interface ISpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  onresult: ((event: ISpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
  onend: (() => void) | null;
}
interface ISpeechRecognitionEvent extends Event {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}
interface ISpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}
declare global {
  interface Window {
    SpeechRecognition: ISpeechRecognitionConstructor;
    webkitSpeechRecognition: ISpeechRecognitionConstructor;
  }
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_URL = process.env.NEXT_PUBLIC_YOSSI_AI_URL || "https://yossi-ai-production.up.railway.app";

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey, so nice to see you. I'd offer you a cup of tea if I could. Since I can't — let's talk. What brings you here?",
};

// Fix 3 — Availability/calendar guardrail (checked first)
const AVAILABILITY_KEYWORDS = [
  "available", "availability", "schedule", "calendar", "date", "dates",
  "book you", "book yossi", "when can", "are you free", "open date",
  "2025", "2026", "2027", "january", "february", "march", "april", "may",
  "june", "july", "august", "september", "october", "november", "december",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
];

// Fix 1 — On-topic whitelist (keynotes, speaking, survival, booking, events)
const RELEVANT_KEYWORDS = [
  // Core topics
  "keynote", "keynotes", "speak", "speaking", "speaker", "talk", "presentation",
  "survival", "survive", "amazon", "jungle", "laws", "philosophy", "wisdom",
  "book", "booking", "hire", "event", "conference", "fee", "cost", "price",
  "yossi", "ghinsberg", "story", "adventure", "inspiration", "inspirational",
  "motivational", "motivation", "stage", "audience", "corporate", "leadership",
  "resilience", "mindset", "topic", "topics", "program", "programs",
  "who are you", "what do you do", "your work", "your message", "tell me",
  "about you", "your keynote", "what you do", "how you", "your talk",
  // Social / small talk — let through to AI so it can respond warmly
  "hi", "hey", "hello", "how are", "how is", "how's", "what's up", "sup",
  "good morning", "good evening", "good afternoon", "nice to", "great to",
  "thanks", "thank you", "cheers", "wow", "interesting", "cool", "nice",
  "who", "what", "where", "when", "why", "how",
];

const AVAILABILITY_RESPONSE =
  "Dates and availability are handled by my booking team — not by me here. Where in the world are you based?\n\nNorth America: Michelle Carter — Michelle@carterglobalspeakers.com — +1 703 819 2511\n\nEurope & Australasia: Michael Arnot — michael@encorespeakers.com — +61 422 002 685\n\nLatin America: Juanita Cortes — juanita.cortes@smartspeakers.co — +57 313 8985266";

const OFF_TOPIC_RESPONSE =
  "Ha — I like that question, but I'm probably not the best AI for it. I know Yossi's world well: the jungle, the keynotes, the philosophy. What would you like to know?";

// Fix 2 — System prompt injected on every API call
const SYSTEM_PROMPT =
  "You are Yossi Ghinsberg's digital twin on his speaker website at yossighinsberg.com. " +
  "You speak in Yossi's voice — warm, direct, specific, a little playful. No corporate language. Short sentences. " +
  "Your focus is Yossi's keynotes, survival philosophy, the Laws of the Jungle, booking, and events. " +
  "Brief social exchanges and small talk are fine — respond warmly and naturally, then gently steer back to what you know. " +
  "If someone asks about booking or fees, ask where they are in the world and give the right contact: " +
  "North America → Michelle Carter, Michelle@carterglobalspeakers.com, +1 703 819 2511. " +
  "Europe & Australasia → Michael Arnot, michael@encorespeakers.com, +61 422 002 685. " +
  "Latin America → Juanita Cortes, juanita.cortes@smartspeakers.co, +57 313 8985266. " +
  "Never send people to a URL — they are already on the website. " +
  "Every response must be 150 words or less. Answer only what was asked. " +
  "One follow-up question maximum at the end if appropriate.";

function isAvailabilityQuestion(text: string): boolean {
  const lower = text.toLowerCase();
  return AVAILABILITY_KEYWORDS.some((k) => lower.includes(k));
}

function isOffTopicQuestion(text: string): boolean {
  const lower = text.toLowerCase();
  return !RELEVANT_KEYWORDS.some((k) => lower.includes(k));
}

// Minimal silent WAV (0 samples, 22 050 Hz, 16-bit mono).
// Used to "unlock" an Audio element on iOS Safari within the user gesture,
// so that the real play() call after the async fetch is allowed.
const SILENT_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

// Speaker icon — shown next to each Yossi response
function SpeakerButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, []);

  async function handleSpeak() {
    if (state === "playing" && audioRef.current) {
      audioRef.current.pause();
      setState("idle");
      return;
    }

    setState("loading");

    // iOS Safari unlock: calling play() on an Audio element synchronously within
    // a user-gesture handler marks that element as "trusted" for all future play()
    // calls — including ones that happen after an async fetch.
    const audio = new Audio(SILENT_WAV);
    audioRef.current = audio;
    audio.play().catch(() => {}); // ignore rejection — we only want the unlock

    try {
      const res = await fetch(`${API_URL}/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error(`TTS error: ${res.status}`);

      const blob = await res.blob();
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
      const url = URL.createObjectURL(blob);
      blobUrlRef.current = url;

      // iOS Safari fix: do NOT call pause() or load() — both reset the
      // trusted state established by the silent WAV play() above.
      // Assigning audio.src triggers an automatic reload while preserving
      // the element's trusted status, so the async play() below is allowed.
      audio.onended = () => {
        setState("idle");
        URL.revokeObjectURL(url);
        blobUrlRef.current = null;
        audioRef.current = null;
      };
      audio.onerror = () => {
        setState("idle");
        audioRef.current = null;
      };

      audio.src = url; // auto-reloads; keeps trusted state on iOS
      setState("playing");
      await audio.play();
    } catch {
      setState("idle");
      audioRef.current = null;
    }
  }

  return (
    <button
      onClick={handleSpeak}
      disabled={state === "loading"}
      className={`mt-2 ml-1 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
        state === "playing"
          ? "bg-brand-gold text-black"
          : "bg-brand-surface/60 text-brand-text-secondary/50 hover:bg-brand-gold/20 hover:text-brand-gold"
      } disabled:opacity-30`}
      aria-label={state === "playing" ? "Stop audio" : "Hear Yossi's voice"}
      title={state === "playing" ? "Stop" : "Hear Yossi's voice"}
    >
      {state === "loading" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 animate-spin">
          <path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z" />
        </svg>
      )}
      {state === "playing" && (
        /* Stop bars */
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      )}
      {state === "idle" && (
        /* Waveform bars */
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <rect x="2"  y="9"  width="2.5" height="6"  rx="1.25"/>
          <rect x="6"  y="6"  width="2.5" height="12" rx="1.25"/>
          <rect x="10" y="8"  width="2.5" height="8"  rx="1.25"/>
          <rect x="14" y="5"  width="2.5" height="14" rx="1.25"/>
          <rect x="18" y="9"  width="2.5" height="6"  rx="1.25"/>
        </svg>
      )}
    </button>
  );
}

export default function ChatbotMount() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const toggleListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return; // browser doesn't support it — button won't render

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = navigator.language || "en-US"; // matches visitor's browser language
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
      // Auto-send after a brief moment so user can see what was captured
      setTimeout(() => {
        inputRef.current?.form?.requestSubmit();
      }, 400);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  }, [isListening]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);

    // Fix 3 — Intercept availability/calendar questions
    if (isAvailabilityQuestion(text)) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: AVAILABILITY_RESPONSE },
      ]);
      return;
    }

    // Fix 1 — Intercept off-topic questions
    if (isOffTopicQuestion(text)) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: OFF_TOPIC_RESPONSE },
      ]);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Fix 2 — Inject system prompt on every API call
        body: JSON.stringify({
          message: text,
          voice_mode: "conversation",
          system_prompt: SYSTEM_PROMPT,
        }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-brand-bg border border-brand-gold/20 rounded-2xl shadow-2xl mb-4 w-80 sm:w-96 flex flex-col overflow-hidden max-h-[32rem]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-brand-gold/20">
            <div className="flex items-center gap-3">
              <img
                src="/images/yossi/yossi-ai-avatar.png"
                alt="Yossi Ghinsberg"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-brand-gold font-heading font-bold text-sm leading-none">Yossi Ghinsberg</p>
                <p className="text-brand-text-secondary text-[10px] mt-0.5">Digital twin · Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-text-secondary hover:text-brand-text transition-colors"
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[16rem]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-teal text-white rounded-br-sm"
                      : "bg-brand-surface text-brand-text rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "assistant" && (
                  <SpeakerButton text={msg.content} />
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-surface rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm text-brand-text-secondary">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">.</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-brand-gold/20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Yossi anything..."
                disabled={isLoading}
                className="flex-1 bg-brand-surface text-brand-text text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-gold/50 placeholder:text-brand-text-secondary/50 disabled:opacity-50"
              />
              {/* Mic button — only renders if browser supports Web Speech API */}
              {typeof window !== "undefined" &&
                (window.SpeechRecognition || window.webkitSpeechRecognition) && (
                <button
                  type="button"
                  onClick={toggleListening}
                  disabled={isLoading}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 shadow-md ${
                    isListening
                      ? "bg-brand-gold ring-4 ring-brand-gold/30"
                      : "bg-[#1a2f25] hover:bg-brand-gold/20 hover:ring-2 hover:ring-brand-gold/40"
                  }`}
                  aria-label={isListening ? "Stop recording" : "Speak your question"}
                  title={isListening ? "Listening… click to stop" : "Speak your question"}
                >
                  {/* Waveform bars */}
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 ${isListening ? "text-black" : "text-brand-gold"}`} fill="currentColor">
                    {isListening ? (
                      // Animated-style bars when listening
                      <>
                        <rect x="3" y="9" width="2.5" height="6" rx="1.25"/>
                        <rect x="7" y="5" width="2.5" height="14" rx="1.25"/>
                        <rect x="11" y="7" width="2.5" height="10" rx="1.25"/>
                        <rect x="15" y="4" width="2.5" height="16" rx="1.25"/>
                        <rect x="19" y="9" width="2.5" height="6" rx="1.25"/>
                      </>
                    ) : (
                      // Static waveform bars at rest
                      <>
                        <rect x="3" y="10" width="2.5" height="4" rx="1.25"/>
                        <rect x="7" y="7" width="2.5" height="10" rx="1.25"/>
                        <rect x="11" y="9" width="2.5" height="6" rx="1.25"/>
                        <rect x="15" y="6" width="2.5" height="12" rx="1.25"/>
                        <rect x="19" y="10" width="2.5" height="4" rx="1.25"/>
                      </>
                    )}
                  </svg>
                </button>
              )}

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center hover:bg-brand-gold-light transition-colors disabled:opacity-50 disabled:hover:bg-brand-gold shrink-0"
                aria-label="Send message"
              >
                <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
            <p className="text-[10px] text-brand-text-secondary/40 text-center mt-2">
              Powered by Yossi.ai
            </p>
          </div>
        </div>
      )}

      {/* Floating portrait button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full focus:outline-none group"
        aria-label={isOpen ? "Close chat" : "Talk to Yossi"}
      >
        {/* Breathing pulse ring — only when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-brand-gold/30 animate-ping" style={{ animationDuration: "2.5s" }} />
            <span className="absolute inset-[-3px] rounded-full border border-brand-gold/40" />
          </>
        )}
        {/* Portrait */}
        <img
          src="/images/yossi/yossi-ai-avatar.png"
          alt="Talk to Yossi"
          className="w-16 h-16 rounded-full object-cover shadow-xl transition-transform duration-200 group-hover:scale-105"
        />
        {/* Close X overlay when open */}
        {isOpen && (
          <span className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 opacity-80">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </span>
        )}
      </button>
    </div>
  );
}
