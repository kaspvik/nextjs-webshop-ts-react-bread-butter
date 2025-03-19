import { Box, Container, Typography } from "@mui/material";
import CustomerForm from "./customer-form";
import OrderOverview from "./order-overview";
import CartList from "../cart/cart-list";

export default function CheckoutPage() {
  return (
    <Container
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
        mt: 3,
        mb: 3,
        padding: { xs: 0, sm: 2, md: 4 },
        border: 1,
        borderRadius: 2,
        borderColor: "text.secondary",
      }}
    >
      <Typography variant="h1" sx={{ ml: { xs: 1, sm: 3, md: 6 } }}>
        Kassa
      </Typography>

      <Box
        sx={{ width: "100%", py: 3, px: { xs: 1, sm: 2, md: 6 }, mx: "auto" }}
      >
        <CartList />
      </Box>
      <OrderOverview />
      <CustomerForm />
    </Container>
  );
}
