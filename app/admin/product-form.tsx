"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { createProduct } from "./action";

const ProductSchema = z.object({
  weight: z.coerce.number().optional(),
  description: z.string().min(1),
  title: z.string().min(1),
  image: z.string().url(),
  price: z.coerce.number().min(1),
});

interface Props {
  product?: Product;
}

export default function ProductForm({ product }: Props) {
  const isEdit = Boolean(product);
  const form = useForm<Prisma.ProductCreateInput>({
    defaultValues: product,
    resolver: zodResolver(ProductSchema),
  });
  const onSubmit: SubmitHandler<Prisma.ProductCreateInput> = async (data) => {
    await createProduct(data);
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        width: 350,
      }}
      data-cy="product-form"
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 2,
        }}
      >
        Lägg till en produkt
      </Typography>

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Bildadress
      </FormLabel>

      <TextField
        title="Bildadress"
        margin="normal"
        id="imageURL"
        type="url"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-image" } }}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Title
      </FormLabel>

      <TextField
        title="Titel"
        autoFocus
        required
        margin="normal"
        id="imageURL"
        type="text"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-title" } }}
        {...form.register("title")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Art Nr
      </FormLabel>

      <TextField
        title="Artikelnummer"
        autoFocus
        required
        margin="normal"
        id="imageURL"
        type="number"
        fullWidth
        variant="outlined"
        {...form.register("articleNumber")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Vikt i gram
      </FormLabel>

      <TextField
        title="Vikt"
        autoFocus
        required
        margin="normal"
        id="imageURL"
        type="number"
        fullWidth
        variant="outlined"
        {...form.register("weight")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Pris i kronor
      </FormLabel>

      <TextField
        title="Pris"
        autoFocus
        required
        margin="normal"
        id="imageURL"
        type="number"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-price" } }}
        {...form.register("price")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {" "}
        Beskriving
      </FormLabel>

      <TextField
        title="Beskrivning"
        autoFocus
        required
        margin="normal"
        id="imageURL"
        type="text"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-description" } }}
        {...form.register("description")}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link href="/admin/">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Link>
        <IconButton type="submit">
          <SaveIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
