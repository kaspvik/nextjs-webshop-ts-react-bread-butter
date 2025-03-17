"use client";

import AddIcon from "@mui/icons-material/Add";
import { Container, Fab, Typography } from "@mui/material";

export default function AddProductButton({ onClick }: { onClick?: () => void }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "70%", md: "50%" },
        border: "1px solid",
        borderColor: "text.secondary",
        padding: 2,
        borderRadius: "4px",
        gap: 1,
        marginTop: 2,
      }}
    >
      <Fab
        sx={{
          backgroundColor: "#9C8173",
          color: "#FAF2E9",
        }}
        onClick={onClick}
      >
        <AddIcon data-cy="admin-add-product" />
      </Fab>
      <Typography>Lägg till produkt</Typography>
    </Container>
  );
}
