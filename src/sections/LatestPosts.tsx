import { ArrowRight } from "lucide-react";
import { blogPosts, formatDate } from "../data/blog";

export function LatestPosts() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
  return (
    <section id="blog" className="py-20">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Seller Guides</span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-ink sm:text-4xl">Latest from the blog</h2>
            <p className="mt-3 max-w-2xl text-muted">Free, practical guides to help you list better, price smarter and grow profitably.</p>
          </div>
          <a href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            View all articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={"/blog/" + post.slug}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">{post.category}</span>
              <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-ink group-hover:text-brand-700">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{post.description}</p>
              <p className="mt-4 text-xs font-medium text-muted">{formatDate(post.date)} · {post.readTime}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
