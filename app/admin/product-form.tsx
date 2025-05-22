"use client";

import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1, "Du måste ange en titel"),
  description: z.string().min(1, "Du måste ange en beskrivning"),
  category: z.string().min(1, "Du måste ange en kategori"),
  price: z.coerce.number().min(1, "Du måste ange ett pris över 0"),
  stock: z.coerce.number().min(0, "Lager måste vara 0 eller mer"),
});

type FormData = z.infer<typeof schema>;

type Props = {
  categories: string[];
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
};

export const ProductForm = ({
  categories,
  onSubmit,
  isSubmitting,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3 }}
      noValidate
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
          mb: 2,
        }}
      >
        Create New Product
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            color: "text.primary",
            fontFamily: "var(--font-tomorrow)",
          }}
        >
          Title
        </FormLabel>
        <TextField
          margin="normal"
          id="title"
          fullWidth
          variant="outlined"
          slotProps={{ htmlInput: { "data-cy": "product-title" } }}
          error={!!errors.title}
          helperText={errors.title?.message}
          {...register("title")}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            color: "text.primary",
            fontFamily: "var(--font-tomorrow)",
          }}
        >
          Description
        </FormLabel>
        <TextField
          margin="normal"
          id="description"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          slotProps={{ htmlInput: { "data-cy": "product-description" } }}
          error={!!errors.description}
          helperText={errors.description?.message}
          {...register("description")}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <FormLabel
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            color: "text.primary",
            fontFamily: "var(--font-tomorrow)",
          }}
        >
          Category
        </FormLabel>
        <Select
          fullWidth
          defaultValue=""
          id="category"
          {...register("category")}
          error={!!errors.category}
          data-cy="product-category"
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
        {errors.category && (
          <Typography color="error" variant="caption">
            {errors.category.message}
          </Typography>
        )}
      </FormControl>

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Price in SEK
      </FormLabel>

      <TextField
        title="Pris"
        margin="normal"
        id="price"
        type="number"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-price" } }}
        error={!!errors.price}
        helperText={errors.price?.message}
        {...register("price")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Stock Quantity
      </FormLabel>

      <TextField
        title="Stock"
        margin="normal"
        id="stock"
        type="number"
        fullWidth
        variant="outlined"
        slotProps={{ htmlInput: { "data-cy": "product-stock" } }}
        error={!!errors.stock}
        helperText={errors.stock?.message}
        {...register("stock")}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isSubmitting}
        data-cy="product-submit"
      >
        {isSubmitting ? "Submitting..." : "Create Product"}
      </Button>
    </Box>
  );
};
