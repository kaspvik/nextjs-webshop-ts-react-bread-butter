"use server";

import { db } from "@/prisma/db";
import { Prisma } from "@prisma/client";
import { customAlphabet } from "nanoid";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "../auth";
import { CartItem } from "../provider";

export async function createProduct(product: Prisma.ProductCreateInput) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.isAdmin) {
    throw new Error("Must be a logged in admin to create a product");
  }

  const nanoid = customAlphabet("1234567890", 4);
  product.articleNumber = nanoid();
  await db.product.create({ data: product });
  revalidatePath("/admin");
}

export async function deleteProduct(id: string) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.isAdmin) {
    throw new Error("Must be a logged in admin to delete a product");
  }
  await db.product.delete({ where: { id: id } });
  revalidatePath("/");
}

export async function updateProduct(
  articleNumber: string,
  data: Prisma.ProductUpdateInput
) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.isAdmin) {
    throw new Error("Must be a logged in admin to update a product");
  }
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

  const generateOrderNr = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    8
  );
  const orderNr = `ORD-${generateOrderNr()}`;

  const address = await db.address.findFirst({
    where: { userId: session.user.id },
    orderBy: { id: "desc" },
  });

  if (!address) {
    throw new Error("No saved address found for this user");
  }

  for (const item of cartItems) {
    const product = await db.product.findUnique({
      where: { id: item.id },
      select: { stock: true, artist: true, album: true },
    });

    if (!product || product.stock === null || product.stock === 0) {
      throw new Error(
        `Unfortunately we are currently out of stock for the CD ${item.album} by ${item.artist}`
      );
    } else if (product.stock < item.quantity) {
      throw new Error(
        `We only have ${product.stock} of the CD ${item.album} by ${item.artist}, which is less than the requested quantity (${item.quantity}).`
      );
    }
  }

  const order = await db.order.create({
    data: {
      user: {
        connect: { id: session.user.id },
      },
      orderNr,
      deliveryAddress: {
        connect: {
          id: address.id,
        },
      },
      createdAt: new Date(),
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

  for (const item of cartItems) {
    await db.product.update({
      where: { id: item.id },
      data: {
        stock: {
          decrement: item.quantity,
        },
      },
    });
  }

  return order;
}

export async function getOrderByOrderNr(orderNr: string) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    throw new Error("Error: Unable to load order");
  }
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

export async function updateProductStock(productId: string, stock: number) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.isAdmin) {
    throw new Error("Unauthorized: must be logged in admin to update stock");
  }

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

export async function getAllOrders() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.isAdmin) {
    throw new Error("Error: Unablew to load orders");
  }
  try {
    const ordersWithItems = await db.order.findMany({
      include: {
        user: true,
        items: true,
        deliveryAddress: true,
      },
    });

    return ordersWithItems;
  } catch (error) {
    console.error("Error fetching orders with items:", error);

    try {
      const ordersWithoutItems = await db.order.findMany({
        include: {
          user: true,
          deliveryAddress: true,
        },
      });

      return ordersWithoutItems.map((order) => ({
        ...order,
        items: [],
      }));
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError);
      throw new Error("Failed to fetch orders");
    }
  }
}

export async function toggleShipped(orderId: string) {
  const order = await db.order.findUnique({ where: { id: orderId } });
  if (!order) throw new Error("Order not found");

  const updatedOrder = await db.order.update({
    where: { id: orderId },
    data: { isShipped: !order.isShipped },
    select: { isShipped: true },
  });

  revalidatePath("/admin");

  return updatedOrder.isShipped;
}
