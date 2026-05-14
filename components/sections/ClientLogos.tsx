import LogoWall from "@/components/ui/LogoWall";
import { clients } from "@/data/clients";

export default function ClientLogos() {
  return (
    <section className="bg-brand-bg py-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-brand-text-secondary/50 mb-10">
          Trusted by organisations that understand people are not resources, they are worlds of possibility.
        </p>
        <LogoWall items={clients} variant="clients" />
      </div>
    </section>
  );
}
