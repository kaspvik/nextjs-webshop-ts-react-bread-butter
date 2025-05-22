"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "../auth-client";

export default function Nav() {
  const pathname = usePathname();
  const { data } = useSession();

  const showSignInButton = pathname !== "/signin";


  return (
    <nav className="flex gap-4">
      {data ? (
        <>
          <button onClick={() => signOut()}>Signout</button>
        </>
      ) : (
        showSignInButton && (
          <Button component={Link} href="/signin" color="inherit">
            Sign in
          </Button>
        )
      )}
    </nav>
  );
}
