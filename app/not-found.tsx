import AuthButton from "@/components/auth/auth-button";
import NotFoundIllustration from "@/components/auth/not-found-illustration";

export const metadata = {
  title: "Page Not Found | FutureSphere",
  description: "Oops! Nothing to see here.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-fs-background px-4 py-10 sm:px-6">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <NotFoundIllustration />

        <h1 className="fs-brand-gradient-text font-heading text-[24px] font-semibold leading-[32px] tracking-[-0.02em] sm:text-[32px] sm:leading-[40px]">
          Oops! Nothing to see here
        </h1>

        <AuthButton href="/" variant="gradient" showBackIcon>
          Back to Home
        </AuthButton>
      </div>

      <p className="mt-10 font-body text-[12px] leading-[18px] text-fs-grey/80">
        © 2023 futuresphere Copyrights Reserved
      </p>
    </div>
  );
}
