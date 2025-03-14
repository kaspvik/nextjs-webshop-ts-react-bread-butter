import { Box, Container, Typography } from "@mui/material";
import CustomerForm from "./customer-form";
import CartItem from "../cart/cart-item";
import OrderOverview from "./order-overview";

export default function CheckoutPage() {
  return (
    <Container
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
        mt: 3,
        mb: 3,
        padding: 4,
      }}
    >
      <Typography variant="h1" sx={{ ml: 6 }}>
        Kassa
      </Typography>

      <Box sx={{ width: "100%", py: 3, px: 6, mx: "auto" }}>
        <CartItem />
        <CartItem />
      </Box>
      <OrderOverview />
      <CustomerForm />
    </Container>
  );
}
