import Button from "@/components/ui/Button";
import { heSite } from "@/data/he/site";

export default function HeNotFound() {
  const n = heSite.notFound;
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-text mb-6">{n.title}</h1>
        <p className="text-lg text-brand-text-secondary mb-10">{n.body}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" href="/" size="lg">
            {n.home}
          </Button>
          <Button variant="gold" href={heSite.bookingHref} size="lg">
            {n.book}
          </Button>
        </div>
      </div>
    </div>
  );
}
