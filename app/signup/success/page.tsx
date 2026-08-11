import AuthShell from "@/components/auth/auth-shell";
import AuthButton, { AuthSuccessCheck } from "@/components/auth/auth-button";

export const metadata = {
  title: "Request Submitted | FutureSphere",
  description: "Your sign up request was submitted successfully.",
};

export default function SignupSuccessPage() {
  return (
    <AuthShell centered>
      <div className="flex w-full flex-col items-center gap-5 text-center sm:gap-6">
        <AuthSuccessCheck />

        <div className="flex max-w-[420px] flex-col items-center gap-2 sm:gap-3">
          <h1 className="font-heading text-[24px] font-semibold leading-[32px] tracking-[-0.03em] text-fs-auth-heading sm:text-[32px] sm:leading-[40px]">
            Your sign up request was submitted successfully.
          </h1>
          <p className="font-body text-[14px] leading-[20px] text-fs-grey sm:text-[16px] sm:leading-[24px]">
            Our team will reach out to you soon.
          </p>
        </div>

        <AuthButton href="/" variant="solid" showBackIcon>
          Back to Home
        </AuthButton>
      </div>
    </AuthShell>
  );
}
