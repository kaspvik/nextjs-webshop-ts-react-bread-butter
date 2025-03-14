"use client";

import { Button } from "@mui/material";
import { Product } from "@prisma/client";
import { useCart } from "../provider";

interface AddToCartButtonProps {
  label?: string;
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  label = "Lägg i kundvagn",
  product,
}) => {
  const { addToCart } = useCart();
  return (
    <Button
      onClick={() => addToCart(product)}
      size="large"
      sx={{
        mt: 3,
        bgcolor: "primary.main",
        color: "text.primary",
        "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
      }}
      data-cy="product-buy-button"
    >
      {label} {/* Använd den dynamiska texten här */}
    </Button>
  );
};

export default AddToCartButton;
