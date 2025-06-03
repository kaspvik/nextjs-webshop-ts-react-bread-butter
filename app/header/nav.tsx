"use client";

import { useState } from "react";
import { signOut, useSession } from "../auth-client";
import StyledNetscapeButton from "../components/styled-button";
import SignInModal from "../signin/signin-modal";

export default function Nav() {
  const { data } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="flex gap-4">
      {data ? (
        <StyledNetscapeButton color="inherit" onClick={() => signOut()}>
          Sign out
        </StyledNetscapeButton>
      ) : (
        <>
          <StyledNetscapeButton
            color="inherit"
            onClick={() => setShowModal(true)}
          >
            Sign in
          </StyledNetscapeButton>
          {showModal && <SignInModal onClose={() => setShowModal(false)} />}
        </>
      )}
    </nav>
  );
}
