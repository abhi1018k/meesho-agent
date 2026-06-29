import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, description, align = "center", tone = "light" }: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span className={cn("eyebrow", isDark && "border-white/10 bg-white/10 text-emerald-300 shadow-none")}>{eyebrow}</span>
      <h2 className={cn("mt-4 font-heading text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl", isDark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      <p className={cn("mt-4 text-base leading-7 sm:text-lg", isDark ? "text-slate-300" : "text-muted")}>{description}</p>
    </motion.div>
  );
}
