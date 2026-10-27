import { FloatingWhatsApp } from "./layout/FloatingWhatsApp";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { BlogIndex, BlogPost } from "./pages/Blog";
import { About, Contact, Disclaimer, NotFound } from "./pages/InfoPages";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";
import { Benefits } from "./sections/Benefits";
import { ComingSoon } from "./sections/ComingSoon";
import { Comparison } from "./sections/Comparison";
import { DashboardSection } from "./sections/DashboardSection";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { LatestPosts } from "./sections/LatestPosts";
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Trusted } from "./sections/Trusted";
import { Workflow } from "./sections/Workflow";

function HomePage() {
  return (
    <>
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
      <LatestPosts />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function resolveRoute(rawPath: string) {
  const path = rawPath.replace(/\/+$/, "").toLowerCase() || "/";
  if (path === "/") return <HomePage />;
  if (path === "/privacy-policy" || path === "/privacy") return <PrivacyPolicy />;
  if (path === "/terms" || path === "/terms-and-conditions") return <Terms />;
  if (path === "/disclaimer") return <Disclaimer />;
  if (path === "/about" || path === "/about-us") return <About />;
  if (path === "/contact" || path === "/contact-us") return <Contact />;
  if (path === "/blog") return <BlogIndex />;
  if (path.startsWith("/blog/")) return <BlogPost slug={path.slice("/blog/".length)} />;
  return <NotFound />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased">
      <Navbar />
      <main>{resolveRoute(window.location.pathname)}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
