"use client"

import { Product } from "@/data";
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

type ProductCardProps = {
  product: Product;
};

export default function AdminItem({ product }: ProductCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Container
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
        gap: 2,
        
      }}
    >
      {/* Bild */}
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{
          width: { xs: "120px", md: "150px" },
          height: { xs: "120px", md: "150px"},
          borderRadius: {xs: "50%", md: "20px"},
          padding: 0.5,
          border:{ xs:"2px solid black", md: "none"}
        }}
      />

      {/* Produktinformation */}
      <Box sx={{ flex: 1, flexWrap:"wrap" }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2">Art nr: {product.articleNumber}</Typography>
        <Typography variant="body2">Vikt: {product.weight} g</Typography>
        <Typography variant="body2">Pris: {product.price} kr</Typography>

        {/* Beskrivning */}
        <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
          Beskrivning:
        </Typography>
        <Typography variant="body2" sx={{border: "1px solid black", borderRadius:"4px", padding: 1}}>{product.description}</Typography >
        
      </Box>

      {/* Redigera & Ta bort-knappar (ikon för mobil, knapp för desktop) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "row" : "column",
          alignSelf: "flex-start",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        {isSmallScreen ? (
          <>
            {/* Små ikoner på mobil */}
            <IconButton data-cy="admin-edit-product" sx={{ color: "#9C8173" }}>
              <Edit />
            </IconButton>
            <IconButton data-cy="admin-remove-product" sx={{ color: "#9C8173" }}>
              <Delete />
            </IconButton>
          </>
        ) : (
          <>
            {/* Större knappar på desktop */}
            <Button
              data-cy="admin-edit-product"
              startIcon={<Edit />}
              sx={{
                backgroundColor: "#9C8173",
                color: "#FAF2E9",
                padding: "6px 16px",
                width: "120px",
                "&:hover": { backgroundColor: "#876C5A" },
              }}
            >
              REDIGERA
            </Button>

            <Button
              data-cy="admin-remove-product"
              startIcon={<Delete />}
              sx={{
                backgroundColor: "#FAF2E9",
                color: "#9C8173",
                padding: "6px 16px",
                width: "120px",
                border: "1px solid #9C8173",
                "&:hover": { backgroundColor: "#E8DACD" },
              }}
            >
              TA BORT
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}
