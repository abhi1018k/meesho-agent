import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/ui/Card";
import { problems } from "../data/content";

export function Problem() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="The daily reality"
          title="Selling on Meesho Shouldn't Be This Hard"
          description="Growth slows when catalog quality, pricing, shipping, ads and competitors are handled in disconnected spreadsheets and manual checks."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.03, duration: 0.45 }}
            >
              <Card className="h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-brand-700">
                  <problem.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{problem.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
