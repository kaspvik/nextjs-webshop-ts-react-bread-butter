"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { Product } from "@prisma/client";
import { useState } from "react";
import EditButton from "../edit-admin-button";

interface Props {
  product: Product;
}

export default function EditProductForm(product: Props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <EditButton onClick={handleClickOpen} />

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Redigera produkt</DialogTitle>
        <DialogContent>
          <DialogContentText>
            I följande formulär kan du redigera en produkt. Vill du istället
            lägga till en ny produkt använda gärna plus-tecknet.
          </DialogContentText>
          <TextField
            title="Bildadress"
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label={product.product.image}
            type="url"
            fullWidth
            variant="standard"
          />
          <p>{product.product.title}</p>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={handleClose}>
            <DeleteIcon />
          </IconButton>
          <IconButton type="submit">
            <SaveIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
