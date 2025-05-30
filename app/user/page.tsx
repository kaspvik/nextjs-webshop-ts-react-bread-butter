"use server";

import { db } from "@/prisma/db";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

function formatOrderDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

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
    orderBy: {
      createdAt: "desc",
    },
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
        variant="h4"
        component="h1"
        style={{ 
          marginTop: "1rem", 
          marginBottom: "1rem",
          color: "#2c1810"
        }}
      >
        Your Orders
      </Typography>

      {orders.length === 0 ? (
        <Card style={{ width: "100%", textAlign: "center", padding: "2rem" }}>
          <Typography variant="h6" color="textSecondary">
            No orders found
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginTop: "0.5rem" }}>
            When you place your first order, it will appear here.
          </Typography>
        </Card>
      ) : (
        <Box style={{ width: "100%" }}>
          {orders.map((order) => {
            const orderTotal = order.items.reduce(
              (sum, item) => sum + item.quantity * item.price,
              0
            );

            return (
              <Card 
                key={order.id} 
                style={{ 
                  width: "100%", 
                  marginBottom: "1rem",
                }}
              >
                <CardContent>
                  <Box style={{ marginLeft: "1rem" }}>
                    <Typography variant="h6" style={{ marginBottom: "0.5rem" }}>
                      #{order.orderNr}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" style={{ marginBottom: "0.5rem" }}>
                      Ordered: {formatOrderDate(order.createdAt)}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" style={{ marginBottom: "1rem" }}>
                      Delivery address: {order.deliveryAddress?.address1}, {order.deliveryAddress?.city}
                    </Typography>

                    <Typography variant="subtitle2" style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                      Products: {order.items.length} items
                    </Typography>

                    {order.items.map((item) => (
                      <Box key={item.id} style={{ 
                        display: "flex", 
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.25rem 0",
                        borderBottom: "1px solid #f0f0f0"
                      }}>
                        <Typography variant="body2">
                          {item.artist} × {item.quantity} pcs
                        </Typography>
                        <Typography variant="body2" style={{ fontWeight: "bold" }}>
                          {item.quantity * item.price} SEK
                        </Typography>
                      </Box>
                    ))}

                    <Box style={{ 
                      display: "flex", 
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 0 0.25rem 0"
                    }}>
                      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                        Total:
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontWeight: "bold", color: "#2c1810" }}>
                        {orderTotal} SEK
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </div>
  );
}
