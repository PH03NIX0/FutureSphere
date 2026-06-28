import Image from "next/image";

interface FeaturedCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: number;
  width?: string;
  height?: string;
}

export default function FeaturedCard({
  src,
  alt,
  title,
  description,
  index,
  width = "272px",
  height = "328px",
}: FeaturedCardProps) {
  return (
    <div className={`feature-card feature-card-${index} flex flex-col items-center text-center p-[20px] gap-[16px]`} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
      />
      <h3 className="font-heading text-p1 text-fs-dark font-semibold">
        {title}
      </h3>
      <p className="font-body text-[16px] font-normal leading-[22px] tracking-[-0.75px] text-center text-[#7A7D9C]">
        {description}
      </p>
    </div>
  );
}