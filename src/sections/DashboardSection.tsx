import { DashboardPreview } from "../components/DashboardPreview";
import { SectionHeader } from "../components/SectionHeader";

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Interactive dashboard"
          title="See every growth lever in one live seller cockpit"
          description="Track revenue, profit, listing health, competitor movement, inventory risk, campaign performance and AI recommendations from one responsive dashboard."
        />
        <div className="mt-10">
          <DashboardPreview mode="full" />
        </div>
      </div>
    </section>
  );
}
