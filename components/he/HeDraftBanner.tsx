import { heSite, PLACEHOLDER_MARK } from "@/data/he/site";

// One sticky notice that the whole site is an unapproved draft. It replaces a
// stamp on every paragraph. Removed at launch: scripts/check-he-launch.sh
// counts <HeDraftBanner> as a blocker, like <Placeholder>.
// Height is fixed (h-8) and matches --he-banner-h in the layout, which the
// sticky header uses as its top offset so the two never overlap.
export default function HeDraftBanner() {
  const b = heSite.draftBanner;
  return (
    <div
      data-draft-banner
      role="note"
      aria-label={b.label}
      className="sticky top-0 z-[45] h-8 flex items-center justify-center gap-2 px-4 bg-brand-gold text-black text-xs sm:text-sm font-semibold whitespace-nowrap overflow-hidden"
    >
      <span aria-hidden="true">{PLACEHOLDER_MARK}</span>
      <span className="truncate">{b.text}</span>
    </div>
  );
}
