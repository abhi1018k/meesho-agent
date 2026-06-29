import { CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { ButtonLink } from "../components/ui/Button";
import { pricingPlans } from "../data/content";
import { cn } from "../lib/utils";
import { whatsappLink } from "../utils/whatsapp";

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Pricing"
          title="Plans matched to your catalog and growth stage"
          description="Every seller has different SKUs, margins and operating needs, so pricing is shared after a quick WhatsApp demo."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={cn("rounded-xl border bg-white p-6", plan.featured ? "border-brand-200 shadow-lift" : "border-slate-200 shadow-sm")}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-extrabold text-ink">{plan.name}</h3>
                <span className={cn("rounded-full px-3 py-1 text-xs font-bold", plan.featured ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700")}>{plan.badge}</span>
              </div>
              <p className="mt-5 font-heading text-4xl font-extrabold text-ink">{plan.price}</p>
              <p className="mt-3 min-h-14 text-sm leading-6 text-muted">{plan.description}</p>
              <div className="mt-5 grid gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <ButtonLink href={whatsappLink("Pricing " + plan.name)} target="_blank" rel="noreferrer" className="mt-6 w-full" variant={plan.featured ? "primary" : "secondary"}>
                <MessageCircle className="h-4 w-4" /> Contact for Pricing
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
