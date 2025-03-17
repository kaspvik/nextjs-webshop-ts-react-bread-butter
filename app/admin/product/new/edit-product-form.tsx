"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Dialog,
  DialogActions,
  DialogContent,
  FormLabel,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import { Product } from "@prisma/client";
import { useState } from "react";
import EditButton from "../../buttons/edit-admin-button";


interface Props {
  product: Product;
}

export default function EditProductForm( {product}: Props) {
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
              handleClose();
            },
          },
        }}
      >
        <Typography variant="h1" sx={{
          display:"flex",
          justifyContent:"center",
          margin: 2,
          
        }}>Redigera produkt</Typography>
        <DialogContent>
          
          

          <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Bildadress
          </FormLabel>

          <TextField
            title="Bildadress"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.image}
            type="url"
            fullWidth
            variant="outlined"
          />

            <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Title
              </FormLabel>


          <TextField
            title="Titel"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.title}
            type="text"
            fullWidth
            variant="outlined"
          />

          <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Art Nr
              </FormLabel>


          <TextField
            title="Artikelnummer"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.articleNumber}
            type="number"
            fullWidth
            variant="outlined"
          />

          <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Vikt i gram
              </FormLabel>


          <TextField
            title="Vikt"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.weight}
            type="number"
            fullWidth
            variant="outlined"
          />

          <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Pris i kronor
              </FormLabel>


          <TextField
            title="Pris"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.price}
            type="number"
            fullWidth
            variant="outlined"
          />

          <FormLabel sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}> Beskriving
              </FormLabel>


          <TextField
            title="Beskrivning"
            autoFocus
            required
            margin="normal"
            id="imageURL"
            name="imageURL"
            defaultValue={product.description}
            type="text"
            fullWidth
            variant="outlined"
          />
          






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
