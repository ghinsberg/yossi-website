import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageIntro from "@/components/he/PageIntro";
import { heThanks as p } from "@/data/he/thanks";

// Never indexed, whatever the launch state.
export const metadata: Metadata = {
  title: p.metaTitle,
  description: p.metaDescription,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <PageIntro title={p.title} intro={p.body} />
      <div className="mt-10">
        <Button variant="outline" href="/">
          {p.home}
        </Button>
      </div>
    </div>
  );
}
