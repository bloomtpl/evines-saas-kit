import { TeamCard } from "@/components/dashboard/team/team-card";
import { TeamHeader } from "@/components/dashboard/team/team-header";
import { TeamPermissionsInfo } from "@/components/dashboard/team/team-permissions";

const team = [
  {
    id: "1",
    name: "Alex River",
    email: "alex@example.com",
    role: "Owner",
    avatar: "https://github.com/shadcn.png",
    status: "Active",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah.c@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@example.com",
    role: "Member",
    status: "Invited",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <TeamHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      <TeamPermissionsInfo />
    </div>
  );
}
