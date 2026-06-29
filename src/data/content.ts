import {
  BadgeIndianRupee,
  BarChart3,
  BellRing,
  Bot,
  Boxes,
  Camera,
  CheckCircle2,
  Clock3,
  Cloud,
  Gem,
  ImagePlus,
  LineChart,
  Megaphone,
  PackageCheck,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  phone: "+91 90 99 55 20 44",
  whatsapp: "https://wa.me/919099552044",
  message:
    "Hi, I want to grow my Meesho business with Meesho Seller Growth AI. Please share the demo and pricing.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Coming Soon", href: "#coming-soon" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustedItems = [
  { label: "AI Powered", icon: Sparkles },
  { label: "Fast", icon: Zap },
  { label: "Secure", icon: ShieldCheck },
  { label: "Cloud Based", icon: Cloud },
  { label: "Made in India", icon: BadgeIndianRupee },
];

export const problems = [
  { title: "Poor Listings", detail: "Weak titles, missing keywords and incomplete attributes reduce discoverability.", icon: PackageCheck },
  { title: "Wrong Pricing", detail: "Margins disappear when commission, returns and shipping are guessed manually.", icon: BadgeIndianRupee },
  { title: "Low Visibility", detail: "Products struggle to rank when content, ads and reviews move separately.", icon: Target },
  { title: "High Shipping Cost", detail: "Bulky images, packaging and catalog choices can quietly increase costs.", icon: Truck },
  { title: "Manual Work", detail: "Daily checks take hours across inventory, ads, competitor pages and pricing.", icon: Clock3 },
  { title: "Price Changes", detail: "Competitors can move before you notice and steal momentum from winners.", icon: BellRing },
  { title: "Low Profit", detail: "Revenue can rise while net profit stays hidden without SKU-level clarity.", icon: LineChart },
  { title: "Poor Ads", detail: "Campaign budgets leak when bids, ROAS and product health are not connected.", icon: Megaphone },
];

export type Feature = {
  title: string;
  icon: LucideIcon;
  accent: string;
  features: string[];
};

export const features: Feature[] = [
  {
    title: "AI Product Listing Expert",
    icon: Bot,
    accent: "text-brand-600 bg-brand-50 border-brand-100",
    features: ["SEO Titles", "Descriptions", "Keywords", "Attributes", "Listing Score", "Category Suggestions"],
  },
  {
    title: "AI Product Image Generator",
    icon: ImagePlus,
    accent: "text-blue-700 bg-blue-50 border-blue-100",
    features: ["White Background", "Lifestyle Images", "Infographics", "Packaging Optimization", "Shipping Cost Reduction", "Size Charts"],
  },
  {
    title: "Pricing Expert",
    icon: BadgeIndianRupee,
    accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    features: ["Profit Calculator", "Selling Price", "Lowest Safe Price", "Festival Pricing", "Margin Simulator"],
  },
  {
    title: "Competitor Tracker",
    icon: Radar,
    accent: "text-rose-700 bg-rose-50 border-rose-100",
    features: ["Price Alerts", "Discount Tracking", "Review Tracking", "Rating Changes", "Best Seller Monitoring"],
  },
  {
    title: "Meesho Ads AI",
    icon: Megaphone,
    accent: "text-amber-700 bg-amber-50 border-amber-100",
    features: ["Campaign Creation", "Budget Suggestions", "Bid Optimization", "ROAS Reports", "AI Recommendations"],
  },
  {
    title: "Inventory Forecast",
    icon: Boxes,
    accent: "text-cyan-700 bg-cyan-50 border-cyan-100",
    features: ["Demand Prediction", "Stock Alerts", "Dead Stock Detection", "Reorder Quantity"],
  },
  {
    title: "Profit Dashboard",
    icon: BarChart3,
    accent: "text-slate-800 bg-slate-100 border-slate-200",
    features: ["Sales", "Revenue", "Profit", "Returns", "ROI", "Analytics"],
  },
  {
    title: "Daily AI Advisor",
    icon: Sparkles,
    accent: "text-fuchsia-700 bg-fuchsia-50 border-fuchsia-100",
    features: ["Today's Tasks", "Growth Suggestions", "Competitor Updates", "Inventory Alerts", "Price Recommendations"],
  },
];

export const workflow = [
  "Upload Product",
  "AI Optimizes Listing",
  "Generate Images",
  "Smart Pricing",
  "Track Competitors",
  "Optimize Ads",
  "Increase Sales",
];

export const benefits = [
  { title: "Increase Sales", icon: TrendingUp, metric: "+38%", detail: "Find listing, price and ad improvements before momentum slows." },
  { title: "Improve Profit", icon: Gem, metric: "+22%", detail: "See contribution margin after shipping, returns, ads and discounts." },
  { title: "Reduce Shipping Cost", icon: Truck, metric: "-14%", detail: "Spot packaging and catalog changes that can reduce cost leakage." },
  { title: "Better Visibility", icon: Target, metric: "+51%", detail: "Upgrade titles, attributes and keyword coverage for search intent." },
  { title: "Save Time", icon: Clock3, metric: "6 hrs", detail: "Replace repetitive catalog checks with one focused daily action list." },
  { title: "Automate Daily Work", icon: CheckCircle2, metric: "24/7", detail: "Get alerts for stock, competitors, campaigns and listing health." },
];

export const comingSoon = [
  { title: "Amazon Seller Growth AI", icon: PackageCheck },
  { title: "Flipkart Seller Growth AI", icon: Camera },
  { title: "Shopify Growth AI", icon: TrendingUp },
  { title: "Multi Marketplace AI", icon: Users },
];

export const pricingPlans = [
  {
    name: "Starter",
    badge: "For new sellers",
    price: "Contact",
    description: "Listing, pricing and daily AI guidance for a focused catalog.",
    features: ["AI listing optimizer", "Profit calculator", "Daily AI advisor", "WhatsApp onboarding"],
  },
  {
    name: "Growth",
    badge: "Most popular",
    price: "Custom",
    description: "A complete growth layer for active sellers scaling winners.",
    features: ["Everything in Starter", "Competitor tracker", "Inventory forecast", "Meesho Ads AI", "Profit dashboard"],
    featured: true,
  },
  {
    name: "Agency",
    badge: "For teams",
    price: "Custom",
    description: "Multi-client workflows for agencies, manufacturers and suppliers.",
    features: ["Multiple seller workspaces", "Priority setup", "Advanced reporting", "Team access"],
  },
];

export const faqs = [
  {
    question: "How does it work?",
    answer:
      "You share your product and business goals, then the platform analyzes listing quality, pricing, profit, competitors, ads and inventory to create daily growth actions.",
  },
  {
    question: "Who can use it?",
    answer:
      "It is built for Meesho sellers, manufacturers, suppliers, resellers and ecommerce agencies serving Indian marketplace brands.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Yes. The dashboard translates data into simple actions like improve title, reduce price, reorder stock or pause a weak campaign.",
  },
  {
    question: "Can agencies use it?",
    answer:
      "Yes. The Agency plan supports multi-client workflows, reporting and team access for catalog and growth operators.",
  },
  {
    question: "How do I start?",
    answer:
      "Tap the WhatsApp button, request a demo and share your catalog size. The team will recommend the right setup and pricing.",
  },
];

export const dashboardData = [
  { day: "Mon", revenue: 92000, profit: 21000, orders: 142 },
  { day: "Tue", revenue: 112000, profit: 26000, orders: 166 },
  { day: "Wed", revenue: 98000, profit: 23500, orders: 151 },
  { day: "Thu", revenue: 136000, profit: 34200, orders: 205 },
  { day: "Fri", revenue: 148000, profit: 38900, orders: 228 },
  { day: "Sat", revenue: 173000, profit: 46200, orders: 264 },
  { day: "Sun", revenue: 189000, profit: 52100, orders: 291 },
];
