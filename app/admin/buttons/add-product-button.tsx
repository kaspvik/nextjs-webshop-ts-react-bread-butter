"use client";

import StyledButton from "@/app/components/styled-button";
import { Container } from "@mui/material";
import Link from "next/link";

export default function AddProductButton() {
  return (
    <Link
      href="admin/product/new"
      style={{ textDecoration: "none", color: "#3E291E" }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <StyledButton color="secondary">Add product</StyledButton>
      </Container>
    </Link>
  );
}
