import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import CartItem from "./cart-item";

export default function CartPage() {
  return (
    <Container>
      <Typography
        sx={{
          fontFamily: "var(--font-lobster)",
          fontSize: 35,
          paddingLeft: { xs: 3, sm: 0 },
          paddingTop: 2,
        }}
      >
        Kundvagn
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          bgcolor: { xs: "transparent", sm: "background.paper" },
          marginTop: 2,
          border: { xs: "transparent", sm: "2px solid #9C8173" },
          height: { xs: "auto", sm: "500px" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: { xs: "visible", sm: "auto" },
            maxHeight: { xs: "none", sm: "100%" },
            width: "100%",
            minWidth: "400px",
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
              borderBottom: { xs: "none", sm: "2px solid #9C8173" },
              paddingBottom: { xs: 3, sm: 1 },
              paddingTop: { xs: 3, sm: 1 },
              bgcolor: { xs: "background.paper", sm: "transparen" },
            }}
          >
            <Typography variant="h5" sx={{ paddingX: 2 }}>
              Delsumma:
            </Typography>
            <Typography data-cy="total-price" variant="h5" sx={{ paddingX: 2 }}>
              300 kr
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              paddingTop: 2,
              paddingBottom: { xs: 3, sm: 0 },
              bgcolor: { xs: "background.paper", sm: "transparent" },
            }}
          >
            <Link href="/checkout">
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "white" }}
              >
                FORTSÄTT TILL KASSAN
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
