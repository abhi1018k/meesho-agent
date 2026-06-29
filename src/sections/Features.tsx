import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/ui/Card";
import { features } from "../data/content";
import { cn } from "../lib/utils";

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Feature suite"
          title="One AI workspace for listing, pricing, ads, stock and profit"
          description="Each module is built around the decisions Meesho sellers repeat every day, then turns those decisions into clear growth actions."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.03, duration: 0.45 }}
            >
              <Card className="h-full p-5 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border", feature.accent)}>
                  <feature.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-ink">{feature.title}</h3>
                <div className="mt-4 grid gap-2">
                  {feature.features.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
