import { FloatingWhatsApp } from "./layout/FloatingWhatsApp";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { Benefits } from "./sections/Benefits";
import { ComingSoon } from "./sections/ComingSoon";
import { Comparison } from "./sections/Comparison";
import { DashboardSection } from "./sections/DashboardSection";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Trusted } from "./sections/Trusted";
import { Workflow } from "./sections/Workflow";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Trusted />
        <Problem />
        <Features />
        <DashboardSection />
        <Workflow />
        <Benefits />
        <Comparison />
        <ComingSoon />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
