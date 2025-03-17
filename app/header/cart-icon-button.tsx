import { Close } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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

  return (
    <>
      {/* Cart Icon Button (ShoppingCartIcon) */}
      <IconButton
        data-cy="cart-link"
        onClick={toggleDrawer(true)}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1301,
        }}
      >
        <Badge
          invisible={cartCount === 0}
          badgeContent={cartCount}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "background.paper",
              color: "text.primary",
              fontSize: { xs: "0.8rem", md: "1rem" }, // Justera textstorleken i badgen
              height: { xs: 16, sm: 18, md: 25 }, // Justera badge-storleken
              minWidth: { xs: 15, md: 25 },
              top: { xs: -2, md: 0 }, // Justera placeringen vertikalt
              right: { xs: 0, sm: 15, md: 20 }, // Justera placeringen horisontellt
              borderRadius: "50%", // Gör badgen rund
            },
          }}
        >
          <ShoppingCartIcon
            sx={{
              fontSize: { xs: 20, sm: 28, md: 40 }, // Justera storleken på ikonen
              mx: { sm: 2 }, // Lägg till horisontellt mellanrum på smala skärmar
              color: "text.primary", // Justera ikonens färg
            }}
          />
        </Badge>
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
          zIndex: 1301, // Ensure the drawer is on top of the backdrop
          width: { xs: "90%", sm: 500 }, // Justera bredden för mobil och desktop
          maxHeight: "80vh", // Begränsa maxhöjd för bättre upplevelse på mobil
          overflowY: "auto", // Gör innehållet rullbart
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: 3,
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

          {/* Cart title */}
          <Typography
            variant="h5"
            sx={{ marginBottom: 2, fontFamily: "var(--font-lobster)" }}
          >
            Kundvagn
          </Typography>

          {/* Cart Content (Cart List and Cart Summary) */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <CartList /> {/* Din CartList-komponent */}
            <Divider sx={{ marginY: 2 }} />
            <CartSummary /> {/* Din CartSummary-komponent */}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
