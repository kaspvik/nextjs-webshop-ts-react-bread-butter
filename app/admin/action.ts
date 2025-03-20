"use server";

import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createProduct(product: Prisma.ProductCreateInput) {
  //slumppad artikelnummer här
  await db.product.create({ data: product });
  revalidatePath("/admin");
  // redirect("/admin");
}

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}

export async function updateProduct(
  articleNumber: string,
  data: Prisma.ProductUpdateInput
) {
  await db.product.update({
    where: { articleNumber },
    data,
  });
  revalidatePath("/admin");
  // redirect("/admin");
}
