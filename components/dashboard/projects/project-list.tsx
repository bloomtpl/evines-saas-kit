import { Project } from "@/types";
import { ProjectRow } from "./project-row";

export function ProjectList({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-800 p-20 text-center">
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
          No projects found.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-900 bg-zinc-950/50 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-900 bg-zinc-900/20">
              <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Name
              </th>
              <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Status
              </th>
              <th className="p-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Last Update
              </th>
              <th className="p-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-900">
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
