"use client";
import { Delete } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import PublicNumberField from "../components/numberfield-component";
import { CartItem } from "@/data";

interface Props {
  cartItem: CartItem;
}

export default function CartItemComponent({ cartItem }: Props) {
  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        padding: 1,
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              padding: 0.5,
              mr: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              image={cartItem.image}
              title="levain"
            />
          </Box>

          <Box
            sx={{
              paddingBottom: 0.5,
            }}
          >
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ fontWeight: "bold", mb: 0.5, paddingBottom: 0.5 }}
            >
              {cartItem.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              {cartItem.weight} gram
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              {cartItem.price} kr.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            right: 16,
            zIndex: 1,
          }}
        >
          <PublicNumberField id={cartItem.id} price={cartItem.price} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 0,
            zIndex: 1,
          }}
        >
          <Button startIcon={<Delete />}></Button>
        </Box>
      </Box>
    </Card>
  );
}
