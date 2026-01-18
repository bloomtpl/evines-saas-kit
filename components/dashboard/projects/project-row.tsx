import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Folder, Clock, MoreHorizontal, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Project } from "@/types";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <tr className="group hover:bg-zinc-900/30 transition-colors">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
            <Folder className="w-4 h-4" />
          </div>
          <div>
            <p className="text-sm font-bold text-zinc-200">{project.name}</p>
            <p className="text-xs text-zinc-600 font-mono">{project.url}</p>
          </div>
        </div>
      </td>
      <td className="p-4">
        <Badge
          variant="outline"
          className={`rounded-full text-[10px] px-2 py-0 border-none font-bold ${
            project.status === "Active"
              ? "bg-emerald-500/10 text-emerald-500"
              : project.status === "Pending"
                ? "bg-amber-500/10 text-amber-500"
                : "bg-zinc-800 text-zinc-500"
          }`}
        >
          {project.status}
        </Badge>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2 text-zinc-500 text-xs italic">
          <Clock className="w-3 h-3" />
          {project.updated}
        </div>
      </td>
      <td className="p-4 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-zinc-800">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-zinc-950 border-zinc-900 text-white"
          >
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-zinc-900 focus:text-white">
              <ExternalLink className="w-3 h-3" /> Visit App
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 focus:bg-zinc-900 focus:text-white text-rose-500">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
}
