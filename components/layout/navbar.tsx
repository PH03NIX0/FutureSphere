"use client";

import { getCloudinaryUrl } from "@/lib/cloudinary";
import ContactUsButton from "@/components/ui/contact-us-button";
import MobileMenu from "@/components/layout/mobile-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLinks } from "@/lib/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-center pt-4 px-4 sm:px-6">
      <nav className="fs-container h-[59px] bg-fs-dark rounded-[47px] px-4 sm:px-5 flex items-center">
        <div className="w-full flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-[5px] h-[24px] text-white font-heading" aria-label="FutureSphere — Home">
            <img
              src={getCloudinaryUrl("futuresphere/logos/future-sphere-logo.svg")}
              alt=""
              aria-hidden="true"
              className="h-[24px] w-auto"
            />
            FutureSphere
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex gap-4 text-sm text-white font-body">
            {mainNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative transition-colors duration-150 group cursor-pointer ${isActive ? "font-medium" : "text-white/85 sm:hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white origin-center transition-transform duration-200 ${isActive ? "scale-x-100" : "scale-x-0 sm:group-hover:scale-x-100"}`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop Button + Mobile Menu */}
          <div className="hidden sm:block">
            <ContactUsButton />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}