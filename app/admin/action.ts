"use server";

import { CartItem } from "@/data";
import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { customAlphabet } from "nanoid";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "../auth";

export async function createProduct(product: Prisma.ProductCreateInput) {
  const nanoid = customAlphabet("1234567890", 4);
  product.articleNumber = nanoid();
  await db.product.create({ data: product });
  revalidatePath("/admin");
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
}

export async function createOrder(cartItems: CartItem[]) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    throw new Error("User must be logged in to create an order");
  }

  const orderNr = `${Date.now()}`;

  const order = await db.order.create({
    data: {
      user: {
        connect: {
          id: session.user.id,
        },
      },
      orderNr,
      items: {
        create: cartItems.map((item) => ({
          image: item.image,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    },
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
      user: true,
    },
  });

  return order;
}

export async function getOrderByOrderNr(orderNr: string) {
  try {
    const order = await db.order.findFirst({
      where: {
        orderNr: orderNr,
      },
      include: {
        items: true,
        user: true,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return {
      customer: order.user,
      items: order.items,
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    throw new Error("Failed to fetch order");
  }
}

export async function saveAddress(formData: {
  name: string;
  address: string;
  zipcode: string;
  city: string;
  email: string;
  phone: string;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    throw new Error("User must be logged in to save address");
  }

  const existingAddress = await db.address.findFirst({
    where: { userId: session.user.id },
  });

  if (existingAddress) {
    await db.address.update({
      where: { id: existingAddress.id },
      data: {
        name: formData.name,
        address1: formData.address,
        zipcode: formData.zipcode,
        city: formData.city,
      },
    });
  } else {
    await db.address.create({
      data: {
        name: formData.name,
        address1: formData.address,
        zipcode: formData.zipcode,
        city: formData.city,
        user: {
          connect: { id: session.user.id },
        },
      },
    });
  }
}
