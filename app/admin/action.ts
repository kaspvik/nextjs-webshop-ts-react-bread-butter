"use server";

import { db } from "@/prisma/db";

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
}
