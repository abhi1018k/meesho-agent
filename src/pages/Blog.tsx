import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { useEffect } from "react";
import { blogPosts, formatDate, type BlogPost as Post } from "../data/blog";
import { contact } from "../data/content";
import { whatsappLink } from "../utils/whatsapp";
import { NotFound } from "./InfoPages";
import { PageShell, SITE_URL, usePageMeta } from "./PageShell";

export function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <PageShell
      title="Meesho Seller Blog – Guides for Listings, Pricing, Ads & Growth"
      description="Free practical guides for Meesho sellers: product titles, profit calculation, reducing returns, product photography, ads and festival planning."
      eyebrow="Blog"
      heading="Seller Growth Blog"
      subheading="Practical, honest guides to help Indian marketplace sellers list better, price smarter and grow profitably."
    >
      <div className="grid gap-5">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={"/blog/" + post.slug}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            style={{ textDecoration: "none" }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{post.category}</span>
            <h2 className="!mt-2 !mb-2 font-heading text-xl font-bold text-ink group-hover:text-brand-700">{post.title}</h2>
            <p className="!my-0 text-sm leading-6 text-slate-600">{post.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-muted">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" /> {post.readTime}</span>
              <span className="ml-auto inline-flex items-center gap-1 font-semibold text-brand-700">Read article <ArrowRight className="h-4 w-4" /></span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}

function ArticleSchema({ post }: { post: Post }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Meesho Seller Growth AI" },
      publisher: { "@type": "Organization", name: "Meesho Seller Growth AI" },
      mainEntityOfPage: SITE_URL + "/blog/" + post.slug,
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [post]);
  return null;
}

export function BlogPost({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  return <Article post={post} />;
}

function Article({ post }: { post: Post }) {
  usePageMeta(post.title + " | Meesho Seller Growth AI", post.description);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-canvas">
      <ArticleSchema post={post} />
      <div className="border-b border-slate-200 bg-white">
        <div className="section-shell py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <a href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
              <ArrowLeft className="h-4 w-4" /> All articles
            </a>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{post.category}</p>
            <h1 className="mt-2 font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {formatDate(post.date)}</span>
              <span className="inline-flex items-center gap-1"><Clock3 className="h-4 w-4" /> {post.readTime}</span>
              <span>By Meesho Seller Growth AI Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell py-10 sm:py-14">
        <article className="prose-page mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-slate-700">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <p className="!my-0 font-heading text-lg font-bold text-ink">Want help applying this to your catalog?</p>
            <p className="!mt-2 !mb-4 text-sm text-slate-600">
              Talk to our team on WhatsApp or email <a href={"mailto:" + contact.email}>{contact.email}</a>.
            </p>
            <a
              href={whatsappLink("Blog: " + post.slug)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-8 text-xs leading-5 text-muted">
            Disclaimer: This article is for general educational purposes. Meesho Seller Growth AI is an independent
            service and is not affiliated with Meesho. Always check current policies in your official seller dashboard.
          </p>

          <h2>Related articles</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <a href={"/blog/" + r.slug}>{r.title}</a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
