import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/badge";

interface BlogCardProps {
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  /** Destination for the card. Defaults to /blogs — individual post routes are not implemented yet. */
  readonly href?: string;
}

function ReadMore() {
  return (
    <span className="inline-flex flex-col items-start gap-1.5 text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19px] font-normal text-fs-card-muted transition-colors sm:group-hover:text-fs-dark">
      <span className="inline-flex items-center gap-2">
        <span>Read more</span>
        <svg
          className="w-4 h-4 shrink-0 transition-transform duration-150 sm:group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
      <span className="w-full border-t border-fs-border-strong" />
    </span>
  );
}

export default function BlogCard({
  category,
  title,
  excerpt,
  imageSrc,
  imageAlt,
  href = "/blogs",
}: BlogCardProps) {
  return (
    <article className="group flex h-full flex-1 flex-col rounded-blog border border-fs-border sm:bg-white bg-transparent p-5">
      <Link href={href} className="flex h-full flex-col justify-between outline-none focus-visible:ring-2 focus-visible:ring-fs-purple focus-visible:ring-offset-2 rounded-[8px]">
        <div className="relative h-40 sm:h-[220px] overflow-hidden rounded-[8px] mb-[20px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1058px) 320px, 330px"
            className="object-cover transition-transform duration-300 sm:group-hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[20px]">
          <Badge fontSize="14px" variant="solid">
            {category}
          </Badge>
          <h3 className="font-heading text-[24px] sm:text-[29px] font-[500] leading-[29px] sm:leading-[31px] tracking-[-0.75px] text-fs-card-text">
            {title}
          </h3>
          <p className="font-body text-[16px] leading-[19px] tracking-[-0.96px] text-fs-card-muted">
            {excerpt}
          </p>
          <div className="mt-auto pt-1">
            <ReadMore />
          </div>
        </div>
      </Link>
    </article>
  );
}

export { ReadMore };
