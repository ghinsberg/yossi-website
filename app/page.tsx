import Hero from "@/components/sections/Hero";
import CredentialTicker from "@/components/ui/CredentialTicker";
import DemoReel from "@/components/sections/DemoReel";
import KeynotesPreview from "@/components/sections/KeynotesPreview";
import ClientLogos from "@/components/sections/ClientLogos";
import ResultsTestimonials from "@/components/sections/ResultsTestimonials";
import FeaturedTestimonial from "@/components/sections/FeaturedTestimonial";
import TheDifference from "@/components/sections/TheDifference";
import MediaLogos from "@/components/sections/MediaLogos";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CredentialTicker />
      <DemoReel />
      <KeynotesPreview />
      <ClientLogos />
      <ResultsTestimonials />
      <FeaturedTestimonial />
      <TheDifference />
      <MediaLogos />
      <FooterCTA />
    </>
  );
}
