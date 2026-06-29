import { motion } from "framer-motion";
import { AlertTriangle, ArrowUpRight, Bot, CheckCircle2, Package, Sparkles, Target, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboardData } from "../data/content";
import { cn } from "../lib/utils";

type DashboardPreviewProps = {
  mode?: "hero" | "full";
};

const statCards = [
  { label: "Revenue", value: "INR 9.48L", change: "+31%", icon: TrendingUp, tone: "text-emerald-700 bg-emerald-50" },
  { label: "Listing Health", value: "86/100", change: "+12", icon: CheckCircle2, tone: "text-brand-700 bg-brand-50" },
  { label: "Profit", value: "INR 2.41L", change: "+24%", icon: Target, tone: "text-blue-700 bg-blue-50" },
  { label: "Stock Risk", value: "7 SKUs", change: "Fix today", icon: Package, tone: "text-amber-700 bg-amber-50" },
];

const alerts = [
  "Kurti set competitor dropped price by INR 28",
  "Festival bid can increase ROAS by 18%",
  "Top SKU may stock out in 5 days",
];

const recommendations = [
  "Rewrite title for cotton kurti keyword cluster",
  "Create white-background image for 12 slow movers",
  "Reduce package width on 4 bulky SKUs",
];

export function DashboardPreview({ mode = "hero" }: DashboardPreviewProps) {
  const isFull = mode === "full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "overflow-hidden rounded-[28px] border border-white/80 bg-white/90 shadow-soft backdrop-blur-xl",
        isFull ? "p-4 sm:p-5" : "p-3 sm:p-4",
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-bold text-ink">Growth Command Center</p>
            <p className="text-xs text-muted">Live AI seller cockpit</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Live</span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <span className={cn("flex h-9 w-9 items-center justify-center rounded-xl", card.tone)}>
                <card.icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-bold text-emerald-700">{card.change}</span>
            </div>
            <p className="mt-3 text-xs font-medium text-muted">{card.label}</p>
            <p className="mt-1 text-lg font-extrabold text-ink">{card.value}</p>
          </div>
        ))}
      </div>

      <div className={cn("mt-4 grid gap-4", isFull ? "lg:grid-cols-[1.5fr_1fr]" : "lg:grid-cols-[1.35fr_1fr]")}> 
        <div className="rounded-2xl border border-slate-100 bg-white p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-ink">Sales Analytics</p>
              <p className="text-xs text-muted">Revenue and profit trend</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
              <ArrowUpRight className="h-3.5 w-3.5" /> 7 days
            </span>
          </div>
          <div className={cn("w-full", isFull ? "h-72" : "h-56")}> 
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dashboardData} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16A34A" stopOpacity={0.22} />
                    <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                <Tooltip
                  contentStyle={{ borderRadius: 16, borderColor: "#E5E7EB", boxShadow: "0 12px 40px rgba(15, 23, 42, 0.12)" }}
                  formatter={(value, name) => ["INR " + Number(value).toLocaleString("en-IN"), name]}
                />
                <Area type="monotone" dataKey="revenue" stroke="#7C3AED" strokeWidth={3} fill="url(#revenue)" />
                <Area type="monotone" dataKey="profit" stroke="#16A34A" strokeWidth={3} fill="url(#profit)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <p className="text-sm font-bold text-ink">Competitor Alerts</p>
            </div>
            <div className="mt-3 space-y-2">
              {alerts.map((alert) => (
                <div key={alert} className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium leading-5 text-slate-700">
                  {alert}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-ink p-4 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-emerald-300" />
              <p className="text-sm font-bold">AI Recommendations</p>
            </div>
            <div className="mt-3 space-y-2">
              {recommendations.map((item) => (
                <div key={item} className="flex gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs leading-5 text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isFull ? (
        <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-4">
            <p className="text-sm font-bold text-ink">Campaign Performance</p>
            <p className="text-xs text-muted">Orders influenced by optimized bids</p>
            <div className="mt-3 h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData} margin={{ top: 8, right: 4, left: -24, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <Tooltip contentStyle={{ borderRadius: 16, borderColor: "#E5E7EB" }} />
                  <Bar dataKey="orders" fill="#2563EB" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Inventory", "5 day reorder window", "bg-cyan-50 text-cyan-700"],
              ["Listing Health", "18 listings need attributes", "bg-brand-50 text-brand-700"],
              ["Shipping", "INR 18 avg saving found", "bg-emerald-50 text-emerald-700"],
            ].map(([title, body, tone]) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-4">
                <span className={cn("rounded-full px-2.5 py-1 text-xs font-bold", tone)}>{title}</span>
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{body}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}
