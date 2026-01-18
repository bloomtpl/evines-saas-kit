import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ProjectSearch() {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
      <Input
        placeholder="Search projects..."
        className="bg-zinc-900/50 border-zinc-800 pl-10 rounded-xl focus:ring-zinc-700 h-11 text-zinc-200"
      />
    </div>
  );
}
