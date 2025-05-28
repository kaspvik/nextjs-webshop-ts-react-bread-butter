"use client";
import StyledButton from "@/app/components/styled-button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Address, Order, OrderItem, User } from "@prisma/client";
import { useRouter } from "next/navigation";

type OrderWithRelations = Order & {
  user: User | null;
  items: OrderItem[];
  deliveryAddress: Address | null;
};

type OrderTableProps = {
  orders: OrderWithRelations[];
};

export default function OrderTable({ orders }: OrderTableProps) {
  const router = useRouter();

  const formatProducts = (items: OrderItem[]) =>
    items.map((item) => `${item.artist} (${item.quantity}st)`).join(", ");

  const formatAddress = (address: Address | null) =>
    address
      ? `${address.address1}, ${address.zipcode} ${address.city}`
      : "No address";

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        All Orders
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <StyledButton variant="contained" onClick={() => router.push("/admin")}>
          Back to Admin
        </StyledButton>
      </Box>

      {orders.length > 0 && (
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 3,
            px: 2,
            py: 1,
            backgroundColor: "#eee",
            borderRadius: 1,
            fontWeight: 600,
            mb: 1,
          }}>
          <Typography sx={{ minWidth: "120px", fontWeight: 600 }}>
            Order
          </Typography>
          <Typography sx={{ minWidth: "200px", fontWeight: 600 }}>
            Customer
          </Typography>
        </Box>
      )}

      {orders.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          No orders could be found
        </Typography>
      ) : (
        orders.map((order) => (
          <Accordion
            key={order.id}
            sx={{ backgroundColor: "#FAF2E9", boxShadow: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 3,
                }}>
                <Typography variant="h6" color="black" sx={{ fontWeight: 600 }}>
                  {order.orderNr || order.id.slice(-8)}
                </Typography>
                <Typography variant="h6" color="black">
                  {order.user?.name || "Unknown customer"}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="h6" color="black">
                  <strong>Address:</strong>{" "}
                  {formatAddress(order.deliveryAddress)}
                </Typography>
                <Typography variant="h6" color="black">
                  <strong>Email:</strong> {order.user?.email || "No email"}
                </Typography>
                <Typography variant="h6" color="black">
                  <strong>Products:</strong> {formatProducts(order.items)}
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
}
