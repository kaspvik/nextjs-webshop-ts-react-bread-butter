"use client";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import Link from "next/link";
import { useCart } from "../provider";

const CartIconButton = () => {
  const { cartCount } = useCart(); // Hämta antal varor i kundvagnen
  return (
    <IconButton
      data-cy="cart-link"
      color="inherit"
      component={Link}
      href="/checkout"
    >
      <Badge
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
      >
        <ShoppingCartIcon
          sx={{
            fontSize: { xs: 20, sm: 28, md: 40 },
            mx: { sm: 2 },
            color: "text.primary",
          }}
        />
      </Badge>
    </IconButton>
  );
};

export default CartIconButton;
