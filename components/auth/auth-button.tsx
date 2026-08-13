import { getCloudinaryUrl } from "@/lib/cloudinary";

const magicLinkIconSrc = getCloudinaryUrl("futuresphere/auth/magic-link", {
  fetch_format: "svg",
  quality: "auto",
});

const successCheckSrc = getCloudinaryUrl("futuresphere/auth/success-check", {
  fetch_format: "svg",
  quality: "auto",
});

type AuthButtonVariant = "solid" | "gradient" | "magic";

interface AuthButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: AuthButtonVariant;
  readonly type?: "button" | "submit";
  readonly href?: string;
  readonly disabled?: boolean;
  readonly fullWidth?: boolean;
  readonly onClick?: () => void;
  /** Show trailing magic-link icon (login CTA). */
  readonly showMagicIcon?: boolean;
  /** Show leading back chevron (Back to Home). */
  readonly showBackIcon?: boolean;
  readonly className?: string;
}

const baseClassName =
  "inline-flex h-[48px] items-center justify-center gap-2 font-heading text-[15px] font-semibold leading-none text-white transition-transform duration-150 sm:hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fs-purple";

function variantClassName(variant: AuthButtonVariant): string {
  switch (variant) {
    case "magic":
      // Reference: rounded rect (not full pill) + brand gradient + light border
      return "fs-brand-gradient-bg rounded-input border border-white/80 px-5";
    case "gradient":
      return "fs-brand-gradient-bg rounded-full px-7";
    case "solid":
    default:
      return "bg-fs-purple rounded-full px-7";
  }
}

function BackIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MagicIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={magicLinkIconSrc} alt="" aria-hidden="true" className="h-5 w-5 shrink-0" width={24} height={24} />
  );
}

export default function AuthButton({
  children,
  variant = "solid",
  type = "button",
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  showMagicIcon = false,
  showBackIcon = false,
  className = "",
}: AuthButtonProps) {
  const classes = [
    baseClassName,
    variantClassName(variant),
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {showBackIcon ? <BackIcon /> : null}
      <span>{children}</span>
      {showMagicIcon ? <MagicIcon /> : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

/** Success-page checkmark asset wrapper. */
export function AuthSuccessCheck() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={successCheckSrc}
      alt=""
      aria-hidden="true"
      width={142}
      height={142}
      className="h-[88px] w-[88px] sm:h-[104px] sm:w-[104px]"
    />
  );
}
