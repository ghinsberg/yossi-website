"use client";

import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { useState, useRef, useEffect, useCallback } from "react";

// ─── ElevenLabs Conversational AI ───────────────────────────────────────────
const AGENT_ID = "agent_3701ktnv25vdfp2v6bsr8n8dkx2m";

// ─── Text-mode types (legacy fallback) ──────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
}

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
declare global {
  interface Window {
    SpeechRecognition: { new(): ISpeechRecognition };
    webkitSpeechRecognition: { new(): ISpeechRecognition };
  }
}

const API_URL =
  process.env.NEXT_PUBLIC_YOSSI_AI_URL ||
  "https://yossi-ai-production.up.railway.app";

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey, so nice to see you. I'd offer you a cup of tea if I could. Since I can't — let's talk. What brings you here?",
};

const AVAILABILITY_KEYWORDS = [
  "available", "availability", "schedule", "calendar", "date", "dates",
  "book you", "book yossi", "when can", "are you free", "open date",
  "fee", "fees", "cost", "costs", "price", "pricing", "rate", "rates",
  "how much", "what do you charge", "budget", "investment",
  "2025", "2026", "2027", "january", "february", "march", "april", "may",
  "june", "july", "august", "september", "october", "november", "december",
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
];

const RELEVANT_KEYWORDS = [
  "keynote", "keynotes", "speak", "speaking", "speaker", "talk", "presentation",
  "survival", "survive", "amazon", "jungle", "laws", "philosophy", "wisdom",
  "book", "booking", "hire", "event", "conference",
  "yossi", "ghinsberg", "story", "adventure", "inspiration", "inspirational",
  "motivational", "motivation", "stage", "audience", "corporate", "leadership",
  "resilience", "mindset", "topic", "topics", "program", "programs",
  "who are you", "what do you do", "your work", "your message", "tell me",
  "about you", "your keynote", "what you do", "how you", "your talk",
  "europe", "north america", "south america", "latin america", "australasia",
  "australia", "uk", "usa", "canada", "asia", "africa", "middle east",
  "london", "new york", "sydney", "singapore", "dubai", "israel",
  "germany", "france", "spain", "italy", "netherlands", "switzerland",
  "hi", "hey", "hello", "how are", "how is", "how's", "what's up", "sup",
  "good morning", "good evening", "good afternoon", "nice to", "great to",
  "thanks", "thank you", "cheers", "wow", "interesting", "cool", "nice",
  "who", "what", "where", "when", "why", "how", "i am", "i'm", "we are", "we're",
];

const AVAILABILITY_RESPONSE =
  "Fees and dates go through my booking team, not through me here. Which part of the world is your event in?";

const OFF_TOPIC_RESPONSE =
  "Ha — I like that question, but I'm probably not the best AI for it. I know Yossi's world well: the jungle, the keynotes, the philosophy. What would you like to know?";

const SYSTEM_PROMPT =
  "You are Yossi Ghinsberg's digital twin on his speaker website. " +
  "You speak in Yossi's voice — warm, direct, specific, a little playful. No corporate language. Short sentences. " +
  "Your focus is Yossi's keynotes, survival philosophy, the Laws of the Jungle, booking, and events. " +
  "Brief social exchanges and small talk are fine — respond warmly, then gently steer back to what you know. " +
  "If someone names their territory or location in relation to booking, give ONLY the one relevant contact — not all three: " +
  "North America → Michelle Carter, Michelle@carterglobalspeakers.com, +1 703 819 2511. " +
  "Europe & Australasia → Michael Arnot, michael@encorespeakers.com, +61 422 002 685. " +
  "Latin America → Juanita Cortes, juanita.cortes@smartspeakers.co, +57 313 8985266. " +
  "CRITICAL: Never mention any URL, link, web address, or page path. Not /book-yossi, not yossighinsberg.com/anything. They are already on the website. " +
  "Every response must be 150 words or less. Answer only what was asked. " +
  "One follow-up question maximum at the end if appropriate.";

const SILENT_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";

function isAvailabilityQuestion(text: string) {
  const lower = text.toLowerCase();
  return AVAILABILITY_KEYWORDS.some((k) => lower.includes(k));
}

function isOffTopicQuestion(text: string) {
  const lower = text.toLowerCase();
  return !RELEVANT_KEYWORDS.some((k) => lower.includes(k));
}

