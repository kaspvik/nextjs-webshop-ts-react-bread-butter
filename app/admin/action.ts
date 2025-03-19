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
export async function createUser(formData: FormData) {
  try {
    const name = formData.get("name")?.toString();
    const address = formData.get("address")?.toString();
    const zipcode = formData.get("zipcode")?.toString();
    const city = formData.get("city")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();

    if (!name || !address || !zipcode || !city || !email || !phone) {
      return { error: "All fields are required!" };
    }

    const user = await db.user.create({
      data: { name, address, zipcode, city, email, phone },
    });

    return { success: true, user };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Something went wrong!" };
  }
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
