import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { EmptyState } from "@/components/dashboard/empty-state";
import { StatsGrid } from "@/components/dashboard/stats-grid";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <DashboardHeader />

      <StatsGrid />

      <EmptyState
        title="No projects found"
        description="You haven't created any projects yet. Start building your next idea now."
      />
    </div>
  );
}
