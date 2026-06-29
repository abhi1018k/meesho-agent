import { MessageCircle, PlayCircle } from "lucide-react";
import { ButtonLink } from "../components/ui/Button";
import { whatsappLink } from "../utils/whatsapp";

export function FinalCTA() {
  return (
    <section className="bg-canvas py-20">
      <div className="section-shell">
        <div className="rounded-[28px] border border-slate-200 bg-ink px-6 py-12 text-center text-white shadow-soft sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Start with a WhatsApp demo</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-heading text-3xl font-extrabold tracking-normal sm:text-5xl">
            Ready to Grow Your Meesho Business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Share your catalog size, top category and growth goal. Get a practical walkthrough of the AI modules that fit your seller workflow.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink("Final CTA chat")} target="_blank" rel="noreferrer" size="lg">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </ButtonLink>
            <ButtonLink href={whatsappLink("Final CTA demo booking")} target="_blank" rel="noreferrer" size="lg" variant="secondary">
              <PlayCircle className="h-5 w-5" /> Book Demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
