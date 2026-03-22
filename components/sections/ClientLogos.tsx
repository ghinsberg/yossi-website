import LogoWall from "@/components/ui/LogoWall";
import { clients } from "@/data/clients";

export default function ClientLogos() {
  return (
    <section className="bg-brand-bg py-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <LogoWall items={clients} variant="clients" />
      </div>
    </section>
  );
}
