"use server";

import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createProduct(product: Prisma.ProductCreateInput) {
  await db.product.create({ data: product });
  revalidatePath("/");
}

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}
