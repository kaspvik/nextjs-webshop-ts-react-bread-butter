"use server";

import { db } from "@/prisma/db";
import { Card, CardContent, Typography } from "@mui/material";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

export default async function UserPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user?.id) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { isAdmin: true },
  });

  if (user?.isAdmin) {
    redirect("/admin");
  }

  if (!session || !session.user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="error" style={{ margin: 0 }}>
          You must be signed in to see your orders.
        </Typography>
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
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        maxWidth: "720px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
      >
        Your orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1" color="textSecondary" style={{ margin: 0 }}>
          No orders found.
        </Typography>
      ) : (
        orders.map((order) => (
          <Card key={order.id} style={{ width: "100%" }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order number: {order.orderNr}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                Delivery address: {order.deliveryAddress?.address1},{" "}
                {order.deliveryAddress?.city}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Products:
              </Typography>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "1.25rem",
                  marginTop: 0,
                }}
              >
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.artist} x {item.quantity} st –
                    {item.quantity * item.price} SEK totalt
                  </li>
                ))}
              </ul>
              <Typography variant="subtitle1" style={{ marginTop: "0.5rem" }}>
                Total:{" "}
                {order.items.reduce(
                  (sum, item) => sum + item.quantity * item.price,
                  0
                )}{" "}
                SEK
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
