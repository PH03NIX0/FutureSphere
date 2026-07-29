"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContactUsButton from "@/components/ui/contact-us-button";

const links = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blogs", label: "Blogs" },
  { href: "/pricing", label: "Pricing" },
  { href: "#", label: "Contact Us" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const openMobileMenu = useCallback(() => setIsOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMobileMenu]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={openMobileMenu}
        className="flex flex-col items-center justify-center w-10 h-10 gap-[6px] sm:hidden"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <span className="block w-6 h-[2px] bg-white rounded-full transition-transform duration-200" />
        <span className="block w-6 h-[2px] bg-white rounded-full transition-opacity duration-200" />
        <span className="block w-6 h-[2px] bg-white rounded-full transition-transform duration-200" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={closeMobileMenu}
            />

            {/* Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[280px] bg-fs-dark flex flex-col p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close button */}
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

              {/* Nav links */}
              <nav className="flex flex-col gap-6">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  const className = `text-lg font-body transition-colors duration-150 ${isActive ? "text-white font-medium" : "text-white sm:hover:text-white/80"}`;
                  if (link.href === "#") {
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
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={className}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="mt-auto">
                <ContactUsButton />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}