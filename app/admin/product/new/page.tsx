// app/admin/page.tsx
import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import { headers } from "next/headers";
import { db } from "@/prisma/db";

export const dynamic = "force-dynamic"; // ensures fresh server execution

export default async function AdminPage() {
  const session = await auth.api.getSession({ headers: headers() });

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

  // Only render this if the user is verified as admin
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      {/* You can render Dialog or whatever here */}
    </div>
  );
}
