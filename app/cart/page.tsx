import { Box, Container, Divider, Typography } from "@mui/material";
import CartItem from "./cart-item";

export default function CartPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        bgcolor: "background.paper",
        marginTop: 2,
        border: "2px solid #9C8173",
        height: { xs: "auto", sm: "500px" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          overflowY: { xs: "visible", sm: "auto" },
          maxHeight: { xs: "none", sm: "100%" },
          width: "100%",
          pr: { xs: 0, sm: 2 },
        }}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Divider orientation="vertical" flexItem />
      </Box>

      <Box sx={{ display: { xs: "block", sm: "none" }, width: "100%" }}>
        <Divider orientation="horizontal" />
      </Box>

      <Box
        sx={{
          flex: { xs: "none", sm: 1 },
          p: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid #9C8173",
            paddingBottom: 1,
          }}
        >
          <Typography variant="h5" sx={{ paddingX: 2 }}>
            Delsumma:
          </Typography>
          <Typography variant="h5" sx={{ paddingX: 2 }}>
            300 kr
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
