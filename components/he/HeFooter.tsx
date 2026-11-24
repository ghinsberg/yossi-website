import Link from "next/link";
import { heSite } from "@/data/he/site";

export default function HeFooter() {
  const f = heSite.footer;
  return (
    <footer className="bg-brand-bg border-t border-brand-gold/20 pt-16 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 gap-12 ${f.contactPlaceholder ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          <div>
            <Link href="/" className="font-heading font-extrabold text-2xl text-brand-text">
              {heSite.name}
            </Link>
          </div>

          <div>
            <h2 className="text-sm text-brand-text-secondary mb-4">{f.navTitle}</h2>
            <nav aria-label={heSite.ui.footerNav}>
            <ul className="space-y-3">
              {heSite.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-block py-1 text-sm text-brand-text-secondary hover:text-brand-text transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </nav>
          </div>

          {/* Nothing here until the agents' public contact details exist. */}
          {f.contactPlaceholder ? (
            <div>
              <h2 className="text-sm text-brand-text-secondary mb-4">{f.contactTitle}</h2>
              <p className="text-sm text-brand-text-secondary">{f.contactPlaceholder}</p>
            </div>
          ) : null}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-brand-text-secondary">
          <nav aria-label={heSite.ui.legalNav}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {f.legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-2 hover:text-brand-text transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          </nav>
          {/* The label is Hebrew, so no lang="en"; hrefLang marks the English target. */}
          <p>
            <a
              href={heSite.englishSiteUrl}
              hrefLang="en"
              className="inline-block py-2 hover:text-brand-text transition"
            >
              {heSite.englishSiteLabel}
            </a>
          </p>
          <p>{f.rights}</p>
        </div>
      </div>
    </footer>
  );
}
