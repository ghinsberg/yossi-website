import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link href="/">
              <img
                src="/images/yossi-ghinsberg-logo.png"
                alt="Yossi Ghinsberg"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-brand-text-secondary text-sm">
              Transformation Keynote Speaker
            </p>
            <p className="text-brand-gold text-lg font-heading font-bold mt-4 tracking-wider">
              Be Brave.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-brand-text-secondary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Keynotes", href: "/keynotes" },
                { label: "Story", href: "/story" },
                { label: "Videos", href: "/videos" },
                { label: "Endorsements", href: "/endorsements" },
                { label: "Media & Books", href: "/media-books" },
                { label: "Book Yossi", href: "/book-yossi" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-text-secondary hover:text-brand-text transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Booking */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-brand-text-secondary mb-4">
              Book Yossi
            </h3>
            <p className="text-sm text-brand-text-secondary">
              Represented by {siteConfig.contact.company}
            </p>
            <p className="text-sm text-brand-text-secondary mt-2">
              {siteConfig.contact.name}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-sm text-brand-gold hover:text-brand-gold-light transition block mt-1"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-sm text-brand-text-secondary mt-1">
              {siteConfig.contact.phone}
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-text-secondary">
            &copy; 2026 Yossi Ghinsberg. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-brand-gold transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-brand-gold transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#0A0A0A" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
