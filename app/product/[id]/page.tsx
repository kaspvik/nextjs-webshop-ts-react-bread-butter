"use client";

import { products } from "@/data";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import AddToCartButton from "../add-to-cart-button";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1>Produkten hittades inte</h1>;
  }

  return (
    <Container
      sx={{
        py: 4,
        my: { xs: 0, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "lg",
        bgcolor: "background.paper",
        borderRadius: { xs: "0", md: "0.25rem" },
      }}
    >
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: "60%", sm: "60%", md: "60%" },
            maxWidth: "400px",
          }}
        >
          <Image
            src={product.image.replace("public/", "/")}
            alt={product.title}
            width={400}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <Typography variant="h1">{product.title}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Pris: {product.price} kr
          </Typography>
          <Typography variant="h6">Vikt: {product.weight} g</Typography>
          <AddToCartButton />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
