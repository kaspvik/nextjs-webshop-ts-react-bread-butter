"use client";
import { CartItem } from "@/data";
import { Delete } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import PublicNumberField from "../components/numberfield-component";
import { useCart } from "../provider";

interface Props {
  cartItem: CartItem;
}

export default function CartItemComponent({ cartItem }: Props) {
  const { removeFromCart } = useCart();

  return (
    <Card
      sx={{
        maxWidth: { xs: "295px", sm: "100%" },
        position: "relative",
        padding: 1,
        my: 2,
        boxShadow: 2,
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 1,
          paddingBottom: 1,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            mb: 1,
          }}>
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              padding: 0.5,
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                padding: 0.5,
                border: "2px solid #1A535C",
              }}
              image={cartItem.image}
              title={cartItem.title}
            />
          </Box>

          <Box
            sx={{
              paddingBottom: 0.5,
            }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                mb: 0.5,
                paddingBottom: 0.5,
              }}>
              {cartItem.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {cartItem.weight} g
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              {cartItem.price} kr
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            right: 16,
            zIndex: 1,
          }}>
          <PublicNumberField id={cartItem.id} price={cartItem.price} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 0,
            zIndex: 1,
          }}>
          <Button
            onClick={() => removeFromCart(cartItem.id)}
            startIcon={<Delete />}></Button>
        </Box>
      </Box>
    </Card>
  );
}
