"use client";

import { Product } from "@/data";
import { Delete } from "@mui/icons-material";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";
import ConfirmDeleteProduct from "./confirm-delete-button";

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
      {/* Knapp som visar alert */}
      <IconButton
        onClick={handleClick}
        data-cy="admin-remove-product"
        sx={{ color: "#9C8173", display: { xs: "block", md: "none" } }}
      >
        <Delete />
      </IconButton>

      <Button
        onClick={handleClick}
        data-cy="admin-remove-product"
        startIcon={<Delete />}
        sx={{
          backgroundColor: "#FAF2E9",
          color: "#9C8173",
          padding: "6px 16px",
          width: "120px",
          border: "1px solid #9C8173",
          "&:hover": { backgroundColor: "#E8DACD" },
          display: { xs: "none", md: "flex" },
        }}
      >
        TA BORT
      </Button>

      {/* Alert som visas vid klick */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          sx={{ width: "100%", gap: 2 }}
        >
          <p>Är du säker på att du vill ta bort {product.title} ?</p>

          <ConfirmDeleteProduct product={product} />
        </Alert>
      </Snackbar>
    </>
  );
}
