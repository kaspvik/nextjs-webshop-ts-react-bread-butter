"use client";

import { Delete } from "@mui/icons-material";
import { Alert, IconButton, Snackbar } from "@mui/material";
import { Product } from "@prisma/client";
import { useState } from "react";
import ConfirmDeleteProduct from "./buttons/confirm-delete-button";

type ProductCardProps = {
  product: Product;
};

export default function DeleteButton({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClick} sx={{ color: "#1A535C" }}>
        <Delete />
      </IconButton>

      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%", gap: 2 }}>
          <p>Are you sure you want to delete {product.album} ?</p>

          <ConfirmDeleteProduct product={product} />
        </Alert>
      </Snackbar>
    </>
  );
}
