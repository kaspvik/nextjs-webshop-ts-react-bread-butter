"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}
