import { getCloudinaryUrl } from "@/lib/cloudinary";

const socials = [
  { href: "#", label: "Twitter", src: getCloudinaryUrl("futuresphere/social/twitter") },
  { href: "#", label: "Facebook", src: getCloudinaryUrl("futuresphere/social/facebook") },
  { href: "#", label: "LinkedIn", src: getCloudinaryUrl("futuresphere/social/linkedin") },
];

export default function FooterSocials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className="text-white sm:hover:text-white/80 transition-[transform,opacity] duration-150 sm:hover:-translate-y-[2px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={social.src}
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </a>
      ))}
    </div>
  );
}
