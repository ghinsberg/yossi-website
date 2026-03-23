"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky header — offset below CredentialBar on desktop */}
      <header
        className={`sticky top-0 md:top-[30px] z-40 h-[70px] flex items-center transition-colors duration-300 ${
          scrolled
            ? "bg-brand-bg/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/yossi-ghinsberg-logo.svg"
              alt="Yossi Ghinsberg"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text-secondary hover:text-brand-text transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-yossi"
              className="bg-brand-gold text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-gold-light transition"
            >
              Check Availability
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-bg/98 backdrop-blur-lg flex flex-col transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white w-11 h-11 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-heading text-brand-text hover:text-brand-gold transition"
          >
            Home
          </Link>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-heading text-brand-text hover:text-brand-gold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div className="p-8 flex justify-center">
          <Link
            href="/book-yossi"
            onClick={() => setMenuOpen(false)}
            className="bg-brand-gold text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </>
  );
}
