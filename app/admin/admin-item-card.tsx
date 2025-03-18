"use client";
import { Product } from "@/data";
import { Box, Container, Typography } from "@mui/material";
import EditButton from "./buttons/edit-admin-button";
import DeleteButton from "./delete-product-item";

type ProductCardProps = {
  product: Product;
};

export default function AdminItem({ product }: ProductCardProps) {
  return (
    <Container
      data-cy="product"
      key={product.id}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FAF2E9",
        padding: 2,
        borderRadius: 2,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        gap: 1,
      }}
    >
      {/* Bild */}
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{
          width: { xs: "120px", md: "150px" },
          height: { xs: "120px", md: "150px" },
          borderRadius: { xs: "50%", md: "20px" },
          padding: 0.5,
          border: { xs: "2px solid black", md: "none" },
        }}
      />

      {/* Produktinformation */}
      <Box sx={{ flex: 1, flexWrap: "wrap" }}>
        <Typography variant="h6" data-cy="product-title">
          {product.title}
        </Typography>
        <Typography variant="body2" data-cy="product-id">
          {product.articleNumber}
        </Typography>
        <Typography variant="body2">Vikt: {product.weight} g</Typography>
        <Typography variant="body2" data-cy="product-price">
          {product.price} kr
        </Typography>

        {/* Beskrivning */}
        <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
          Beskrivning:
        </Typography>
        <Typography
          variant="body2"
          sx={{ borderColor: "text.secondary", borderRadius: "4px" }}
          data-cy="product-description"
        >
          {product.description}
        </Typography>
      </Box>

      {/* Redigera & Ta bort-knappar (ikon för mobil, knapp för desktop) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          gap: 2,
        }}
      >
        <EditButton product={product} />

        <DeleteButton product={product} />
      </Box>
    </Container>
  );
}
