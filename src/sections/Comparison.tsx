import { CheckCircle2, XCircle } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const traditional = ["Manual", "Time Consuming", "Guesswork", "No Alerts"];
const ai = ["AI Powered", "Automated", "Data Driven", "Real-Time Insights"];

export function Comparison() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Comparison"
          title="Traditional Selling vs AI Selling"
          description="The difference is not more effort. It is faster decisions, better visibility and fewer profit leaks across the whole seller workflow."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-ink">Traditional Selling</h3>
            <div className="mt-5 grid gap-3">
              {traditional.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  <XCircle className="h-5 w-5 text-rose-600" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-extrabold text-ink">AI Selling</h3>
            <div className="mt-5 grid gap-3">
              {ai.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
