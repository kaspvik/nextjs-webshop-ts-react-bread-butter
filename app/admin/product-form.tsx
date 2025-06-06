"use client";

import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLabel, TextField, Typography } from "@mui/material";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import TallModalWindow from "../components/tall-modal-window";
import { RetroButton } from "../signin/providers/retro-buttons";
import { createProduct, updateProduct } from "./action";

const ProductSchema = z.object({
  artist: z.string().min(1),
  album: z.string().optional(),
  description: z.string().min(1),
  image: z.string().url(),
  price: z.coerce.number().min(1),
  stock: z.coerce.number().min(0).default(0),
});

interface Props {
  product?: Product;
  onClose?: () => void;
}

export default function ProductForm({ product, onClose }: Props) {
  const isEdit = Boolean(product);
  const router = useRouter();

  const form = useForm<any>({
    defaultValues: product || {
      artist: "",
      album: "",
      description: "",
      image: "",
      price: 0,
      stock: 0,
    },
    resolver: zodResolver(ProductSchema),
  });

  const {
    register,
    formState: { errors },
  } = form;

  const handleClose = () => {
    if (onClose && typeof onClose === "function") {
      onClose();
    } else {
      router.push("/admin");
    }
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    if (isEdit) {
      await updateProduct(product!.articleNumber, data);
    } else {
      await createProduct(data);
      form.reset();
    }
    handleClose();
  };

  return (
    <TallModalWindow onClose={handleClose}>
      <FormContainer onSubmit={form.handleSubmit(onSubmit)}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
            marginBottom: 2,
            width: "100%",
          }}>
          <span></span>
          {isEdit ? "Edit Product" : "Add Product"}
        </Typography>

        <FormLabelStyled>Image URL</FormLabelStyled>
        <TextField
          title="Image URL"
          margin="normal"
          id="imageURL"
          type="url"
          fullWidth
          variant="outlined"
          error={!!errors.image}
          helperText={
            errors.image ? <span>Please enter a valid URL</span> : null
          }
          {...register("image")}
        />

        <FormLabelStyled>Artist</FormLabelStyled>
        <TextField
          title="Artist"
          margin="normal"
          id="artist"
          type="text"
          fullWidth
          variant="outlined"
          error={!!errors.artist}
          helperText={
            errors.artist ? <span>Artist name cannot be empty</span> : null
          }
          {...register("artist")}
        />

        <FormLabelStyled>Album</FormLabelStyled>
        <TextField
          title="Album"
          margin="normal"
          id="album"
          type="text"
          fullWidth
          variant="outlined"
          {...register("album")}
        />

        <FormLabelStyled>Price in SEK</FormLabelStyled>
        <TextField
          title="Price"
          margin="normal"
          id="price"
          type="number"
          fullWidth
          variant="outlined"
          error={!!errors.price}
          helperText={
            errors.price ? <span>You must enter a price above 0:-</span> : null
          }
          {...register("price")}
        />

        <FormLabelStyled>Description</FormLabelStyled>
        <TextField
          title="Description"
          margin="normal"
          id="description"
          type="text"
          fullWidth
          variant="outlined"
          error={!!errors.description}
          helperText={
            errors.description ? (
              <span>The description cannot be empty.</span>
            ) : null
          }
          {...register("description")}
        />

        <FormLabelStyled>Stock</FormLabelStyled>
        <TextField
          title="Stock"
          margin="normal"
          id="stock"
          type="number"
          fullWidth
          variant="outlined"
          error={!!errors.stock}
          helperText={
            errors.stock ? <span>Stock cannot be negative.</span> : null
          }
          {...register("stock")}
        />

        <ButtonContainer>
          <RetroButton type="submit">Save</RetroButton>
        </ButtonContainer>
      </FormContainer>
    </TallModalWindow>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const FormLabelStyled = styled(FormLabel)`
  text-align: left;
  font-weight: bold;
  color: var(--mui-palette-text-primary);
  font-family: var(--font-tomorrow);
`;