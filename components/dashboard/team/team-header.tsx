import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TeamHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter">Team Members</h1>
        <p className="text-zinc-500">
          Manage your team and their access levels.
        </p>
      </div>
      <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl font-bold px-6">
        <UserPlus className="w-4 h-4 mr-2" />
        Invite Member
      </Button>
    </div>
  );
}
