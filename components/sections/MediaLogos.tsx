import LogoWall from "@/components/ui/LogoWall";
import { mediaLogos } from "@/data/clients";

export default function MediaLogos() {
  return (
    <section className="bg-brand-bg py-12">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-brand-text-secondary text-xs uppercase tracking-widest text-center mb-8">
          As Featured In
        </p>
        <LogoWall items={mediaLogos} variant="media" />
      </div>
    </section>
  );
}
