import { getOrderByOrderNr } from "@/app/admin/action";
import Receipt from "@/app/confirmation/receipt";
import { Box, Button, Container, Link, Typography } from "@mui/material";

export default async function ConfirmationPage({
  params,
}: {
  params: Promise<{ orderNr: string }>;
}) {
  const { orderNr } = await params;
  const order = await getOrderByOrderNr(orderNr);

  const { items, deliveryAddress } = order;
  const totalSum = items.reduce(
    (sum: number, item: any) => sum + item.quantity * item.price,
    0
  );

  return (
    <Container
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
      }}
    >
      <Box
        component="main"
        sx={{
          padding: 4,
          bgcolor: "background.paper",
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <Typography variant="h2" component="div" sx={{ textAlign: "center" }}>
          Thank you for your order!
        </Typography>
        <Typography
          variant="h3"
          component="p"
          sx={{ textAlign: "center", fontSize: "1.25rem", padding: "1.5rem" }}
        >
          Your order # : {orderNr}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.5rem", fontWeight: "500", pb: 2 }}
        >
          Shipping address
        </Typography>
        <Box
          sx={{
            boxShadow: 1,
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "2rem",
            backgroundColor: "background.paper",
          }}
        >
          <Typography>Name: {deliveryAddress?.name}</Typography>
          <Typography>Address: {deliveryAddress?.address1}</Typography>
          <Typography>City: {deliveryAddress?.city}</Typography>
          <Typography>ZIP Code: {deliveryAddress?.zipcode}</Typography>
        </Box>

        <Receipt items={items} totalSum={totalSum} />

        <Typography sx={{ marginTop: "2rem" }}>
          A receipt has been sent to your email address. Thanks for shopping at
          Surf & Sound!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            textDecoration: "none",
          }}
          component={Link}
          href="/"
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              color: "text.primary",
              "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
            }}
          >
            To start page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
