import { ProjectHeader } from "@/components/dashboard/projects/project-header";
import { ProjectList } from "@/components/dashboard/projects/project-list";
import { ProjectSearch } from "@/components/dashboard/projects/project-search";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    name: "Alpha App",
    status: "Active",
    updated: "2h ago",
    url: "alpha.evines.com",
  },
  {
    id: "2",
    name: "Marketing Site",
    status: "Pending",
    updated: "1d ago",
    url: "mkt.evines.com",
  },
  {
    id: "3",
    name: "API Service",
    status: "Archived",
    updated: "1w ago",
    url: "api.evines.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <ProjectHeader />
      <ProjectSearch />
      <ProjectList projects={projects} />
    </div>
  );
}
