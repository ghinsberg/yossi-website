import type { Metadata } from "next";
import PageIntro from "@/components/he/PageIntro";
import HeBookingForm from "@/components/he/HeBookingForm";
import { heBooking as p } from "@/data/he/booking";
import { hebrewAlternates } from "@/lib/he/canonical";

// Agent-tagged URLs (?a=rafi) all declare the untagged address as canonical.
export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  alternates: hebrewAlternates("/hazmana"),
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <PageIntro title={p.title} intro={p.intro} />
      <div className="mt-10">
        <HeBookingForm />
      </div>
    </div>
  );
}
