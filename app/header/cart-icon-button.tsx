import { Close } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import {
  Backdrop,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CartList from "../cart/cart-list";
import CartSummary from "../cart/cart-summary";
import { useCart } from "../provider";

export default function MyDrawer() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const router = useRouter();

  return (
    <>
      <IconButton
        data-cy="cart-link"
        onClick={() => {
          toggleDrawer(true);
          router.push("/checkout");
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Badge
          data-cy="cart-items-count-badge"
          invisible={cartCount === 0}
          badgeContent={cartCount}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "background.paper",
              color: "text.primary",
              fontSize: { xs: "0.8rem", md: "1rem" },
              height: { xs: 16, sm: 18, md: 25 },
              minWidth: { xs: 15, md: 25 },
              top: { xs: -2, md: 0 },
              right: { xs: 0, sm: 15, md: 20 },
              borderRadius: "50%",
            },
          }}
        />
        <ShoppingCartIcon
          sx={{
            fontSize: { xs: 23, sm: 28, md: 40 },
            mx: { sm: 2 },
            color: "text.primary",
          }}
        />
      </IconButton>

      {/* Backdrop for darkened background */}
      <Backdrop
        open={open}
        sx={{
          zIndex: 1300, // Should be behind the drawer but in front of the rest of the page
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background for everything behind the drawer
        }}
        onClick={toggleDrawer(false)} // Close the drawer when backdrop is clicked
      />

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          zIndex: 1301,
          width: { xs: "50%", sm: 400, md: 500 },
          maxWidth: 320,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            paddingY: 3,
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={toggleDrawer(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "text.primary",
            }}
          >
            <Close />
          </IconButton>

          <Typography
            variant="h5"
            sx={{
              marginBottom: 2,
              fontFamily: "var(--font-lobster)",
              paddingLeft: 3,
            }}
          >
            Kundvagn
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              paddingLeft: 2,
            }}
          >
            <CartList />
            <Divider sx={{ marginY: 2 }} />
            <CartSummary />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
