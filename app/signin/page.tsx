import SignInButton from "./providers/signin-button";

export default function SignInPage() {
  return (
    <main className="grid place-content-center gap-4 my-20">
      <h1 className="text-4xl text-center">Login</h1>
      <SignInButton />
    </main>
  );
}
