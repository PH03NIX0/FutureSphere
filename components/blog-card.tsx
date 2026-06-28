import Image from "next/image";
import Badge from "@/components/badge";

interface BlogCardProps {
  category: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
}

export default function BlogCard({ category, title, excerpt, imageSrc, imageAlt }: BlogCardProps) {
  return (
    <article className="flex flex-1 flex-col justify-between rounded-[16px] border border-[#EFF0F7] bg-white p-5">
      <div className="relative h-[220px] overflow-hidden rounded-[8px] mb-[20px]">
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
        <h3 className="font-heading text-[20px] font-medium leading-[24px] tracking-[-0.75px] text-[#272422]">
          {title}
        </h3>
        <p className="font-body text-[16px] leading-[19px] tracking-[-0.96px] text-[#8B857F]">
          {excerpt}
        </p>
        <a
          href="#"
          className="group inline-flex flex-col items-end text-[16px] leading-[19px] tracking-[-0.75px] font-normal text-[#8B857F] transition-colors hover:text-fs-dark"
        >
          <div className="inline-flex flex-col">
            <span>Read more</span>
            <span className="w-full border-t border-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </div>
        </a>
      </div>
    </article>
  );
}
