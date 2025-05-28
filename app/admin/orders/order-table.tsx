"use client";
import { Box, Container, Typography } from "@mui/material";
import { Address, Order, OrderItem, User } from "@prisma/client";

type OrderWithRelations = Order & {
  user: User | null;
  items: OrderItem[];
  deliveryAddress: Address | null;
};

type OrderTableProps = {
  orders: OrderWithRelations[];
};

export default function OrderTable({ orders }: OrderTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const formatProducts = (items: OrderItem[]) => {
    return items
      .map((item) => `${item.artist} (${item.quantity}st)`)
      .join(", ");
  };

  const formatAddress = (address: Address | null) => {
    if (!address) return "No address";
    return `${address.address1}, ${address.zipcode} ${address.city}`;
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }}>
        All Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: "center", marginTop: 4 }}>
          No orders could be found
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {orders.map((order) => (
            <Container
              key={order.id}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FAF2E9",
                padding: 2,
                borderRadius: 2,
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)",
                gap: 1,
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}>
              <Box sx={{ minWidth: "120px" }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Order ID:
                </Typography>
                <Typography variant="body2">
                  {order.orderNr || order.id.slice(-8)}
                </Typography>
              </Box>

              <Box sx={{ minWidth: "100px" }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Date:
                </Typography>
                <Typography variant="body2">{formatDate(order.id)}</Typography>
              </Box>

              <Box sx={{ minWidth: "150px" }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Costumer:
                </Typography>
                <Typography variant="body2">
                  {order.user?.name || "Unknown costumer"}
                </Typography>
              </Box>

              <Box sx={{ minWidth: "200px", flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Address:
                </Typography>
                <Typography variant="body2">
                  {formatAddress(order.deliveryAddress)}
                </Typography>
              </Box>

              <Box sx={{ minWidth: "180px" }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Email:
                </Typography>
                <Typography variant="body2">
                  {order.user?.email || "No email"}
                </Typography>
              </Box>

              <Box sx={{ minWidth: "250px", flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Products:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  {formatProducts(order.items)}
                </Typography>
              </Box>
            </Container>
          ))}
        </Box>
      )}
    </Box>
  );
}
