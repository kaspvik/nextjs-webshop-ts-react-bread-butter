"use client";
import { updateProductStock } from "@/app/admin/action";
import { Product } from "@prisma/client";
import { Box, Button, Container, Snackbar, Typography } from "@mui/material";
import { useState, useTransition } from "react";
import EditButton from "./buttons/edit-admin-button";
import DeleteButton from "./delete-product-item";

type ProductCardProps = {
  product: Product;
};

export default function AdminItem({ product }: ProductCardProps) {
  const [stock, setStock] = useState(product.stock ?? 0);
  const [isPending, startTransition] = useTransition();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleUpdateStock = () => {
    startTransition(() => {
      updateProductStock(product.id, stock);
      setSnackbarOpen(true);
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Container
        data-cy="product"
        key={product.id}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FAF2E9",
          padding: 2,
          borderRadius: 2,
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)",
          gap: 1,
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100px", md: "150px" },
            height: { xs: "100px", md: "150px" },
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            sx={{
              borderRadius: { xs: "50%", md: "20px" },
              padding: 0.5,
              border: { xs: "2px solid #9C8173", md: "none" },
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Box sx={{ flex: 1, flexWrap: "wrap", width: "100%" }}>
          <Typography variant="h6" data-cy="product-title">
            {product.title}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="body2">Art Nr: </Typography>
            <Typography variant="body2" data-cy="product-id" sx={{ ml: 0.5 }}>
              {product.articleNumber}
            </Typography>
          </Box>

          <Typography variant="body2">Artist: {product.artist}</Typography>
          <Typography variant="body2">Album: {product.album}</Typography>
          <Typography variant="body2" data-cy="product-price">
            {product.price} sek
          </Typography>

          <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
            Description:
          </Typography>
          <Typography
            variant="body2"
            sx={{ borderColor: "text.secondary", borderRadius: "4px" }}
            data-cy="product-description"
          >
            {product.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            minWidth: "140px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              In stock:
            </Typography>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              style={{
                width: "66px",
                padding: "4px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
            />
            <Button
              onClick={handleUpdateStock}
              disabled={isPending}
              sx={{
                backgroundColor: "#9C8173",
                color: "white",
                borderRadius: "4px",
                textTransform: "none",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#2b1f16",
                  transform: "scale(1.05)",
                },
              }}
            >
              {isPending ? "Updating..." : "Update"}
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <EditButton product={product} />
            <DeleteButton product={product} />
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Stock updated!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
