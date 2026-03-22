import Button from "@/components/ui/Button";

export default function TheDifference() {
  return (
    <section className="bg-brand-light-bg py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column — text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-bg leading-tight">
              Before resilience was a keynote topic, he was surviving the Amazon.
            </h2>
            <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-brand-bg leading-tight">
              Before AI was a buzzword, he was building it in Silicon Valley.
            </h2>
            <p className="mt-6 text-brand-bg/70 text-lg leading-relaxed">
              Yossi Ghinsberg is not a speaker who adapted his story to the moment. He is a man who has always lived in the future before it arrived. In 1981, he survived 21 days alone in the Bolivian Amazon. Between 2013 and 2017, he was building AI companies in Silicon Valley — a decade before the world caught up. His authority on survival, resilience, and navigating the unknown is not academic. It is lived. And it is unlike anything else on the speaking circuit.
            </p>
            <div className="mt-8">
              <Button variant="teal" href="/story">
                Read His Full Story
              </Button>
            </div>
          </div>

          {/* Right column — image */}
          <div>
            <img
              src="/images/headshots/yossi-headshot-4.jpg"
              alt="Yossi Ghinsberg"
              className="rounded-2xl w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
