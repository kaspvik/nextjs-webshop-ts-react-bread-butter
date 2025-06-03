"use client";

import StyledButton from "@/app/components/styled-button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Switch,
  Typography,
} from "@mui/material";
import { Address, Order, OrderItem, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toggleShipped } from "../action";
import { format } from "date-fns";

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
  const [isPending, startTransition] = useTransition();

  const handleToggleShipped = (orderId: string) => {
    startTransition(() => {
      toggleShipped(orderId).catch((err) =>
        console.error("Failed to toggle shipped:", err)
      );
    });
  };

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
          }}
        >
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
        [...orders]
          .sort((a, b) => {
            if (a.isShipped !== b.isShipped) {
              return a.isShipped ? -1 : 1;
            }

            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          .map((order) => {
            const formattedDate = format(
              new Date(order.createdAt),
              "yyyy-MM-dd HH:mm"
            );

            return (
              <Accordion
                key={order.id}
                sx={{ backgroundColor: "#eee", boxShadow: 2 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: 3,
                      width: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="black"
                      sx={{ fontWeight: 600, minWidth: "140px", flexShrink: 0 }}
                    >
                      {order.orderNr || order.id.slice(-8)} — {formattedDate}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="black"
                      sx={{ minWidth: "200px", flexGrow: 1 }}
                    >
                      {order.user?.name || "Unknown customer"}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body1" color="black">
                        Shipped:
                      </Typography>
                      <Switch
                        checked={order.isShipped}
                        onChange={() => handleToggleShipped(order.id)}
                        onClick={(event) => event.stopPropagation()}
                        color="success"
                        sx={{
                          "& .MuiSwitch-track": {
                            borderRadius: 0,
                          },
                        }}
                        disabled={isPending}
                      />
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <Typography variant="h6" color="black">
                      <strong>Address:</strong> {formatAddress(order.deliveryAddress)}
                    </Typography>
                    <Typography variant="h6" color="black">
                      <strong>Email:</strong> {order.user?.email || "No email"}
                    </Typography>
                    <Typography variant="h6" color="black">
                      <strong>Products:</strong> {formatProducts(order.items)}
                    </Typography>
                    <Typography variant="h6" color="black">
                      <strong>Order date:</strong> {formattedDate}
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })
      )}
    </Box>
  );
}
