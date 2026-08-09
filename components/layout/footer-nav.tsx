import { mainNavLinks } from "@/lib/navigation";

const links = [
  ...mainNavLinks,
  { href: "/contact", label: "Contact Us" },
] as const;

export default function FooterNav() {
  return (
    <nav aria-label="Footer navigation">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/85 sm:hover:text-white transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
