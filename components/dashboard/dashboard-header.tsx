import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-2">
          <span>Main</span>
          <span className="text-zinc-800">/</span>
          <span className="text-zinc-300">Overview</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>
      </div>

      <Button className="bg-white text-black hover:bg-zinc-200 rounded-full font-bold px-6">
        <Plus className="w-4 h-4 mr-2" />
        Create Project
      </Button>
    </div>
  );
}
