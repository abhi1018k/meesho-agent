import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { workflow } from "../data/content";

export function Workflow() {
  return (
    <section id="solutions" className="bg-ink py-20 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Workflow"
          title="From product upload to profitable growth actions"
          description="A guided operating system for sellers who want every catalog decision connected to real business outcomes."
          tone="dark"
        />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-7">
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-extrabold text-ink">{index + 1}</span>
              <p className="mt-4 min-h-12 text-sm font-bold leading-6 text-white">{step}</p>
              {index < workflow.length - 1 ? <ArrowRight className="absolute -right-2 top-6 hidden h-4 w-4 text-emerald-300 lg:block" /> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
