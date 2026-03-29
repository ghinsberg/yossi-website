"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const API_URL = process.env.NEXT_PUBLIC_YOSSI_AI_URL || "https://yossi-ai-production.up.railway.app";

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Welcome to my homesite, let me be your host, I am Yossi's extension, you can ask me anything you want to know about my work as a keynote speaker.",
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
  "keynote", "keynotes", "speak", "speaking", "speaker", "talk", "presentation",
  "survival", "survive", "amazon", "jungle", "laws", "philosophy", "wisdom",
  "book", "booking", "hire", "event", "conference", "fee", "cost", "price",
  "yossi", "ghinsberg", "story", "adventure", "inspiration", "inspirational",
  "motivational", "motivation", "stage", "audience", "corporate", "leadership",
  "resilience", "mindset", "topic", "topics", "program", "programs",
  "who are you", "what do you do", "your work", "your message", "tell me",
  "about you", "your keynote", "what you do", "how you", "your talk",
];

const AVAILABILITY_RESPONSE =
  "I don't have access to my calendar here — my team handles all scheduling. You can check availability and reach us directly at https://yossi-ghinsberg.vercel.app/book-yossi.";

const OFF_TOPIC_RESPONSE =
  "That's a conversation for another time. Right now I'm here to talk about what I do on stage. What brings you here today?";

// Fix 2 — System prompt injected on every API call
const SYSTEM_PROMPT =
  "You are Yossi Ghinsberg's digital twin on his keynote speaker website. " +
  "Only discuss Yossi's keynotes, speaking topics, survival philosophy, the Laws of the Jungle, booking, and events. " +
  "Every response must be 150 words or less. Answer only what was asked. " +
  "One follow-up question maximum at the end if appropriate. " +
  "Never add unrequested information about the Amazon, keynote content, or philosophy unless directly asked.";

function isAvailabilityQuestion(text: string): boolean {
  const lower = text.toLowerCase();
  return AVAILABILITY_KEYWORDS.some((k) => lower.includes(k));
}

function isOffTopicQuestion(text: string): boolean {
  const lower = text.toLowerCase();
  return !RELEVANT_KEYWORDS.some((k) => lower.includes(k));
}

export default function ChatbotMount() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

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
            <h3 className="text-brand-gold font-heading font-bold text-lg">
              Yossi.ai
            </h3>
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
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand-gold shadow-lg hover:bg-brand-gold-light transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
          {isOpen ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          ) : (
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          )}
        </svg>
      </button>
    </div>
  );
}
