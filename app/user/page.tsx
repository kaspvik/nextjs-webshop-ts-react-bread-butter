import { redirect } from "next/navigation";
import { auth } from "@/app/auth";
import { db } from "@/prisma/db";
import { headers } from "next/headers";

export default async function UserPage() {
  const session = await auth.api.getSession({ headers: headers() });

  if (!session?.user?.id) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { isAdmin: true },
  });

  if (user?.isAdmin) {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Page</h1>
      <p className="text-lg text-gray-700">This is the user page.</p>
    </div>
  );
}
