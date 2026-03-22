"use client";

import Image from "next/image";

interface LogoWallProps {
  items: { name: string; slug: string }[];
  variant?: "clients" | "media";
}

export default function LogoWall({ items, variant = "clients" }: LogoWallProps) {
  const basePath = variant === "clients" ? "/images/logos" : "/images/media";
  const logoHeight = variant === "clients" ? "h-8" : "h-6";

  return (
    <div className="overflow-hidden">
      {/* Desktop: static centered layout */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 items-center">
        {items.map((item) => (
          <Image
            key={item.slug}
            src={`${basePath}/${item.slug}.svg`}
            alt={item.name}
            width={120}
            height={32}
            className={`${logoHeight} w-auto opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale brightness-200`}
          />
        ))}
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="md:hidden flex animate-[marquee_30s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <div key={`${item.slug}-${i}`} className="flex-shrink-0 px-6">
            <Image
              src={`${basePath}/${item.slug}.svg`}
              alt={item.name}
              width={120}
              height={32}
              className={`${logoHeight} w-auto opacity-50 grayscale brightness-200`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