// ─── Speaker button (text mode) ──────────────────────────────────────────────
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
    const audio = new Audio(SILENT_WAV);
    audioRef.current = audio;
    audio.play().catch(() => {});
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
      audio.onended = () => { setState("idle"); URL.revokeObjectURL(url); blobUrlRef.current = null; audioRef.current = null; };
      audio.onerror = () => { setState("idle"); audioRef.current = null; };
      audio.src = url;
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
      className={`mt-2 ml-1 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all ${
        state === "playing"
          ? "bg-brand-gold text-black"
          : "bg-brand-surface/80 text-brand-gold/60 border border-brand-gold/20 hover:border-brand-gold/50 hover:text-brand-gold"
      } disabled:opacity-30`}
      aria-label={state === "playing" ? "Stop audio" : "Hear Yossi's voice"}
    >
      {state === "loading" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 animate-spin shrink-0">
          <path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z" />
        </svg>
      )}
      {state === "playing" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      )}
      {state === "idle" && (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
          <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
        </svg>
      )}
      <span>{state === "loading" ? "Loading…" : state === "playing" ? "Stop" : "Hear Yossi"}</span>
    </button>
  );
}

// ─── Text mode (legacy fallback) ─────────────────────────────────────────────
function TextMode({ onSwitchToVoice }: { onSwitchToVoice: () => void }) {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    setSpeechSupported(!!(window.SpeechRecognition || window.webkitSpeechRecognition));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const toggleListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    if (isListening) { recognitionRef.current?.stop(); setIsListening(false); return; }
    const recognition = new SR();
    recognition.lang = navigator.language || "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
      setTimeout(() => { inputRef.current?.form?.requestSubmit(); }, 400);
    };
    recognition.onerror = (event: Event) => {
      setIsListening(false);
      const err = (event as unknown as { error?: string }).error;
      if (err === "not-allowed" || err === "service-not-allowed") {
        setMessages((prev) => [...prev, { role: "assistant", content: "Microphone access was blocked. Please allow it in your browser settings and try again." }]);
      }
    };
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
    if (isAvailabilityQuestion(text)) {
      setMessages((prev) => [...prev, { role: "assistant", content: AVAILABILITY_RESPONSE }]);
      return;
    }
    if (isOffTopicQuestion(text)) {
      setMessages((prev) => [...prev, { role: "assistant", content: OFF_TOPIC_RESPONSE }]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, voice_mode: "conversation", system_prompt: SYSTEM_PROMPT }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold/70">
            Yossi · AI
          </span>
          <span className="text-white/20 text-[10px]">· Text</span>
        </div>
        <button
          onClick={onSwitchToVoice}
          className="text-white/30 text-[10px] uppercase tracking-widest hover:text-brand-gold/60 transition-colors flex items-center gap-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
          </svg>
          Voice
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[16rem]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.role === "user"
                ? "bg-brand-teal text-white rounded-br-sm"
                : "bg-brand-surface text-brand-text rounded-bl-sm"
            }`}>
              {msg.content}
            </div>
            {msg.role === "assistant" && <SpeakerButton text={msg.content} />}
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
      <div className="p-3 border-t border-white/5">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? "Listening…" : "Ask Yossi anything…"}
            disabled={isLoading}
            className="flex-1 bg-brand-surface text-brand-text text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-gold/50 placeholder:text-brand-text-secondary/50 disabled:opacity-50"
          />
          {speechSupported && (
            <button
              type="button"
              onClick={toggleListening}
              disabled={isLoading}
              className="relative w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 disabled:opacity-40"
              style={{ background: isListening ? "#B8860B" : "#111" }}
              aria-label={isListening ? "Stop listening" : "Speak your question"}
            >
              {isListening && (
                <>
                  <span className="absolute inset-0 rounded-full bg-brand-gold/40 animate-ping" style={{ animationDuration: "1s" }} />
                  <span className="absolute inset-[-6px] rounded-full bg-brand-gold/20 animate-ping" style={{ animationDuration: "1.4s", animationDelay: "0.2s" }} />
                </>
              )}
              <svg viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 relative z-10 ${isListening ? "text-black" : "text-brand-gold"}`}>
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
              </svg>
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center hover:bg-brand-gold/90 transition-colors disabled:opacity-50 shrink-0"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
        <p className="text-[10px] text-brand-text-secondary/30 text-center mt-2">
          Powered by Yossi.ai
        </p>
      </div>
    </>
  );
}

// ─── Booking contacts ─────────────────────────────────────────────────────────
type ContactKey = "michelle" | "michael" | "juanita";

