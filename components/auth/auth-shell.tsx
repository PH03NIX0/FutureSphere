import AuthLogo from "@/components/auth/auth-logo";

interface AuthShellProps {
  readonly children: React.ReactNode;
  readonly copyrightYear?: string;
  /** When true, centers content in the viewport (success / 404). */
  readonly centered?: boolean;
}

export default function AuthShell({
  children,
  copyrightYear = "2023",
  centered = false,
}: AuthShellProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-fs-background px-4 py-8 sm:px-6 sm:py-10">
      <div
        className={
          centered
            ? "mx-auto flex w-full max-w-[560px] flex-1 flex-col items-center justify-center gap-10 sm:gap-12"
            : "mx-auto flex w-full max-w-[480px] flex-1 flex-col items-center gap-6 sm:gap-8 pt-4 sm:pt-8"
        }
      >
        <AuthLogo />
        {children}
      </div>

      <p className="mt-auto w-full pt-10 text-center font-body text-[12px] leading-[18px] text-fs-grey/80 sm:pt-12">
        © {copyrightYear} futuresphere Copyrights Reserved
      </p>
    </div>
  );
}
