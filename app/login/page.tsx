import Link from "next/link";
import AuthShell from "@/components/auth/auth-shell";
import LoginForm from "@/components/auth/login-form";

export const metadata = {
  title: "Log in | FutureSphere",
  description: "Sign in to FutureSphere with a magic link.",
};

export default function LoginPage() {
  return (
    <AuthShell copyrightYear="2022" centered>
      <h1 className="sr-only">Log in to FutureSphere</h1>
      <LoginForm />
      <p className="font-body text-[14px] leading-[20px] text-fs-grey">
        Need an account?{" "}
        <Link href="/signup" className="font-semibold text-fs-purple transition-colors sm:hover:text-fs-auth-heading">
          Sign up
        </Link>
      </p>
    </AuthShell>
  );
}
