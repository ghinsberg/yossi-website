"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { heSite } from "@/data/he/site";

export default function HeHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:start-2 focus:z-[60] focus:bg-brand-gold focus:text-black focus:px-4 focus:py-2 focus:rounded-full"
      >
        {heSite.ui.skipToContent}
      </a>
      <header
        className={`sticky top-0 z-40 h-[70px] flex items-center transition-colors duration-300 ${
          scrolled || menuOpen ? "bg-brand-bg/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            aria-label={heSite.ui.homeAria}
            className="flex-shrink-0 font-heading font-extrabold text-2xl md:text-3xl text-brand-text"
          >
            {heSite.name}
          </Link>

          <nav aria-label={heSite.ui.mainNav} className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8">
            {heSite.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-text-secondary hover:text-brand-text transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={heSite.bookingHref}
              className="bg-brand-gold text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-gold-light transition"
            >
              {heSite.bookingLabel}
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label={heSite.ui.openMenu}
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-brand-bg flex flex-col transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
        // inert keeps the closed menu out of the tab order
        {...(menuOpen ? {} : { inert: true })}
      >
        <div className="flex justify-between items-center px-6 pt-6 pb-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-heading font-extrabold text-xl text-brand-text"
          >
            {heSite.name}
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label={heSite.ui.closeMenu}
            className="text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 active:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav aria-label={heSite.ui.mainNav} className="flex-1 flex flex-col items-center justify-center gap-2">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-4 text-2xl font-heading text-brand-text hover:text-brand-gold active:text-brand-gold transition"
          >
            {heSite.ui.homeLabel}
          </Link>
          {heSite.nav.map((item) => (
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

        <div className="p-6 pb-10">
          <Link
            href={heSite.bookingHref}
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center bg-brand-gold text-black text-base font-semibold py-4 rounded-full hover:bg-brand-gold-light active:scale-95 transition"
          >
            {heSite.bookingLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
