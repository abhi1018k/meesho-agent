import { Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "../components/ui/Button";
import { navItems } from "../data/content";
import { useScrollShadow } from "../hooks/useScrollShadow";
import { cn } from "../lib/utils";
import { whatsappLink } from "../utils/whatsapp";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const hasShadow = useScrollShadow();

  return (
    <header className={cn("sticky top-0 z-50 border-b border-transparent bg-white/82 backdrop-blur-xl transition", hasShadow && "border-slate-200 shadow-sm")}> 
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="/" className="focus-ring flex items-center gap-2 rounded-xl" aria-label="Meesho Seller Growth AI home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lift">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-heading text-base font-bold text-ink sm:text-lg">Meesho Seller Growth AI</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={whatsappLink("Navbar")} target="_blank" rel="noreferrer" size="sm">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </ButtonLink>
        </div>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <ButtonLink href={whatsappLink("Mobile nav")} target="_blank" rel="noreferrer" className="mt-2 w-full">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
