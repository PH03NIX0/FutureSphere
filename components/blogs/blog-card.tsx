import Image from "next/image";
import Badge from "@/components/ui/badge";

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BlogCard({ category, title, excerpt, imageSrc, imageAlt }: BlogCardProps) {
  return (
    <article className="flex flex-1 flex-col justify-between rounded-blog border border-fs-border sm:bg-white bg-transparent p-5">
      <div className="relative h-40 sm:h-[220px] overflow-hidden rounded-[8px] mb-[20px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1058px) 320px, 330px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[20px]">
        <Badge fontSize="14px" variant="solid">{category}</Badge>
        <h3 className="font-heading text-[24px] sm:text-[29px] font-[500] leading-[29px] sm:leading-[31px] tracking-[-0.75px] text-fs-card-text">
          {title}
        </h3>
        <p className="font-body text-[16px] leading-[19px] tracking-[-0.96px] text-fs-card-muted">
          {excerpt}
        </p>
        <a
          href="#"
          className="group inline-flex flex-col items-end gap-1.5 text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19px] font-normal text-fs-card-muted transition-colors sm:hover:text-fs-dark"
        >
          <div className="inline-flex items-center gap-2">
            <span>Read more</span>
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <span className="w-full border-t border-fs-border-strong scale-x-0 sm:group-hover:scale-x-100 transition-transform duration-200 origin-center" />
        </a>
      </div>
    </article>
  );
}
