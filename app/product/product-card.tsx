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

type ProductCardProps = {
  product: Product;
};

export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 345,
        minHeight: 490,
        backgroundColor: "#FAF2E9",
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
          top: "50%",
          left: "50%",
          width: "200px",
          height: "200px",
          backgroundColor: "background.paper",
          transform: "translate(-50%, -100%)",
          borderRadius: "0.25rem",
          zIndex: 0,
        }}
      />
      <CardMedia
        sx={{
          height: 250,
          width: 150,
          mx: "auto",
          mt: "1rem",
          borderRadius: "0.25rem",
          zIndex: 1,
        }}
        image={product.image}
        title={product.title}
      />
      <CardContent
        sx={{
          border: "2px solid #9C8173",
          borderRadius: "0.25rem",
          padding: "0.5rem",
          margin: "auto",
          zIndex: 1,
          maxWidth: "80%",
        }}
      >
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.primary", mt: "0.5rem" }}
        >
          {product.price} kr
        </Typography>
        <CardActions>
          <Button
            size="small"
            sx={{
              backgroundColor: "#9C8173",
              color: "#FAF2E9",
              mx: "auto",
            }}
          >
            Köp
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
