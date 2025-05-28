// app/admin/page.tsx
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import { headers } from "next/headers";
import { db } from "@/prisma/db";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { isAdmin: true },
  });

  if (!user?.isAdmin) {
    redirect("/user");
  }

  return null
}
