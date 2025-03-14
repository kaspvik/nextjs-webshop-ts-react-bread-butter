"use client";
import { Edit } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export default function EditButton({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <IconButton
        onClick={onClick}
        data-cy="admin-edit-product"
        sx={{ color: "#9C8173", display: { xs: "block", md: "none" } }}
      >
        <Edit />
      </IconButton>
      <Button
        onClick={onClick}
        data-cy="admin-edit-product"
        startIcon={<Edit />}
        sx={{
          backgroundColor: "#9C8173",
          color: "#FAF2E9",
          padding: "6px 16px",
          width: "120px",
          border: "1px solid #9C8173",
          "&:hover": { backgroundColor: "#876C5A" },
          display: { xs: "none", md: "flex" },
        }}
      >
        REDIGERA
      </Button>
    </>
  );
}
