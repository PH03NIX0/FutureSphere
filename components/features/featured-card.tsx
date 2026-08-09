interface FeaturedCardProps {
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly description: string;
  readonly index: number;
  readonly className?: string;
}

export default function FeaturedCard({
  src,
  alt,
  title,
  description,
  index,
  className = "",
}: FeaturedCardProps) {
  return (
    <div className={`feature-card feature-card-${index} flex flex-col items-center text-center p-[20px] gap-[16px] flex-1 min-h-[200px] bg-transparent sm:bg-white ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={48}
        height={48}
      />
      <h3 className="font-heading text-p1 text-fs-dark font-semibold">
        {title}
      </h3>
      <p className="font-body text-p2 text-fs-grey max-w-[231px]">
        {description}
      </p>
    </div>
  );
}
