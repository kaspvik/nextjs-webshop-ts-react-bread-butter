"use client";

import { signIn } from "../../auth-client";

export default function SignInButton() {
  return (
    <button
      className="bg-slate-200 text-black p-2 rounded text-lg"
      onClick={() => signIn.social({ provider: "github" })}
    >
      Sign in with Github
    </button>
  );
}
