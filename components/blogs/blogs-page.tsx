import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Badge from "@/components/ui/badge";
import { ReadMore } from "@/components/blogs/blog-card";
import { featuredBlog } from "@/lib/blogs";

const BlogCategoryGrid = dynamic(() => import("@/components/blogs/blog-category-grid"));

/** Server-rendered blogs hero + featured post; category grid is a client island. */
export default function BlogsPageContent() {
  return (
    <>
      <section className="fs-container px-4 sm:px-6 pt-4 flex flex-col items-center gap-3 sm:gap-[15px]">
        <h1 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal max-w-[935px]">
          Discover Insights and Inspiration
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
          Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.
        </p>
      </section>

      <section className="fs-container px-4 sm:px-6 w-full">
        <article className="group flex w-full flex-col gap-5 rounded-[16px] bg-white p-4 sm:p-5 shadow-[3px_0px_4px_0px_rgba(113,136,225,0.1),0px_4px_4px_0px_rgba(113,136,225,0.1)] sm:flex-row sm:items-center sm:gap-9">
          <Link
            href={`/blogs/${featuredBlog.slug}`}
            className="flex w-full flex-col gap-5 sm:flex-row sm:items-center sm:gap-9 outline-none focus-visible:ring-2 focus-visible:ring-fs-purple focus-visible:ring-offset-2 rounded-[8px]"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[8px] sm:h-[344px] sm:w-[495px]">
              <Image
                src={featuredBlog.imageSrc}
                alt={featuredBlog.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 495px"
                className="object-cover transition-transform duration-300 sm:group-hover:scale-[1.02]"
                priority
              />
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start">
              <div className="flex w-full flex-col gap-5 items-start">
                <Badge fontSize="16px" variant="solid">
                  {featuredBlog.category}
                </Badge>
                <div className="flex flex-col gap-[15px]">
                  <h2 className="font-heading text-[24px] leading-[29px] tracking-[-0.96px] text-fs-card-text sm:text-[36px] sm:leading-[40px]">
                    {featuredBlog.title}
                  </h2>
                  <p className="font-body text-[16px] leading-[22px] tracking-[-0.96px] text-fs-card-muted sm:text-[20px] sm:leading-[28px] max-w-[451px]">
                    {featuredBlog.excerpt}
                  </p>
                </div>
              </div>
              <ReadMore />
            </div>
          </Link>
        </article>
      </section>

      <BlogCategoryGrid />
    </>
  );
}
