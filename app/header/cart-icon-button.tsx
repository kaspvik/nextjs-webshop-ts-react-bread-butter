"use client";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Link from "next/link";

const CartIconButton = () => {
  return (
    <IconButton
      data-cy="cart-link"
      color="inherit"
      component={Link}
      href="/checkout"
    >
      <ShoppingCartIcon
        sx={{
          fontSize: { xs: 20, md: 40 },
          mx: { sm: 2 },
          color: "text.primary",
        }}
      />
    </IconButton>
  );
};

export default CartIconButton;
