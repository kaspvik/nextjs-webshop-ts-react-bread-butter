import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "@/data";
import zIndex from "@mui/material/styles/zIndex";
import AddToCartButton from "./add-to-cart-button";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};
const slugify = (product: Product) => {
  return `${product.articleNumber}-${product.title
    .normalize("NFD") // Normalize accents (å, ä, ö → a, a, o)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .toLowerCase()}`;
};

export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      data-cy="product"
      sx={{
        width: "100%",
        maxWidth: 340,
        minHeight: 490,
        backgroundColor: "background.paper",
        boxShadow: "none",
        display: "grid",
        position: "relative",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "46%",
          left: "50%",
          width: "200px",
          height: "200px",
          backgroundColor: "background.default",
          transform: "translate(-50%, -100%)",
          borderRadius: "0.25rem",
          zIndex: 0,
        }}
      />
      <Link
        href={`/product/${slugify(product)}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 250,
            width: 150,
            mx: "auto",
            mt: "1rem",
            borderRadius: "0.25rem",
            zIndex: 1,
          }}
          image={product.image}
          alt={product.title}
        />
      </Link>
      <CardContent
        sx={{
          border: "2px solid",
          borderColor: "text.secondary",
          borderRadius: "0.25rem",
          mx: "auto",
          mt: "1rem",
          mb: "1rem",
          zIndex: 1,
          maxWidth: "90%",
        }}
      >
        <Typography
          data-cy="product-title"
          gutterBottom
          variant="h6"
          component="div"
        >
          {product.title}
        </Typography>
        <Typography
          data-cy="product-description"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {product.description}
        </Typography>
        <Typography
          data-cy="product-price"
          variant="body2"
          sx={{ color: "text.primary", mt: "0.5rem" }}
        >
          {product.price} kr
        </Typography>
        <CardActions>
          <Box sx={{ mx: "auto" }}>
            <AddToCartButton
              label="Köp"
              data-cy="product-buy-button"
            ></AddToCartButton>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  );
}
