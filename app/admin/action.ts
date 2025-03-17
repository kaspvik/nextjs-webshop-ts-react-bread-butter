"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData) {
  const title = formData.get("title")?.toString();
  const articleNumber = formData.get("articleNumber")?.toString();
  const weight = Number(formData.get("weight"));
  const price = Number(formData.get("price"));
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();

  if (!title || !articleNumber || !price || !weight || !description || !image)
    throw new Error("400");

  await db.product.create({
    data: { title, description, articleNumber, weight, price, image },
  });
  revalidatePath("/");
}

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}
