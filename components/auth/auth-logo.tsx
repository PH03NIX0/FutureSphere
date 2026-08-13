import { getCloudinaryUrl } from "@/lib/cloudinary";

const authLogoSrc = getCloudinaryUrl("futuresphere/auth/logo", {
  fetch_format: "svg",
  quality: "auto",
});

interface AuthLogoProps {
  readonly href?: string;
}

export default function AuthLogo({ href = "/" }: AuthLogoProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fs-purple"
      aria-label="FutureSphere — Home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={authLogoSrc}
        alt=""
        aria-hidden="true"
        className="h-7 w-auto sm:h-8"
        width={69}
        height={61}
      />
      <span className="fs-brand-gradient-text font-heading text-[20px] sm:text-[22px] font-semibold tracking-[-0.02em]">
        FutureSphere
      </span>
    </a>
  );
}
