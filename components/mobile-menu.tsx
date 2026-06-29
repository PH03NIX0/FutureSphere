"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import ContactUsButton from "./contact-us-button";

const links = [
  { href: "#", label: "About" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Blogs" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Contact Us" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMenu]);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={openMenu}
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
              onClick={closeMenu}
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
                onClick={closeMenu}
                className="self-end mb-8 w-10 h-10 flex items-center justify-center text-white"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white text-lg font-body hover:text-white/80 transition-colors duration-150"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
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
