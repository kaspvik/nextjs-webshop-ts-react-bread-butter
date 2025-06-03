"use client";

import { Typography } from "@mui/material";
import ModalWindow from "../components/modal-window";
import FacebookButton from "./providers/facebook-button";
import GithubButton from "./providers/github-button";

interface SignInModalProps {
  onClose: () => void;
}

export default function SignInModal({ onClose }: SignInModalProps) {
  return (
    <ModalWindow onClose={onClose}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          textAlign: "center",
          width: "60%",
        }}
      >
        Sign in to Surf & Sound to get more out of your experience!
      </Typography>

      <GithubButton />
      <FacebookButton />
    </ModalWindow>
  );
}
