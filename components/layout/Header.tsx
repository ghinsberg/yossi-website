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
              src="/images/yossi-ghinsberg-logo_site.png"
              alt="Yossi Ghinsberg"
              className="h-12 md:h-20 w-auto"
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
              Book a Call
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
      {/* Backdrop tap to close */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed inset-0 z-50 bg-brand-bg flex flex-col transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/yossi-ghinsberg-logo_site.png"
              alt="Yossi Ghinsberg"
              className="h-8 w-auto"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links — large touch targets */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-2">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-4 text-2xl font-heading text-brand-text hover:text-brand-gold active:text-brand-gold transition"
          >
            Home
          </Link>
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-4 text-2xl font-heading text-brand-text hover:text-brand-gold active:text-brand-gold transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA — full width, finger-friendly */}
        <div className="p-6 pb-10">
          <Link
            href="/book-yossi"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-brand-gold text-black text-base font-semibold py-4 rounded-full hover:bg-brand-gold-light active:scale-95 transition"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </>
  );
}
