import { auth } from "@/auth";
import DashboardLayout from "@/components/dashboard/layout/dashboard-layout";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/signin?callbackUrl=/dashboard");
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
