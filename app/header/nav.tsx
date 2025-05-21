"use client";

import Link from "next/link";
import { signOut, useSession } from "../auth-client";

export default function Nav() {
  const { data } = useSession();

  return (
    <nav className="flex gap-4">
      {data ? (
        <>
          <button onClick={() => signOut()}>Signout</button>
        </>
      ) : (
        <>
          <Link href="/signin">Signin</Link>
        </>
      )}
    </nav>
  );
}
