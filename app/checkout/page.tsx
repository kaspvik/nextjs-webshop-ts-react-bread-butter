import { Container } from "@mui/material";
import CustomerForm from "./customer-form";

export default function CheckoutPage() {
  return (
    <Container
      sx={{
        height: "100vh",
        backgroundColor: "background.paper",
        marginTop: "2rem",
      }}
    >
      <CustomerForm />
    </Container>
  );
}
