import { motion } from "framer-motion";
import { MessageCircle, PlayCircle, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { DashboardPreview } from "../components/DashboardPreview";
import { ButtonLink } from "../components/ui/Button";
import { whatsappLink } from "../utils/whatsapp";

const heroStats = [
  { label: "Seller tasks automated", value: "42K+" },
  { label: "Daily AI checks", value: "24/7" },
  { label: "Growth modules", value: "8" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-canvas">
      <div className="absolute inset-0 bg-grid bg-[length:36px_36px] opacity-60" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-14 pt-12 lg:grid-cols-[0.88fr_1.12fr] lg:pb-16 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Sell Smarter. Grow Faster. Earn More.</span>
          <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Your AI Employee for Meesho Business Growth
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Optimize listings, pricing, product images, shipping costs, competitors, inventory and advertising using AI built for Indian Meesho Sellers.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink("Hero primary CTA")} target="_blank" rel="noreferrer" size="lg">
              <MessageCircle className="h-5 w-5" /> Contact on WhatsApp
            </ButtonLink>
            <ButtonLink href="#dashboard" variant="secondary" size="lg">
              <PlayCircle className="h-5 w-5" /> Watch Demo
            </ButtonLink>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm backdrop-blur">
                <p className="text-xl font-extrabold text-ink sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Cloud based</span>
            <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand-600" /> Profit focused</span>
          </div>
        </motion.div>

        <div className="relative lg:pl-4">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
