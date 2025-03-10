import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "@/data";

type ProductCardProps = {
  product: Product;
};

export default async function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.price} kr
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Köp</Button>
      </CardActions>
    </Card>
  );
}
