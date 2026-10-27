import { Sparkles } from "lucide-react";
import { contact, navItems } from "../data/content";
import { whatsappLink } from "../utils/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-bold text-ink">Meesho Seller Growth AI</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">
            AI-powered growth software for Meesho sellers, manufacturers, suppliers, resellers and ecommerce agencies in India.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-ink">Navigate</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.slice(1, 8).map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted hover:text-brand-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div id="contact">
          <p className="text-sm font-bold text-ink">Contact</p>
          <a href={whatsappLink("Footer")} target="_blank" rel="noreferrer" className="mt-3 block text-sm font-semibold text-brand-700">
            {contact.phone}
          </a>
          <a href={"mailto:" + contact.email} className="mt-2 block break-all text-sm font-semibold text-brand-700">
            {contact.email}
          </a>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            <a href="/about" className="hover:text-ink">About Us</a>
            <a href="/contact" className="hover:text-ink">Contact</a>
            <a href="/blog" className="hover:text-ink">Blog</a>
            <a href="/privacy-policy" className="hover:text-ink">Privacy Policy</a>
            <a href="/terms" className="hover:text-ink">Terms</a>
            <a href="/disclaimer" className="hover:text-ink">Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 px-4 py-4 text-center text-xs leading-5 text-muted">
        <p>© {new Date().getFullYear()} Meesho Seller Growth AI. Made with love in India.</p>
        <p className="mt-1">Independent service. Not affiliated with or endorsed by Meesho.</p>
      </div>
    </footer>
  );
}
