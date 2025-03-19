"use server";

import { CartItem } from "@/data";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}

export async function createOrder(cartItems: CartItem[]) {
  const order = await db.order.create({
    data: {
      items: {
        create: cartItems.map((item) => ({
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    },
    //inkluderar related records, alltså alla items
    include: { items: true },
  });
  return order;
}

export async function getOrderById(id: string) {
  const order = await db.order.findUnique({
    where: {
      id: id,
    },
    include: {
      items: true,
    },
  });

  return order;
}
