"use client";

import { useState } from "react";

export default function ChatbotMount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-brand-surface rounded-2xl p-6 shadow-xl mb-4 w-80 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-brand-text-secondary hover:text-brand-text transition-colors"
            aria-label="Close panel"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <h3 className="text-brand-gold font-heading font-bold text-lg mb-2">
            Yossi.ai
          </h3>
          <p className="text-sm text-brand-text-secondary leading-relaxed">
            Coming soon — an AI assistant that knows Yossi&apos;s story,
            keynotes, and can help you plan your event.
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand-gold shadow-lg hover:bg-brand-gold-light transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Open chat"
      >
        <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </button>
    </div>
  );
}
