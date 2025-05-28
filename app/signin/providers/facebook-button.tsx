"use client";

import { Facebook } from "@mui/icons-material";
import { RetroButton } from "./retro-buttons";

export default function FacebookButton() {
  return (
    <RetroButton startIcon={<Facebook />}>Sign in with Facebook</RetroButton>
  );
}
