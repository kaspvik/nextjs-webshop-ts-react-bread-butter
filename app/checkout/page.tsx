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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
          backgroundImage: "url('/images/crt-noise.gif')",
          opacity: 1.5, 
          mixBlendMode: "screen",
        }}
      />

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
