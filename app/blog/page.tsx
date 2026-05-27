import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export const metadata: Metadata = {
  title: "Insights on Leadership, Resilience & Speaking | Yossi Ghinsberg",
  description:
    "Articles from Yossi Ghinsberg on leadership, resilience, survival, and what it takes to move an audience.",
  openGraph: {
    title: "Insights on Leadership, Resilience & Speaking | Yossi Ghinsberg",
    description:
      "Articles from Yossi Ghinsberg on leadership, resilience, survival, and what it takes to move an audience.",
    url: `${BASE_URL}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights on Leadership, Resilience & Speaking | Yossi Ghinsberg",
    description:
      "Articles from Yossi Ghinsberg on leadership, resilience, survival, and what it takes to move an audience.",
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-bg py-24 md:py-32 text-center px-6">
        <p className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4 font-body">
          From the Field
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-text">
          Insights
        </h1>
        <p className="text-brand-text-secondary text-lg mt-4 max-w-xl mx-auto font-body">
          On leadership, resilience, survival, and what it takes to move an audience.
        </p>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-8" />
      </section>

      {/* Post grid */}
      <section className="bg-brand-bg py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-brand-surface border border-white/10 rounded-2xl p-7 flex flex-col hover:border-brand-gold/40 transition-all duration-300"
              >
                {/* Category */}
                <p className="text-brand-gold text-[10px] uppercase tracking-widest font-semibold font-body mb-3">
                  {post.category}
                </p>

                {/* Title */}
                <h2 className="text-brand-text font-heading font-bold text-xl leading-snug mb-3 group-hover:text-brand-gold transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-brand-text-secondary text-sm leading-relaxed font-body flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/10">
                  <span className="text-brand-text-secondary text-xs font-body">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-brand-text-secondary text-xs font-body">
                    {post.readTime}
                  </span>
                  <span className="ml-auto text-brand-gold text-xs font-semibold font-body group-hover:underline">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-bg py-16 text-center px-6 border-t border-white/5">
        <p className="text-brand-text-secondary text-base mb-6 max-w-md mx-auto font-body">
          Looking for a speaker your audience will still talk about a year from now?
        </p>
        <Link
          href="/book-yossi"
          className="inline-flex items-center justify-center bg-brand-gold text-black font-semibold rounded-full px-8 py-4 text-base hover:bg-brand-gold-light transition-all duration-300"
        >
          Book Yossi to Speak
        </Link>
      </section>
    </>
  );
}
