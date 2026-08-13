import { getCloudinaryUrl } from "@/lib/cloudinary";
import FooterLogo from "./footer-logo";
import FooterNav from "./footer-nav";
import FooterSocials from "./footer-socials";

export default function Footer() {
  return (
    <footer
      className="content-visibility-auto footer-bg w-full bg-fs-purple"
      style={
        {
          "--footer-bg": `url(${getCloudinaryUrl("futuresphere/Rectangle 9383", { fetch_format: "auto", quality: "auto", width: 1920, crop: "limit" })})`,
        } as React.CSSProperties
      }
    >
      {/* Top spacer */}
      <div className="h-[40px] md:h-[60px]" aria-hidden="true" />

      {/* Divider */}
      <div className="w-full h-px bg-white/20" aria-hidden="true" />

      {/* Logo + Nav — mobile: stack left; tablet/desktop: split */}
      <div className="flex flex-col items-start gap-[24px] px-[20px] py-[28px] md:flex-row md:items-center md:justify-between md:px-[80px] md:py-[30px]">
        <FooterLogo />
        <FooterNav />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/20" aria-hidden="true" />

      {/* Copyright — mobile: alone; tablet/desktop: + socials */}
      <div className="flex items-center justify-between px-[20px] py-[24px] md:px-[80px] md:py-[30px]">
        <p className="font-body text-[14px] leading-[1.6] text-white/70">
          FutureSphere 2023. All rights reserved
        </p>
        <div className="hidden md:block">
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}
