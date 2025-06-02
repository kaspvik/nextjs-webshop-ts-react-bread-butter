"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { createProduct, updateProduct } from "./action";

const ProductSchema = z.object({
  artist: z.string().min(1),
  album: z.string().optional(),            // Album finns i Prisma
  description: z.string().min(1),
  image: z.string().url(),
  price: z.coerce.number().min(1),
  stock: z.coerce.number().min(0).default(0),
  // Vikt är borttagen
});

interface Props {
  product?: Product;
}

export default function ProductForm({ product }: Props) {
  const isEdit = Boolean(product);
  const router = useRouter();

  const form = useForm<Prisma.ProductCreateInput>({
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

  const onSubmit: SubmitHandler<Prisma.ProductCreateInput> = async (data) => {
    if (isEdit) {
      await updateProduct(product!.articleNumber, data);
    } else {
      await createProduct(data);
      form.reset();
    }
    router.push("/admin");
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
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: 2,
        }}
      >
        <span></span>
        {isEdit ? "Edit Product" : "Add Product"}

        <Link href="/admin/">
          <IconButton>
            <ClearRoundedIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Link>
      </Typography>

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Image URL
      </FormLabel>

      <TextField
        title="Image URL"
        margin="normal"
        id="imageURL"
        type="url"
        fullWidth
        variant="outlined"
        error={!!errors.image}
        helperText={errors.image ? <span>Please enter a valid URL</span> : null}
        {...register("image")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Artist
      </FormLabel>

      <TextField
        title="Artist"
        margin="normal"
        id="artist"
        type="text"
        fullWidth
        variant="outlined"
        error={!!errors.artist}
        helperText={errors.artist ? <span>Artist name cannot be empty</span> : null}
        {...register("artist")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Album
      </FormLabel>

      <TextField
        title="Album"
        margin="normal"
        id="album"
        type="text"
        fullWidth
        variant="outlined"
        {...register("album")}
      />

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
        title="Price"
        margin="normal"
        id="price"
        type="number"
        fullWidth
        variant="outlined"
        error={!!errors.price}
        helperText={errors.price ? <span>You must enter a price above 0:-</span> : null}
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
        Description
      </FormLabel>

      <TextField
        title="Description"
        margin="normal"
        id="description"
        type="text"
        fullWidth
        variant="outlined"
        error={!!errors.description}
        helperText={errors.description ? <span>The description cannot be empty.</span> : null}
        {...register("description")}
      />

      <FormLabel
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          fontFamily: "var(--font-tomorrow)",
        }}
      >
        Stock
      </FormLabel>

      <TextField
        title="Stock"
        margin="normal"
        id="stock"
        type="number"
        fullWidth
        variant="outlined"
        error={!!errors.stock}
        helperText={errors.stock ? <span>Stock cannot be negative.</span> : null}
        {...register("stock")}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            mt: 3,
            width: 200,
            height: 50,
            bgcolor: "primary.main",
            color: "text.primary",
            fontFamily: "var(--font-tomorrow)",
            "&:hover": { bgcolor: "primary.dark", color: "background.paper" },
          }}
          type="submit"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
