"use server";

import { db } from "@/prisma/db";
import { Card, CardContent, Typography } from "@mui/material";
import { headers } from "next/headers";
import { auth } from "../auth";

export default async function UserPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session || !session.user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold text-red-500">
          You must be signed in to see your orders.
        </h1>
      </div>
    );
  }

  const orders = await db.order.findMany({
    where: { userId: session.user.id },
    include: {
      items: true,
      deliveryAddress: true,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <h1 className="text-2xl font-bold mb-4">Your orders</h1>
      {orders.length === 0 ? (
        <p className="text-lg text-gray-600">No orders found.</p>
      ) : (
        orders.map((order) => (
          <Card key={order.id} className="w-full max-w-xl">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order number: {order.orderNr}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Delivery address: {order.deliveryAddress?.address1},{" "}
                {order.deliveryAddress?.city}
              </Typography>
              <Typography variant="subtitle1">Products:</Typography>
              <ul className="list-disc pl-5">
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.artist} – {item.quantity} st – {item.price} SEK
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
