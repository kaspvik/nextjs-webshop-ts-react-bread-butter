"use client";
import { Box, Container, Typography } from "@mui/material";
import CartList from "../cart/cart-list";
import GoBackButton from "../components/go-back-button";
import { useCart } from "../provider";
import CustomerForm from "./customer-form";
import OrderOverview from "./order-overview";

export default function CheckoutPage() {
  const { isLoaded } = useCart();
  if (!isLoaded) return null;
  return (
    <Container>
      <GoBackButton />
      <Box
        sx={{
          height: "100%",
          backgroundColor: "background.paper",
          mt: 3,
          mb: 3,

          padding: { xs: 0, sm: 2, md: 4 },
          border: 2,
          borderRadius: 2,
          borderColor: "text.secondary",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mt: { xs: 2 }, ml: { xs: 1, sm: 3, md: 6 } }}
        >
          Cart
        </Typography>

        <Box
          sx={{ width: "95%", py: 3, px: { xs: 0, sm: 2, md: 6 }, mx: "auto" }}
        >
          <CartList />
        </Box>
        <OrderOverview />
        <CustomerForm />
      </Box>
    </Container>
  );
}
