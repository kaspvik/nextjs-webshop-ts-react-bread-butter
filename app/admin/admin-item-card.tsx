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
      }}>
      <Box
        sx={{
          width: { xs: "100px", md: "150px" },
          height: { xs: "100px", md: "150px" },
        }}>
        {/* Bild */}
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

      {/* Produktinformation */}
      <Box sx={{ flex: 1, flexWrap: "wrap", width: { xs: "100%" } }}>
        <Typography variant="h5">{product.title}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}>
          <Typography variant="h6">Art Nr: </Typography>

          <Typography variant="h6">{product.articleNumber}</Typography>
        </Box>
        <Typography variant="h6">Vikt: {product.weight} g</Typography>
        <Typography variant="h6">{product.price} kr</Typography>

        {/* Beskrivning */}
        <Typography variant="h6" sx={{ marginTop: 1 }}>
          Description:
        </Typography>
        <Typography
          variant="h6"
          sx={{ borderColor: "text.secondary", borderRadius: "4px" }}>
          {product.description}
        </Typography>
      </Box>

      {/* Redigera & Ta bort-knappar (ikon för mobil, knapp för desktop) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignSelf: { xs: "center", sm: "flex-start" },
          justifyContent: "flex-start",
          gap: 2,
        }}>
        <EditButton product={product} />

        <DeleteButton product={product} />
      </Box>
    </Container>
  );
}
