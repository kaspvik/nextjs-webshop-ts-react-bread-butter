"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import { signIn } from "../../auth-client";

export default function GithubButton() {
  return (
    <Button
      variant="contained"
      startIcon={<GitHubIcon />}
      size="large"
      onClick={() => signIn.social({ provider: "github" })}
      sx={{
        textTransform: "none",
        bgcolor: "black",
        color: "white",
        "&:hover": {
          bgcolor: "#333",
        },
      }}
    >
      Sign in with GitHub
    </Button>
  );
}
