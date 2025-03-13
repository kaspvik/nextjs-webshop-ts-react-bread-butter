"use client";

import PublicNumberField from "@/app/components/numberfield-component";
import { products } from "@/data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Container, IconButton, Link, Typography } from "@mui/material";
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
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "flexStart",
      }}
    >
      <IconButton component={Link} href="/">
        <ArrowBackIcon sx={{ color: "text.primary", fontSize: 50 }} />
      </IconButton>
      <Box
        component="main"
        sx={{
          padding: 4,
          bgcolor: "background.paper",
          border: "2px solid #9C8173",
          borderRadius: "0.5rem",
          margin: "2rem 0",
          width: "100%",
          justifyContent: "center",
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

        <Box
          sx={{
            flex: 1,
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { sx: 30, sm: 40, md: 50 } }}
          >
            {product.title}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Pris: {product.price} kr
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ py: 2 }}>
            Vikt: {product.weight} g
          </Typography>
          <Box sx={{ borderColor: "transparent" }}>
            <PublicNumberField />
          </Box>
          <AddToCartButton />
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
