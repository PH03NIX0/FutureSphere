const socials = [
  { href: "#", label: "Twitter", src: "/icons/twitter-logo.svg" },
  { href: "#", label: "Facebook", src: "/icons/facebook-logo.svg" },
  { href: "#", label: "LinkedIn", src: "/icons/linkedin-logo.svg" },
];

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="text-white hover:text-white/80 transition-[transform,opacity] duration-150 hover:-translate-y-[2px]"
        >
          <img src={social.src} alt={social.label} className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      ))}
    </div>
  );
}
