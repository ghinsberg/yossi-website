import { siteConfig } from "@/data/siteConfig";

export default function CredentialBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-brand-gold py-1.5">
      <p className="text-black text-xs font-medium text-center">
        {siteConfig.credentialBar.join(" \u00b7 ")}
      </p>
    </div>
  );
}
