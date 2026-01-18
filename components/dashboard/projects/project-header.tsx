import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function ProjectHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter italic">
          Projects <span className="text-zinc-800 NOT-italic text-2xl">.</span>
        </h1>
        <p className="text-zinc-500 text-sm">
          Manage and monitor your deployed applications.
        </p>
      </div>
      <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl font-bold px-6 h-11">
        <Plus className="w-4 h-4 mr-2" />
        New Project
      </Button>
    </div>
  );
}
