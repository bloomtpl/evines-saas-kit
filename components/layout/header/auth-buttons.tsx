import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard, LogIn, LogOut, Settings } from "lucide-react";
import Link from "next/link";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    const userInitials = session.user.name
      ? session.user.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "U";

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-xl p-0 overflow-hidden border border-zinc-800"
          >
            <Avatar className="h-10 w-10 rounded-xl">
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || "User"}
              />
              <AvatarFallback className="bg-zinc-900 text-zinc-400 rounded-xl">
                {userInitials}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56 mt-2 bg-zinc-950 border-zinc-800 text-zinc-400 rounded-xl"
          align="end"
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none text-white">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-zinc-500">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuItem
            asChild
            className="focus:bg-zinc-900 focus:text-white cursor-pointer rounded-lg"
          >
            <Link href="/dashboard" className="flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="focus:bg-zinc-900 focus:text-white cursor-pointer rounded-lg"
          >
            <Link href="/dashboard/settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="relative flex w-full cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none transition-colors focus:bg-red-500/10 focus:text-red-500 text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      variant="default"
      asChild
      className="bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all px-6"
    >
      <Link href="/signin" className="flex items-center gap-2">
        <LogIn className="w-4 h-4" />
        Sign in
      </Link>
    </Button>
  );
}
