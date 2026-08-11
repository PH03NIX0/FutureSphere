"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import ContactUsButton from "@/components/ui/contact-us-button";
import { implementedNavHrefs, mainNavLinks } from "@/lib/navigation";

const mobileLinks = [
  ...mainNavLinks,
  { href: "/contact", label: "Contact Us" },
] as const;

/**
 * CSS-driven drawer (no motion/react) so the sitewide navbar does not pull
 * the animation library into every route's critical JS.
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const openMobileMenu = useCallback(() => {
    setIsVisible(true);
    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVisible, isOpen, closeMobileMenu]);

  const handlePanelTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (!isOpen) setIsVisible(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={openMobileMenu}
        className="flex flex-col items-center justify-center w-10 h-10 gap-[6px] sm:hidden"
        aria-label="Open menu"
        aria-expanded={isVisible}
      >
        <span className="block w-6 h-[2px] bg-white rounded-full transition-transform duration-200" />
        <span className="block w-6 h-[2px] bg-white rounded-full transition-opacity duration-200" />
        <span className="block w-6 h-[2px] bg-white rounded-full transition-transform duration-200" />
      </button>

      {isVisible && (
        <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            type="button"
            aria-label="Close menu"
            className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
            onClick={closeMobileMenu}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[280px] bg-fs-dark flex flex-col p-6 transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onTransitionEnd={handlePanelTransitionEnd}
          >
            <button
              type="button"
              onClick={closeMobileMenu}
              className="self-end mb-8 w-10 h-10 flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <nav className="flex flex-col gap-6">
              {mobileLinks.map((link) => {
                const isActive = pathname === link.href;
                const className = `text-lg font-body transition-colors duration-150 ${isActive ? "text-white font-medium" : "text-white sm:hover:text-white/80"}`;

                if (!implementedNavHrefs.has(link.href)) {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      className={`${className} text-left`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </button>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={className}
                    aria-current={isActive ? "page" : undefined}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto">
              <ContactUsButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
