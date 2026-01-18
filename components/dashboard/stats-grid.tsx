import { Badge } from "@/components/ui/badge";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    name: "Total Revenue",
    value: "$12,450",
    change: "+12.5%",
    trend: "up",
    icon: BarChart3,
  },
  {
    name: "Active Users",
    value: "1,248",
    change: "+18.2%",
    trend: "up",
    icon: Users,
  },
  {
    name: "API Requests",
    value: "45.2k",
    change: "-2.4%",
    trend: "down",
    icon: Zap,
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-colors group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
              <stat.icon className="w-5 h-5 text-zinc-400" />
            </div>
            <Badge
              variant="outline"
              className={`text-[10px] font-mono border-none ${
                stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
              }`}
            >
              {stat.trend === "up" ? (
                <ArrowUpRight className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDownRight className="w-3 h-3 mr-1" />
              )}
              {stat.change}
            </Badge>
          </div>
          <p className="text-zinc-500 text-sm font-medium">{stat.name}</p>
          <h3 className="text-3xl font-bold tracking-tight mt-1">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}
