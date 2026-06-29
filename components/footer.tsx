import FooterLogo from "./footer-logo";
import FooterNav from "./footer-nav";
import FooterSocials from "./footer-socials";

export default function Footer() {
  return (
    <footer className="footer-bg w-full bg-[#7F56D9]">
      <div className="w-full max-w-[1058px] mx-auto flex flex-col items-center px-4 sm:px-6">
        {/* Top Spacer */}
        <div className="h-16" />

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Middle Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <FooterLogo />
          <FooterNav />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <p className="text-white/60 text-s font-body">
            &copy; 2023 FutureSphere. All rights reserved.
          </p>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}
