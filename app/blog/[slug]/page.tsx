import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yossighinsberg.com";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Yossi Ghinsberg`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Yossi Ghinsberg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Yossi Ghinsberg",
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Yossi Ghinsberg",
    },
  };

  // Split content into paragraphs
  const paragraphs = post.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-bg pt-20 pb-12 md:pt-28 md:pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold text-[10px] uppercase tracking-widest font-semibold font-body mb-5">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-text leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-brand-text-secondary text-sm font-body">
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-white/20">·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="w-12 h-0.5 bg-brand-gold mt-8" />
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-bg py-10 md:py-14 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {paragraphs.map((paragraph, index) => {
            // Detect section headings: ALL CAPS paragraph (may have spaces and colons)
            const isHeading = /^[A-Z][A-Z0-9\s:,&'–-]{4,}$/.test(paragraph);

            if (isHeading) {
              return (
                <h2
                  key={index}
                  className="text-brand-gold text-sm uppercase tracking-widest font-semibold font-body pt-6"
                >
                  {paragraph}
                </h2>
              );
            }

            return (
              <p
                key={index}
                className="text-brand-text-secondary text-lg leading-relaxed font-body"
              >
                {paragraph}
              </p>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-surface border-t border-white/10 py-16 px-6 mt-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold font-body mb-3">
            Book Yossi
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-text mb-4">
            Bring this to your audience.
          </h2>
          <p className="text-brand-text-secondary text-base max-w-md mx-auto mb-8 font-body">
            Yossi speaks to audiences of 10,000 and boardrooms of twelve. One
            story. Whoever is in the room.
          </p>
          <Link
            href="/book-yossi"
            className="inline-flex items-center justify-center bg-brand-gold text-black font-semibold rounded-full px-8 py-4 text-base hover:bg-brand-gold-light transition-all duration-300"
          >
            Book Yossi for Your Event
          </Link>
        </div>
      </section>

      {/* Back to blog */}
      <section className="bg-brand-bg py-8 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-brand-text-secondary text-sm font-body hover:text-brand-gold transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>
      </section>
    </>
  );
}
