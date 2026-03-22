import SectionHeading from "@/components/ui/SectionHeading";
import KeynoteCard from "@/components/ui/KeynoteCard";
import Button from "@/components/ui/Button";
import { keynotes } from "@/data/keynotes";

export default function KeynotesPreview() {
  return (
    <section className="bg-brand-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Three Keynotes. One Extraordinary Life."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {keynotes.map((keynote) => (
            <KeynoteCard key={keynote.slug} keynote={keynote} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" href="/keynotes">
            See All Keynotes
          </Button>
        </div>
      </div>
    </section>
  );
}
