import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { faqs } from "../data/content";
import { cn } from "../lib/utils";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="section-shell max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions sellers ask before booking a demo"
          description="Short answers for Meesho sellers, agencies, manufacturers and suppliers evaluating AI-assisted marketplace growth."
        />
        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-xl px-5 py-5 text-left"
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span className="text-base font-bold text-ink">{faq.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted transition", active && "rotate-180 text-brand-700")} />
                </button>
                {active ? <p className="px-5 pb-5 text-sm leading-7 text-muted">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
