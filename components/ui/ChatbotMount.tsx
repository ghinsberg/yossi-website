"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";

const AGENT_ID = "agent_2201ktvwj7qqek8rn5dxnae090e8";
const API_URL = process.env.NEXT_PUBLIC_YOSSI_AI_URL || "https://yossi-ai-production.up.railway.app";

// ─── Contact card system ──────────────────────────────────────────────────────

type ContactKey = "michelle" | "michael" | "juanita";

const CONTACTS: Record<ContactKey, { name: string; title: string; region: string; email: string | null }> = {
  michelle: {
    name: "Michelle Carter",
    title: "Speaker Bureau — North America",
    region: "USA, Canada, Mexico",
    email: "Michelle@carterglobalspeakers.com",
  },
  michael: {
    name: "Michael Arnot",
    title: "Speaker Bureau — Europe & Australasia",
    region: "Europe, Australia, NZ",
    email: "michael@encorespeakers.com",
  },
  juanita: {
    name: "Juanita Cortes Cleves",
    title: "Speaker Bureau — Latin America",
    region: "Latin America",
    email: null,
  },
};

function detectContact(text: string): ContactKey | null {
  const t = text.toLowerCase();
  if (
    t.includes("colombia") || t.includes("bogota") || t.includes("latin america") ||
    t.includes("mexico") || t.includes("brazil") || t.includes("argentina") ||
    t.includes("chile") || t.includes("peru") || t.includes("venezuela") ||
    t.includes("south america") || t.includes("central america")
  ) return "juanita";
  if (
    t.includes("europe") || t.includes("australia") || t.includes("new zealand") ||
    t.includes("uk") || t.includes("germany") || t.includes("france") ||
    t.includes("spain") || t.includes("italy") || t.includes("singapore") ||
    t.includes("asia") || t.includes("middle east")
  ) return "michael";
  if (
    t.includes("usa") || t.includes("united states") || t.includes("north america") ||
    t.includes("canada") || t.includes("america") || t.includes("new york") ||
    t.includes("los angeles") || t.includes("chicago") || t.includes("toronto")
  ) return "michelle";
  return null;
}

// ─── Contact card ─────────────────────────────────────────────────────────────

function ContactCard({ contactKey, onDismiss }: { contactKey: ContactKey; onDismiss: () => void }) {
  const c = CONTACTS[contactKey];
  return (
    <div className="mx-3 mb-3 rounded-xl border border-brand-gold/40 bg-brand-surface p-3 text-sm">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <p className="font-semibold text-brand-gold leading-tight">{c.name}</p>
          <p className="text-brand-text-secondary text-xs mt-0.5">{c.title}</p>
          <p className="text-brand-text-secondary/60 text-xs">{c.region}</p>
        </div>
        <button onClick={onDismiss} className="text-brand-text-secondary/40 hover:text-brand-text-secondary shrink-0 mt-0.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2">
        {c.email && (
          <button
            onClick={() => window.open(`mailto:${c.email}`, "_self")}
            className="flex-1 rounded-lg bg-white/10 hover:bg-white/20 text-brand-text py-2 text-xs font-medium transition-colors"
          >
            Email
          </button>
        )}
        <button
          onClick={() => { window.location.href = "/book-yossi"; }}
          className="flex-1 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-black py-2 text-xs font-medium transition-colors"
        >
          Book a Call
        </button>
      </div>
    </div>
  );
}

// ─── Voice mode ───────────────────────────────────────────────────────────────

