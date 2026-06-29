const links = [
  { href: "#", label: "About" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Blogs" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Contact Us" },
];

export default function FooterNav() {
  return (
    <nav aria-label="Footer navigation">
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/85 hover:text-white transition-colors duration-150"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
