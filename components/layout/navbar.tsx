import { getCloudinaryUrl } from "@/lib/cloudinary";
import ContactUsButton from "@/components/ui/contact-us-button";
import MobileMenu from "@/components/layout/mobile-menu";
import NavDesktopLinks from "@/components/layout/nav-desktop-links";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-4 px-4 sm:px-6">
      <nav className="fs-container h-[59px] bg-fs-dark rounded-[47px] px-4 sm:px-5 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Native <a> avoids App Router soft-nav remount loops that break navbar routing. */}
          <a href="/" className="flex items-center gap-[5px] h-[24px] text-white font-heading" aria-label="FutureSphere — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getCloudinaryUrl("futuresphere/logos/future-sphere-logo.svg")}
              alt=""
              aria-hidden="true"
              className="h-[24px] w-auto"
              width={27}
              height={24}
              decoding="async"
              fetchPriority="high"
            />
            FutureSphere
          </a>

          <NavDesktopLinks />

          <div className="hidden sm:block">
            <ContactUsButton />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
