import { Box, Container } from "@mui/material";
import CustomerForm from "./customer-form";
import CartItem from "../cart/cart-item";

export default function CheckoutPage() {
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        marginTop: "2rem",
      }}
    >
      <Box sx={{ width: "100%", py: 3, mx: "auto" }}>
        <CartItem />
        <CartItem />
      </Box>

      <CustomerForm />
    </Container>
  );
}
