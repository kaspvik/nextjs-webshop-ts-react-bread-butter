"use server";

import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { customAlphabet } from "nanoid";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";
import { CartItem } from "../provider";

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

  const address = await db.address.findFirst({
    where: { userId: session.user.id },
    orderBy: { id: "desc" },
  });

  if (!address) {
    throw new Error("No saved address found for this user");
  }

  const order = await db.order.create({
    data: {
      user: {
        connect: { id: session.user.id },
      },
      orderNr: Date.now().toString(),
      deliveryAddress: {
        connect: {
          id: address.id,
        },
      },
      items: {
        create: cartItems.map((item) => ({
          image: item.image,
          artist: item.artist,
          price: item.price,
          quantity: item.quantity,
        })),
      },
    },
    include: {
      items: true,
      deliveryAddress: true,
    },
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
      where: { orderNr },
      include: {
        items: true,
        user: true,
        deliveryAddress: true,
      },
    });

    if (!order) {
      throw new Error("Order not found");
    }

    return {
      customer: order.user,
      items: order.items,
      deliveryAddress: order.deliveryAddress,
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

export async function updateProductStock(productId: string, stock: number) {
  try {
    await db.product.update({
      where: { id: productId },
      data: { stock },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error updating stock:", error);
    return { success: false, error: "Failed to update stock" };
  }
}
export async function navigateToUserPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      isAdmin: true,
    },
  });

  if (user?.isAdmin) {
    redirect("/admin");
  } else {
    redirect("/user");
  }
}

export async function getAllOrders() {
  try {
    const orders = await db.order.findMany();

    const ordersWithUsers = await db.order.findMany({
      include: {
        user: true,
      },
    });

    return ordersWithUsers.map((order) => ({
      ...order,
      items: [],
      deliveryAddress: null,
    }));
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}
