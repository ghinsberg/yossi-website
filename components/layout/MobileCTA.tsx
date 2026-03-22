"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-gold shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="py-3 px-4">
        <Link
          href="/book-yossi"
          className="block w-full text-center text-black font-semibold py-3 min-h-[44px] flex items-center justify-center"
        >
          Check Availability
        </Link>
      </div>
    </div>
  );
}
