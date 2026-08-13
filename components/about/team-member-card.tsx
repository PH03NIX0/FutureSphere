import { getCloudinaryUrl } from "@/lib/cloudinary";

interface TeamMemberCardProps {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly socials?: { readonly href: string; readonly label: string; readonly iconSrc: string }[];
}

export default function TeamMemberCard({ name, role, bio, socials = [] }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center gap-[16px] text-center">
      <p className="font-body text-p2 text-fs-grey">
        {bio}
      </p>

      <div className="flex flex-col items-center gap-[10px]">
        <h3 className="font-heading text-p1 font-semibold text-fs-purple">
          {name}
        </h3>

        <p className="font-body text-p2 text-fs-grey">
          {role}
        </p>

        {socials.length > 0 && (
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-fs-grey hover:text-fs-purple transition-colors duration-150"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={getCloudinaryUrl(social.iconSrc, { fetch_format: "svg", quality: "auto" })} alt={social.label} width={20} height={20} loading="lazy" decoding="async" className="object-contain" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
