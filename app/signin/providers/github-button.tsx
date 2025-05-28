"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { signIn } from "../../auth-client";
import { RetroButton } from "./retro-buttons";

export default function GithubButton() {
  return (
    <RetroButton
      startIcon={<GitHubIcon />}
      onClick={() => signIn.social({ provider: "github" })}
    >
      Sign in with GitHub
    </RetroButton>
  );
}
