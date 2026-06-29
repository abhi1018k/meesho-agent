import { motion } from "framer-motion";
import { trustedItems } from "../data/content";

export function Trusted() {
  return (
    <section className="bg-white py-8">
      <div className="section-shell">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted">Built for Indian Ecommerce Sellers</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {trustedItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-bold text-slate-700"
            >
              <item.icon className="h-4 w-4 text-brand-600" /> {item.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
