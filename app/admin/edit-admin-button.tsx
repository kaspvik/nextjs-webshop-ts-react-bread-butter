"use client";
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function EditButton({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <IconButton
        onClick={onClick}
        data-cy="admin-edit-product"
        sx={{ color: "#9C8173" }}
      >
        <Edit />
      </IconButton>
    </>
  );
}
