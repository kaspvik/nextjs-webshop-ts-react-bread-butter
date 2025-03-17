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
            fontSize: "0.85rem",
            height: 22,
            minWidth: 20,
            top: 0,
            right: 20,
          },
        }}
        data-cy="cart-items-count-badge"
      >
        <ShoppingCartIcon
          sx={{
            fontSize: { xs: 20, md: 40 },
            mx: { sm: 2 },
            color: "text.primary",
          }}
        />
      </Badge>
    </IconButton>
  );
};

export default CartIconButton;
