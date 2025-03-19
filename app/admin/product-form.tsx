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
import { createProduct, updateProduct } from "./action";

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
    defaultValues: product || {
      title: "",
      description: "",
      image: "",
      price: 0,
      weight: undefined,
    },
    resolver: zodResolver(ProductSchema),
  });
  const onSubmit: SubmitHandler<Prisma.ProductCreateInput> = async (data) => {
    if (isEdit) {
      await updateProduct(product!.articleNumber, data);
    } else {
      await createProduct(data);
      form.reset();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        width: {
          xs: 280,
          sm: 400,
          md: 500,
          lg: 600,

        }
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
        {isEdit ? "Redigera en produkt" : "Lägg till en produkt"}
        
       
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
        {...form.register("image")}
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
        margin="normal"
        id="Titel"
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
        Vikt i gram
      </FormLabel>

      <TextField
        title="Vikt"
        
        margin="normal"
        id="Vikt"
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
        
        margin="normal"
        id="Pris"
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
        
        margin="normal"
        id="Beskrivning"
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