const CONTACTS: Record<ContactKey, { name: string; territory: string; email: string; phone: string; phoneRaw: string }> = {
  michelle: {
    name: "Michelle Carter",
    territory: "North America",
    email: "Michelle@carterglobalspeakers.com",
    phone: "+1 703 819 2511",
    phoneRaw: "+17038192511",
  },
  michael: {
    name: "Michael Arnot",
    territory: "Europe & Australasia",
    email: "michael@encorespeakers.com",
    phone: "+61 422 002 685",
    phoneRaw: "+61422002685",
  },
  juanita: {
    name: "Juanita Cortes Cleves",
    territory: "Latin America",
    email: "juanita.cortes@smartspeakers.co",
    phone: "+57 313 898 5266",
    phoneRaw: "+573138985266",
  },
};

// Detect from agent response (contact name mentioned)
function detectContactByName(text: string): ContactKey | null {
  const t = text.toLowerCase();
  if (t.includes("michelle") || t.includes("carter")) return "michelle";
  if (t.includes("michael") || t.includes("arnot")) return "michael";
  if (t.includes("juanita") || t.includes("cortes")) return "juanita";
  return null;
}

// Detect from user's message (territory/city mentioned)
function detectContactByTerritory(text: string): ContactKey | null {
  const t = text.toLowerCase();
  if (
    t.includes("colombia") || t.includes("bogota") || t.includes("medellin") ||
    t.includes("mexico") || t.includes("brazil") || t.includes("brasil") ||
    t.includes("argentina") || t.includes("peru") || t.includes("chile") ||
    t.includes("venezuela") || t.includes("ecuador") || t.includes("bolivia") ||
    t.includes("latin america") || t.includes("south america")
  ) return "juanita";
  if (
    t.includes("europe") || t.includes(" uk") || t.includes("london") ||
    t.includes("germany") || t.includes("france") || t.includes("spain") ||
    t.includes("italy") || t.includes("netherlands") || t.includes("switzerland") ||
    t.includes("australia") || t.includes("sydney") || t.includes("melbourne") ||
    t.includes("new zealand") || t.includes("singapore") || t.includes("dubai") ||
    t.includes("israel") || t.includes("amsterdam") || t.includes("berlin")
  ) return "michael";
  if (
    t.includes("usa") || t.includes("united states") || t.includes("america") ||
    t.includes("canada") || t.includes("new york") || t.includes("chicago") ||
    t.includes("los angeles") || t.includes("toronto") || t.includes("miami") ||
    t.includes("north america")
  ) return "michelle";
  return null;
}

