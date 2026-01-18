import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, MoreVertical, Shield, ShieldCheck } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  status: string;
}

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="p-6 rounded-3xl border border-zinc-900 bg-zinc-950/50 flex flex-col justify-between group hover:border-zinc-800 transition-all">
      <div className="flex justify-between items-start mb-6">
        <Avatar className="h-12 w-12 border-2 border-zinc-900">
          <AvatarImage src={member.avatar} />
          <AvatarFallback className="bg-zinc-900 text-zinc-400 font-mono text-xs">
            {initials}
          </AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-zinc-500 hover:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-zinc-950 border-zinc-900 text-white"
          >
            <DropdownMenuItem className="cursor-pointer focus:bg-zinc-900">
              Change Role
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-rose-500 focus:bg-rose-500/10 focus:text-rose-500">
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-1 mb-6">
        <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
          {member.name}
        </h3>
        <div className="flex items-center gap-2 text-zinc-500 text-xs">
          <Mail className="w-3 h-3" />
          {member.email}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
        <div className="flex items-center gap-2">
          {member.role === "Owner" || member.role === "Admin" ? (
            <ShieldCheck className="w-3.5 h-3.5 text-violet-500" />
          ) : (
            <Shield className="w-3.5 h-3.5 text-zinc-600" />
          )}
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            {member.role}
          </span>
        </div>

        <Badge
          variant="outline"
          className={`text-[9px] uppercase tracking-tighter border-none px-2 py-0 ${
            member.status === "Active"
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-zinc-800 text-zinc-500"
          }`}
        >
          {member.status}
        </Badge>
      </div>
    </div>
  );
}
