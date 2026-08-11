import Link from "next/link";
import AuthShell from "@/components/auth/auth-shell";
import SignupForm from "@/components/auth/signup-form";

export const metadata = {
  title: "Sign Up Request | FutureSphere",
  description: "Submit your sign up request and we will reach back asap.",
};

export default function SignupPage() {
  return (
    <AuthShell>
      <div className="flex w-full flex-col items-center gap-2 text-center sm:gap-3">
        <h1 className="font-heading text-[28px] font-semibold leading-[34px] tracking-[-0.03em] text-fs-auth-heading sm:text-[36px] sm:leading-[44px]">
          Sign Up Request
        </h1>
        <p className="max-w-[360px] font-body text-[14px] leading-[20px] text-fs-grey sm:text-[15px] sm:leading-[22px]">
          Submit your sign in request and we will reach back asap.
        </p>
      </div>

      <SignupForm />

      <p className="font-body text-[14px] leading-[20px] text-fs-grey">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-fs-purple transition-colors sm:hover:text-fs-auth-heading">
          Log in
        </Link>
      </p>
    </AuthShell>
  );
}
