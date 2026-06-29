import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { comingSoon } from "../data/content";

export function ComingSoon() {
  return (
    <section id="coming-soon" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Coming soon"
          title="Marketplace growth AI beyond Meesho"
          description="The same seller intelligence is expanding into more commerce channels for manufacturers, suppliers and agencies."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comingSoon.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Waitlist access opens after Meesho seller onboarding.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
