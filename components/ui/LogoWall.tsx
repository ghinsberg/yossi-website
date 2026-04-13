"use client";

import Image from "next/image";

interface LogoWallProps {
  items: { name: string; slug: string; ext?: string }[];
  variant?: "clients" | "media";
}

export default function LogoWall({ items, variant = "clients" }: LogoWallProps) {
  const isClients = variant === "clients";
  const basePath = isClients ? "/images/clients" : "/images/media";

  return (
    <div className="overflow-hidden">
      {/* Desktop: static centered layout */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 items-center">
        {items.map((item) => {
          const src = isClients
            ? `${basePath}/${item.slug}.${item.ext ?? "png"}`
            : `${basePath}/${item.slug}.svg`;
          return (
            <div key={item.slug} className="flex items-center justify-center h-16 w-32">
              <Image
                src={src}
                alt={item.name}
                width={128}
                height={64}
                className="max-h-16 w-auto object-contain opacity-50 hover:opacity-90 transition-all duration-300 grayscale hover:grayscale-0"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="md:hidden flex animate-[marquee_30s_linear_infinite]">
        {[...items, ...items].map((item, i) => {
          const src = isClients
            ? `${basePath}/${item.slug}.${item.ext ?? "png"}`
            : `${basePath}/${item.slug}.svg`;
          return (
            <div key={`${item.slug}-${i}`} className="flex-shrink-0 px-6 flex items-center h-14">
              <Image
                src={src}
                alt={item.name}
                width={100}
                height={56}
                className="max-h-14 w-auto object-contain opacity-50 grayscale"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
