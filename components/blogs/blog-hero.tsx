import Image from "next/image";
import Badge from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blogs";

interface BlogHeroProps {
  readonly post: BlogPost;
}

export default function BlogHero({ post }: BlogHeroProps) {
  return (
    <section className="fs-container w-full px-4 sm:px-6 pt-4">
      <article className="flex w-full flex-col gap-5 rounded-[16px] border border-fs-border bg-white p-4 sm:flex-row sm:items-center sm:gap-8 sm:rounded-card sm:p-5 sm:shadow-[3px_0px_4px_0px_rgba(113,136,225,0.1),0px_4px_4px_0px_rgba(113,136,225,0.1)] lg:gap-9">
        <div className="flex flex-1 flex-col items-start gap-4 sm:gap-5">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Badge fontSize="16px" variant="solid">
              {post.category}
            </Badge>
            <time
              dateTime="2023-02-24"
              className="font-body text-[14px] leading-[20px] text-fs-grey sm:text-[16px] sm:leading-[22px]"
            >
              {post.date}
            </time>
          </div>
          <h1 className="font-heading text-[24px] leading-[29px] font-medium tracking-[-0.96px] text-fs-card-text sm:text-[32px] sm:leading-[38px] lg:text-[36px] lg:leading-[40px]">
            {post.title}
          </h1>
        </div>

        <div className="relative aspect-[384/284] w-full overflow-hidden rounded-[8px] sm:w-[340px] sm:shrink-0 lg:w-[400px]">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 340px, 400px"
            className="object-cover"
            priority
          />
        </div>
      </article>
    </section>
  );
}
