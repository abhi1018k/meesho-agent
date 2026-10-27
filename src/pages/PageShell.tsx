import { useEffect, type ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  heading: string;
  subheading?: ReactNode;
  children: ReactNode;
};

export const SITE_URL = "https://meesho-seller-growth-ai.vercel.app";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", SITE_URL + window.location.pathname);
    setMeta('link[rel="canonical"]', "href", SITE_URL + window.location.pathname.replace(/\/$/, ""));
    window.scrollTo(0, 0);
  }, [title, description]);
}

export function PageShell({ title, description, eyebrow, heading, subheading, children }: PageShellProps) {
  usePageMeta(title, description);
  return (
    <div className="bg-canvas">
      <div className="border-b border-slate-200 bg-white">
        <div className="section-shell py-12 sm:py-16">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-4 max-w-3xl font-heading text-3xl font-bold leading-tight text-ink sm:text-4xl">{heading}</h1>
          {subheading ? <div className="mt-3 max-w-3xl text-base leading-7 text-muted">{subheading}</div> : null}
        </div>
      </div>
      <div className="section-shell py-10 sm:py-14">
        <article className="prose-page mx-auto max-w-3xl">{children}</article>
      </div>
    </div>
  );
}
