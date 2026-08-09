import Link from "next/link";
import { mainNavLinks, implementedNavHrefs } from "@/lib/navigation";

const footerLinks = [
  ...mainNavLinks,
  { href: "/contact", label: "Contact Us" },
] as const;

export default function FooterNav() {
  return (
    <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-[24px] gap-y-[12px] md:gap-[40px]">
      {footerLinks.map((link) => {
        const isContact = link.label === "Contact Us";
        const isImplemented = implementedNavHrefs.has(link.href);
        const className = [
          "font-body text-[16px] leading-[1.6] text-white/70 transition-colors duration-150 hover:text-white",
          // Contact Us is desktop/tablet only — matches mobile Figma footer
          isContact ? "hidden md:inline" : "",
        ]
          .filter(Boolean)
          .join(" ");

        if (isImplemented) {
          return (
            <Link key={link.label} href={link.href} className={className}>
              {link.label}
            </Link>
          );
        }

        return (
          <a key={link.label} href={link.href} className={className}>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
