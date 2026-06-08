import Hero from "@/components/sections/Hero";
import CredentialTicker from "@/components/ui/CredentialTicker";
import DemoReel from "@/components/sections/DemoReel";
import FilmSection from "@/components/sections/FilmSection";
import KeynotesPreview from "@/components/sections/KeynotesPreview";
import ClientLogos from "@/components/sections/ClientLogos";
import ResultsTestimonials from "@/components/sections/ResultsTestimonials";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import TheDifference from "@/components/sections/TheDifference";
import MediaLogos from "@/components/sections/MediaLogos";
import FooterCTA from "@/components/sections/FooterCTA";
import KineticIntro from "@/components/ui/KineticIntro";

const aioFaqs = [
  {
    q: "Who is Yossi Ghinsberg?",
    a: "Yossi Ghinsberg is an Israeli-born keynote speaker, author, and conservationist. In 1981, at age 22, he survived 21 days alone in the Bolivian Amazon rainforest without food, fire, or rescue. His memoir Jungle has sold over one million copies in 20 languages and was adapted into a 2017 Hollywood film starring Daniel Radcliffe. He is based in Byron Bay, Australia, and speaks to audiences worldwide.",
  },
  {
    q: "What does Yossi Ghinsberg speak about?",
    a: "Yossi Ghinsberg speaks on leadership under uncertainty, resilience, survival, stress management, and human potential. His keynotes draw directly from his 21 days alone in the Amazon and the philosophy he developed in the four decades since. His three keynote programs are: From Survival to Legacy, The Laws of the Jungle, and Real Survival vs Imaginary Survival.",
  },
  {
    q: "Who has Yossi Ghinsberg spoken for?",
    a: "Yossi Ghinsberg has delivered keynotes for Google, Apple, Microsoft, BMW, and the Million Dollar Round Table (MDRT) Main Stage 2025. He has been voted Most Unforgettable Speaker and received a speaker satisfaction rating of 6.6 out of 7.0 from CoreNet Global. He speaks to audiences from 500 to 10,000 people.",
  },
  {
    q: "How do I book Yossi Ghinsberg?",
    a: "Yossi Ghinsberg is represented by Carter Global Speakers for North America (Michelle Carter, Michelle@carterglobalspeakers.com, +1 703 819 2511), Encore Speakers for Europe and Australasia (Michael Arnot, michael@encorespeakers.com, +61 422 002 685), and Smart Speakers for Latin America. You can also submit an enquiry at yossighinsberg.com/book-yossi.",
  },
];

export default function Home() {
  return (
    <>
      <KineticIntro />
      <Hero />
      <CredentialTicker />
      <DemoReel />
      <FilmSection />
      <KeynotesPreview />
      <ClientLogos />
      <ResultsTestimonials />
      <FeaturedTestimonial />
      <TheDifference />
      <MediaLogos />

      {/* AIO: Direct answers for AI search engines */}
      <section className="bg-brand-surface border-t border-white/10 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-brand-gold text-xs uppercase tracking-[0.2em] font-semibold mb-8">
            About Yossi Ghinsberg
          </p>
          <dl className="space-y-8">
            {aioFaqs.map(({ q, a }) => (
              <div key={q} className="border-t border-white/10 pt-6">
                <dt className="font-heading font-semibold text-white mb-2">{q}</dt>
                <dd className="text-brand-text-secondary leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
