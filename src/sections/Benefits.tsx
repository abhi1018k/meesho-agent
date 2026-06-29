import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { benefits } from "../data/content";

export function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Benefits"
          title="Built to increase sales while protecting net profit"
          description="Meesho Seller Growth AI helps operators focus on the improvements that create visible business impact, not just more dashboard noise."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
                  <benefit.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-3xl font-extrabold text-ink">{benefit.metric}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{benefit.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
