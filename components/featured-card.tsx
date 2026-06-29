interface FeaturedCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: number;
  className?: string;
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
    <div className={`feature-card feature-card-${index} flex flex-col items-center text-center p-[20px] gap-[16px] flex-1 h-auto sm:h-full bg-transparent sm:bg-white ${className}`}>
      <img
        src={src}
        alt={alt}
        width={48}
        height={48}
      />
      <h3 className="font-heading text-p1 text-fs-dark font-semibold">
        {title}
      </h3>
      <p className="font-body text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[22px] tracking-[-0.75px] text-center text-fs-grey">
        {description}
      </p>
    </div>
  );
}