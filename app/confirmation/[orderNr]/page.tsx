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
      }}>
      <Box
        component="main"
        sx={{
          padding: 4,
          bgcolor: "background.paper",
          margin: "2rem 0",
          width: "100%",
        }}>
        <Typography
          variant="h3"
          fontWeight={600}
          component="div"
          sx={{ textAlign: "center" }}>
          Thank you for your order!
        </Typography>
        <Typography
          variant="h3"
          component="p"
          sx={{
            textAlign: "center",
            fontSize: "1.25rem",
            padding: "1.5rem",
            fontWeight: "500",
          }}>
          Your order #{orderNr}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.5rem", fontWeight: "500", pb: 2 }}>
          Shipping address
        </Typography>
        <Box
          sx={{
            boxShadow: 1,
            padding: "1.5rem",
            marginBottom: "2rem",
            backgroundColor: "primary.main",
          }}>
          <Typography fontWeight={500}>
            Name: {deliveryAddress?.name}
          </Typography>
          <Typography fontWeight={500}>
            Address: {deliveryAddress?.address1}
          </Typography>
          <Typography fontWeight={500}>
            City: {deliveryAddress?.city}
          </Typography>
          <Typography fontWeight={500}>
            ZIP Code: {deliveryAddress?.zipcode}
          </Typography>
        </Box>

        <Receipt items={items} totalSum={totalSum} />

        <Typography
          sx={{
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}>
          A receipt has been sent to your email address.
          <br />
          Thanks for shopping at Surf & Sound!
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            textDecoration: "none",
          }}
          component={Link}
          href="/">
          <Button
            variant="contained"
            sx={{
              bgcolor: "primary.main",
              color: "text.primary",
              "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
            }}>
            To start page
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