function VoiceMode({ onSwitchToText }: { onSwitchToText: () => void }) {
  const [contactCard, setContactCard] = useState<ContactKey | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { startSession, endSession, status, isSpeaking, mode, isMuted, setMuted } = useConversation({
    onMessage: ({ message, source }: { message: string; source: "user" | "ai" }) => {
      const detected = detectContact(message);
      if (detected) setContactCard(detected);
      if (source === "ai") setErrorMsg(null);
    },
    onError: () => {
      setErrorMsg("Connection lost. Try refreshing or switch to text.");
    },
  });

  const handleStart = useCallback(async () => {
    setErrorMsg(null);
    try {
      await startSession({ agentId: AGENT_ID });
    } catch {
      setErrorMsg("Couldn't connect. Check your microphone permissions.");
    }
  }, [startSession]);

  const isConnected = status === "connected";
  const isConnecting = status === "connecting";

  return (
    <div className="flex flex-col h-full">
      {/* Main voice UI */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">

        {/* Animated orb */}
        <div className="relative flex items-center justify-center">
          {/* Outer pulse rings — only when active */}
          {isConnected && (
            <>
              <div className={`absolute w-32 h-32 rounded-full border border-brand-gold/20 ${isSpeaking ? "animate-ping" : ""}`} />
              <div className={`absolute w-24 h-24 rounded-full border border-brand-gold/30 ${mode === "listening" ? "animate-pulse" : ""}`} />
            </>
          )}

          {/* Core button */}
          <button
            onClick={isConnected ? endSession : handleStart}
            disabled={isConnecting}
            className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
              isConnected
                ? isSpeaking
                  ? "bg-brand-gold scale-110"
                  : "bg-brand-teal"
                : isConnecting
                ? "bg-brand-surface opacity-60 cursor-wait"
                : "bg-brand-gold hover:scale-110"
            }`}
          >
            {isConnecting ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-text animate-spin">
                <path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z" />
              </svg>
            ) : isConnected ? (
              <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.95-.49-7-3.85-7-7.93H2c0 4.42 2.72 8.22 6.72 9.6V21h2v-3.47c-.24-.03-.48-.07-.72-.1zM12 16c-.35 0-.69-.04-1.03-.1l-1.07 1.07A9.01 9.01 0 0 0 11 17.93V21h2v-3.07c1.81-.47 3.35-1.56 4.4-3.01l-1.43-1.43C15.19 14.66 13.71 16 12 16zm5.5-4c0 3.03-2.47 5.5-5.5 5.5v2c4.14 0 7.5-3.36 7.5-7.5h-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Status label */}
        <div className="text-center">
          <p className="text-brand-text text-sm font-medium">
            {isConnecting
              ? "Connecting…"
              : isConnected
              ? isSpeaking
                ? "Yossi is speaking"
                : "Listening…"
              : "Tap to start a conversation"}
          </p>
          {isConnected && (
            <p className="text-brand-text-secondary/50 text-xs mt-1">
              Tap the circle to end
            </p>
          )}
        </div>

        {/* Mute button — only when connected */}
        {isConnected && (
          <button
            onClick={() => setMuted(!isMuted)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
              isMuted
                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                : "bg-brand-surface text-brand-text-secondary hover:text-brand-text"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              {isMuted ? (
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
              ) : (
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.95-.49-7-3.85-7-7.93H2c0 4.42 2.72 8.22 6.72 9.6V21h2v-3.47c-.24-.03-.48-.07-.72-.1zM12 16c-.35 0-.69-.04-1.03-.1l-1.07 1.07A9.01 9.01 0 0 0 11 17.93V21h2v-3.07c1.81-.47 3.35-1.56 4.4-3.01l-1.43-1.43C15.19 14.66 13.71 16 12 16zm5.5-4c0 3.03-2.47 5.5-5.5 5.5v2c4.14 0 7.5-3.36 7.5-7.5h-2z" />
              )}
            </svg>
            {isMuted ? "Unmute" : "Mute"}
          </button>
        )}

        {/* Error */}
        {errorMsg && (
          <p className="text-red-400 text-xs text-center px-4">{errorMsg}</p>
        )}
      </div>

      {/* Contact card */}
      {contactCard && (
        <ContactCard contactKey={contactCard} onDismiss={() => setContactCard(null)} />
      )}

      {/* Footer */}
      <div className="px-4 pb-3 border-t border-brand-gold/20 pt-3">
        <button
          onClick={onSwitchToText}
          className="w-full text-center text-xs text-brand-text-secondary/50 hover:text-brand-text-secondary transition-colors"
        >
          Prefer to type? Switch to text chat →
        </button>
      </div>
    </div>
  );
}

// ─── Text mode ────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ISpeechRecognition extends EventTarget {
  lang: string; interimResults: boolean; maxAlternatives: number;
  start(): void; stop(): void;
  onresult: ((e: ISpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}
interface ISpeechRecognitionEvent extends Event {
  results: { [i: number]: { [j: number]: { transcript: string } } };
}
declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

const WELCOME: Message = {
  role: "assistant",
  content: "Welcome to my homesite, let me be your host. I'm Yossi's extension — ask me anything about my work as a keynote speaker.",
};

const SYSTEM_PROMPT =
  "You are Yossi Ghinsberg's digital twin on his keynote speaker website. " +
  "Only discuss Yossi's keynotes, speaking topics, survival philosophy, the Laws of the Jungle, booking, and events. " +
  "Every response must be 150 words or less. Answer only what was asked. " +
  "One follow-up question maximum at the end if appropriate.";

const AVAILABILITY_KEYWORDS = [
  "available", "availability", "schedule", "calendar", "date", "dates",
  "book you", "book yossi", "when can", "are you free", "open date",
  "2025", "2026", "2027",
];

const RELEVANT_KEYWORDS = [
  "keynote", "keynotes", "speak", "speaking", "speaker", "talk", "presentation",
  "survival", "survive", "amazon", "jungle", "laws", "philosophy", "wisdom",
  "book", "booking", "hire", "event", "conference", "fee", "cost", "price",
  "yossi", "ghinsberg", "story", "adventure", "inspiration", "motivational",
  "stage", "audience", "corporate", "leadership", "resilience", "mindset",
  "who are you", "what do you do", "tell me", "about you", "how you",
];

function SpeakerButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  async function handleSpeak() {
    if (state === "playing" && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setState("idle");
      return;
    }
    setState("loading");
    try {
      const res = await fetch(`${API_URL}/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => { setState("idle"); URL.revokeObjectURL(url); audioRef.current = null; };
      audio.onerror = () => { setState("idle"); audioRef.current = null; };
      setState("playing");
      await audio.play();
    } catch { setState("idle"); }
  }

  return (
    <button
      onClick={handleSpeak}
      disabled={state === "loading"}
      className="mt-1.5 ml-1 flex items-center gap-1 text-brand-text-secondary/40 hover:text-brand-gold transition-colors disabled:opacity-30"
      aria-label={state === "playing" ? "Stop audio" : "Hear this"}
    >
      {state === "loading" && <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 animate-spin"><path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z" /></svg>}
      {state === "playing" && <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-brand-gold"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>}
      {state === "idle" && <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" /></svg>}
    </button>
  );
}

function TextMode({ onSwitchToVoice }: { onSwitchToVoice: () => void }) {
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [contactCard, setContactCard] = useState<ContactKey | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const toggleListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    if (isListening) { recognitionRef.current?.stop(); setIsListening(false); return; }
    const r = new SR();
    r.lang = navigator.language || "en-US";
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.onresult = (e: ISpeechRecognitionEvent) => {
      const t = e.results[0][0].transcript;
      setInput(t);
      setIsListening(false);
      setTimeout(() => inputRef.current?.form?.requestSubmit(), 400);
    };
    r.onerror = () => setIsListening(false);
    r.onend = () => setIsListening(false);
    recognitionRef.current = r;
    r.start();
    setIsListening(true);
  }, [isListening]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    setMessages((p) => [...p, { role: "user", content: text }]);

    const detected = detectContact(text);
    if (detected) setContactCard(detected);

    if (AVAILABILITY_KEYWORDS.some((k) => text.toLowerCase().includes(k))) {
      setMessages((p) => [...p, { role: "assistant", content: "I don't have access to my calendar here — my team handles all scheduling. You can check availability at yossighinsberg.com/book-yossi." }]);
      return;
    }
    if (!RELEVANT_KEYWORDS.some((k) => text.toLowerCase().includes(k))) {
      setMessages((p) => [...p, { role: "assistant", content: "That's a conversation for another time. Right now I'm here to talk about what I do on stage. What brings you here today?" }]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, voice_mode: "conversation", system_prompt: SYSTEM_PROMPT }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      const reply: string = data.response;
      setMessages((p) => [...p, { role: "assistant", content: reply }]);
      const detectedFromReply = detectContact(reply);
      if (detectedFromReply) setContactCard(detectedFromReply);
    } catch {
      setMessages((p) => [...p, { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[16rem]">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user" ? "bg-brand-teal text-white rounded-br-sm" : "bg-brand-surface text-brand-text rounded-bl-sm"}`}>
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

      {/* Contact card */}
      {contactCard && (
        <div className="px-3">
          <ContactCard contactKey={contactCard} onDismiss={() => setContactCard(null)} />
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-brand-gold/20">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Yossi anything…"
            disabled={isLoading}
            className="flex-1 bg-brand-surface text-brand-text text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-brand-gold/50 placeholder:text-brand-text-secondary/50 disabled:opacity-50"
          />
          {typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition) && (
            <button
              type="button"
              onClick={toggleListening}
              disabled={isLoading}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-brand-surface hover:bg-brand-gold/20 text-brand-text-secondary hover:text-brand-gold"}`}
              aria-label={isListening ? "Stop recording" : "Speak your question"}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                {isListening
                  ? <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  : <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1 1.93c-3.95-.49-7-3.85-7-7.93H2c0 4.42 2.72 8.22 6.72 9.6V21h2v-3.47c-.24-.03-.48-.07-.72-.1zM12 16c-.35 0-.69-.04-1.03-.1l-1.07 1.07A9.01 9.01 0 0 0 11 17.93V21h2v-3.07c1.81-.47 3.35-1.56 4.4-3.01l-1.43-1.43C15.19 14.66 13.71 16 12 16zm5.5-4c0 3.03-2.47 5.5-5.5 5.5v2c4.14 0 7.5-3.36 7.5-7.5h-2z" />
                }
              </svg>
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center hover:bg-brand-gold-light transition-colors disabled:opacity-50 shrink-0"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="black" className="w-4 h-4"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </button>
        </form>
        <button
          onClick={onSwitchToVoice}
          className="w-full text-center text-xs text-brand-text-secondary/50 hover:text-brand-text-secondary transition-colors mt-2"
        >
          ← Switch to voice conversation
        </button>
      </div>
    </div>
  );
}

// ─── Inner chatbot (must be inside ConversationProvider) ──────────────────────

function ChatbotInner() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"voice" | "text">("text");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-brand-bg border border-brand-gold/20 rounded-2xl shadow-2xl mb-4 w-80 sm:w-96 flex flex-col overflow-hidden" style={{ height: "28rem" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-brand-gold/20 shrink-0">
            <div className="flex items-center gap-2">
              <h3 className="text-brand-gold font-heading font-bold text-lg">Yossi.ai</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${mode === "voice" ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-surface text-brand-text-secondary"}`}>
                {mode === "voice" ? "Voice" : "Text"}
              </span>
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

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {mode === "voice"
              ? <VoiceMode onSwitchToText={() => setMode("text")} />
              : <TextMode onSwitchToVoice={() => setMode("voice")} />
            }
          </div>
        </div>
      )}

      {/* Floating button — Yossi face with gold ring */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full transition-all hover:scale-110 focus:outline-none"
        aria-label="Open chat"
      >
        {/* Radiating ring — pulses when closed to invite interaction */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold animate-ping opacity-60" />
        )}
        <span className="absolute inset-0 rounded-full border-2 border-brand-gold shadow-lg shadow-brand-gold/40" />
        {isOpen ? (
          <span className="absolute inset-0 rounded-full bg-brand-gold flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </span>
        ) : (
          <img
            src="/images/yossi/yossi-ai-avatar.png"
            alt="Chat with Yossi"
            className="w-full h-full rounded-full object-cover"
          />
        )}
      </button>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function ChatbotMount() {
  return (
    <ConversationProvider>
      <ChatbotInner />
    </ConversationProvider>
  );
}
