import Link from "next/link";
import { heSite } from "@/data/he/site";

export default function HeMobileCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-brand-gold shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="py-3 px-4">
        <Link
          href={heSite.bookingHref}
          className="w-full text-center text-black font-semibold py-3 min-h-[44px] flex items-center justify-center focus-visible:outline-black focus-visible:-outline-offset-4"
        >
          {heSite.bookingLabel}
        </Link>
      </div>
    </div>
  );
}
