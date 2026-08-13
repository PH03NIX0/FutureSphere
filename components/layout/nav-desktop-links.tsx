"use client";

import { usePathname } from "next/navigation";
import { implementedNavHrefs, isNavHrefActive, mainNavLinks } from "@/lib/navigation";

export default function NavDesktopLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden sm:flex gap-4 text-sm text-white font-body">
      {mainNavLinks.map((link) => {
        const isActive = isNavHrefActive(link.href, pathname);
        const className = `relative transition-colors duration-150 group cursor-pointer ${isActive ? "font-medium" : "text-white/85 sm:hover:text-white"}`;
        const underline = (
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white origin-center transition-transform duration-200 ${isActive ? "scale-x-100" : "scale-x-0 sm:group-hover:scale-x-100"}`}
          />
        );

        if (!implementedNavHrefs.has(link.href)) {
          return (
            <button key={link.label} type="button" className={className}>
              {link.label}
              {underline}
            </button>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            className={className}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
            {underline}
          </a>
        );
      })}
    </div>
  );
}
