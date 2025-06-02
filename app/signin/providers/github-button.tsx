"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn } from "../../auth-client";
import { RetroButton } from "./retro-buttons";

export default function GithubButton() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const callbackURL = `${origin}${pathname}${
    searchParams.toString() ? `?${searchParams}` : ""
  }`;

  return (
    <RetroButton
      startIcon={<GitHubIcon />}
      onClick={() =>
        signIn.social({
          provider: "github",
          callbackURL,
        })
      }
    >
      Sign in with GitHub
    </RetroButton>
  );
}
