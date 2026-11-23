import Link from "next/link";
import { heSite } from "@/data/he/site";
import Placeholder from "@/components/he/Placeholder";

export default function HeFooter() {
  const f = heSite.footer;
  return (
    <footer className="bg-brand-bg border-t border-brand-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-heading font-extrabold text-2xl text-brand-text">
              {heSite.name}
            </Link>
          </div>

          <div>
            <h2 className="text-sm tracking-wider text-brand-text-secondary mb-4">{f.navTitle}</h2>
            <ul className="space-y-3">
              {heSite.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-text-secondary hover:text-brand-text transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm tracking-wider text-brand-text-secondary mb-4">{f.contactTitle}</h2>
            <Placeholder>{f.contactPlaceholder}</Placeholder>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-brand-text-secondary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {f.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-text transition">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={heSite.englishSiteUrl}
                lang="en"
                hrefLang="en"
                className="hover:text-brand-text transition"
              >
                {heSite.englishSiteLabel}
              </a>
            </li>
          </ul>
          <p>{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