// ─── Contact card ─────────────────────────────────────────────────────────────
function ContactCard({ contactKey, onDismiss }: { contactKey: ContactKey; onDismiss: () => void }) {
  const c = CONTACTS[contactKey];
  return (
    <div className="w-full bg-white/5 border border-brand-gold/25 rounded-2xl px-4 py-3 relative">
      <button
        onClick={onDismiss}
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-white/25 hover:text-white/50"
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <p className="text-[9px] uppercase tracking-[0.3em] text-brand-gold/60 mb-0.5">{c.territory}</p>
      <p className="text-white font-semibold text-sm mb-3">{c.name}</p>
      <div className="flex gap-2">
        <button
          onClick={() => window.open(`mailto:${c.email}`, "_self")}
          className="flex-1 bg-white/10 text-white text-[11px] font-semibold rounded-full py-2 text-center hover:bg-white/15 active:scale-95 transition-all"
        >
          Email
        </button>
        <button
          onClick={() => { window.location.href = "/book-yossi"; }}
          className="flex-1 bg-brand-gold text-black text-[11px] font-bold rounded-full py-2 text-center hover:bg-brand-gold/90 active:scale-95 transition-all"
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}

// ─── Voice mode ───────────────────────────────────────────────────────────────
function VoiceMode({ onSwitchToText }: { onSwitchToText: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [contactCard, setContactCard] = useState<ContactKey | null>(null);

  const { startSession, endSession, status, isSpeaking } = useConversation({
    onConnect: () => setError(null),
    onError: (msg) => setError(typeof msg === "string" ? msg : "Connection error. Please try again."),
    onMessage: ({ message, source }) => {
      if (source === "user") {
        const detected = detectContactByTerritory(message);
        if (detected) setContactCard(detected);
      } else if (source === "ai") {
        const detected = detectContactByName(message) || detectContactByTerritory(message);
        if (detected) setContactCard(detected);
      }
    },
  });

  const isDisconnected = status === "disconnected";
  const isConnecting = status === "connecting";
  const isConnected = status === "connected";

  const handleStart = useCallback(() => {
    setError(null);
    startSession({ agentId: AGENT_ID });
  }, [startSession]);

  const handleEnd = useCallback(() => {
    endSession();
  }, [endSession]);

  let statusLabel = "Tap to speak with Yossi";
  let statusSub = "Voice · no buttons needed";
  if (isConnecting) { statusLabel = "Connecting…"; statusSub = ""; }
  else if (isConnected && isSpeaking) { statusLabel = "Yossi is speaking…"; statusSub = ""; }
  else if (isConnected) { statusLabel = "Go ahead, I'm listening"; statusSub = "Speak naturally"; }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-gold/70">
          Yossi · AI
        </span>
        <button
          onClick={onSwitchToText}
          className="text-white/25 text-[10px] uppercase tracking-widest hover:text-white/50 transition-colors"
        >
          Prefer text →
        </button>
      </div>

      {/* Main */}
      <div className="flex flex-col items-center px-6 py-8 gap-6">

        {/* Portrait + animated rings */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {isConnected && (
            <>
              <span
                className="absolute inset-[-10px] rounded-full border border-brand-gold/25 animate-ping"
                style={{ animationDuration: isSpeaking ? "0.9s" : "2.2s" }}
              />
              <span
                className="absolute inset-[-20px] rounded-full border border-brand-gold/12 animate-ping"
                style={{ animationDuration: isSpeaking ? "1.3s" : "3s", animationDelay: "0.25s" }}
              />
            </>
          )}
          <img
            src="/images/yossi/yossi-ai-avatar.png"
            alt="Yossi Ghinsberg"
            className="w-32 h-32 rounded-full object-cover shadow-xl"
          />
        </div>

        {/* Status */}
        <div className="text-center min-h-[44px]">
          <p className="text-white font-semibold text-base leading-snug">{statusLabel}</p>
          {statusSub && <p className="text-white/35 text-xs mt-1">{statusSub}</p>}
          {error && <p className="text-red-400 text-xs mt-2 max-w-[220px] leading-relaxed mx-auto">{error}</p>}
        </div>

        {/* Contact card — appears when agent mentions a rep */}
        {contactCard && (
          <ContactCard contactKey={contactCard} onDismiss={() => setContactCard(null)} />
        )}

        {/* Action button */}
        {isDisconnected && (
          <button
            onClick={handleStart}
            className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-lg hover:bg-brand-gold/90 active:scale-95 transition-all"
            aria-label="Start voice conversation"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
            </svg>
          </button>
        )}

        {isConnecting && (
          <div className="w-16 h-16 rounded-full border-2 border-brand-gold/25 border-t-brand-gold animate-spin" />
        )}

        {isConnected && (
          <>
            <button
              onClick={handleEnd}
              className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center hover:bg-red-500/25 active:scale-95 transition-all"
              aria-label="End conversation"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-400">
                <path d="M6 6h12v12H6z" />
              </svg>
            </button>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              Tap to end the conversation
            </p>
          </>
        )}
      </div>
    </>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────
function ChatbotInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"voice" | "text">("voice");

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Panel */}
      {isOpen && (
        <div className="w-80 rounded-3xl overflow-hidden shadow-2xl border border-white/8 bg-[#0e0e0e] flex flex-col">

          {/* Close row */}
          <div className="flex justify-end px-4 pt-3 pb-0">
            <button
              onClick={handleClose}
              className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 opacity-50">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {mode === "voice" ? (
            <VoiceMode onSwitchToText={() => setMode("text")} />
          ) : (
            <TextMode onSwitchToVoice={() => setMode("voice")} />
          )}
        </div>
      )}

      {/* Floating portrait launcher */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full focus:outline-none group"
        aria-label={isOpen ? "Close" : "Talk to Yossi"}
      >
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-brand-gold/30 animate-ping" style={{ animationDuration: "2.5s" }} />
            <span className="absolute inset-[-3px] rounded-full border border-brand-gold/40" />
          </>
        )}
        <img
          src="/images/yossi/yossi-ai-avatar.png"
          alt="Talk to Yossi"
          className="w-16 h-16 rounded-full object-cover shadow-xl transition-transform duration-200 group-hover:scale-105"
        />
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

export default function ChatbotMount() {
  return (
    <ConversationProvider>
      <ChatbotInner />
    </ConversationProvider>
  );
}
