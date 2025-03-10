"use client";

import { products } from "@/data";
import { Box } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1>Produkten hittades inte</h1>;
  }

  return (
    <Box
      sx={{
        padding: 4,
        bgcolor: "background.paper",
      }}
    >
      <h1>{product.title}</h1>
      <Image
        src={product.image.replace("public/", "/")}
        alt={product.title}
        width={400}
        height={600}
      />

      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      <p>Vikt: {product.weight} g</p>
    </Box>
  );
};

export default ProductPage;
