"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("Not authorized");

  const name = formData.get("name") as string;

  if (!name || name.length < 2) {
    return { error: "The name is too short." };
  }

  await prisma.user.update({
    where: { id: userId },
    data: { name },
  });

  revalidatePath("/dashboard/settings");

  return { success: true };
}
