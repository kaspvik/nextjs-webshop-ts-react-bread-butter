"use client";

import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "../auth-client";
import SignInModal from "../signin/signin-modal";

export default function Nav() {
  const pathname = usePathname();
  const { data } = useSession();
  const [showModal, setShowModal] = useState(false);

  const showSignInButton = pathname !== "/signin";

  return (
    <nav className="flex gap-4">
      {data ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        showSignInButton && (
          <>
            <Button color="inherit" onClick={() => setShowModal(true)}>
              Sign in
            </Button>
            {showModal && <SignInModal onClose={() => setShowModal(false)} />}
          </>
        )
      )}
    </nav>
  );
}
