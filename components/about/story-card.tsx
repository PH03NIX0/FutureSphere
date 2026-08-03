import Image from "next/image";
import Badge from "@/components/ui/badge";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface StoryCardProps {
  readonly badge?: string;
  readonly description: string[];
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly reverse?: boolean;
}

export default function StoryCard({
  badge,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: StoryCardProps) {
  return (
    <div
      className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-[40px] lg:gap-[39px] lg:items-center`}
    >
      {/* Content */}
      <div className="flex flex-col gap-[20px] w-full lg:max-w-[501px]">
        {badge && <Badge>{badge}</Badge>}

        {description.map((paragraph, index) => (
          <p key={index} className="font-body font-normal text-left w-full text-[16px] leading-[19px] tracking-[-0.96px] text-fs-grey">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Image */}
      <div className="relative rounded-card overflow-hidden w-full h-[280px] lg:max-w-[460px] lg:h-[420px]">
        <Image
          src={getCloudinaryUrl(imageSrc, { fetch_format: "auto", quality: "auto" })}
          alt={imageAlt}
          fill
          sizes="(max-width: 1058px) 100vw, 460px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

