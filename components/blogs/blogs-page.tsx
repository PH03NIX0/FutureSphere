"use client";

import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import BlogCard from "@/components/blogs/blog-card";
import { blogCategories, blogPosts, featuredBlog, type BlogCategory } from "@/lib/blogs";

export default function BlogsPageContent() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <section className="fs-container px-4 sm:px-6 pt-4 flex flex-col items-center gap-[15px]">
        <h1 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal max-w-[935px]">
          Discover Insights and Inspiration
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[16px] leading-[19px] sm:leading-[24px]">
          Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.
        </p>
      </section>

      <section className="fs-container px-4 sm:px-6 w-full">
        <article className="flex w-full flex-col gap-6 rounded-[16px] bg-white p-5 shadow-[3px_0px_4px_0px_rgba(113,136,225,0.1),0px_4px_4px_0px_rgba(113,136,225,0.1)] sm:flex-row sm:items-center sm:gap-9">
          <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[8px] sm:h-[344px] sm:w-[495px]">
            <Image
              src={featuredBlog.imageSrc}
              alt={featuredBlog.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, 495px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-1 flex-col gap-5 sm:items-end">
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
            <span className="group inline-flex flex-col items-end gap-1.5 text-[16px] leading-[19px] text-fs-card-muted">
              <span className="inline-flex items-center gap-2">
                Read more
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="w-full border-t border-fs-border-strong" />
            </span>
          </div>
        </article>
      </section>

      <section className="fs-container mx-auto flex w-full flex-col items-center gap-[50px] px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Blog categories">
          {blogCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={
                  isActive
                    ? "rounded-full bg-[#b190db] px-2.5 py-[7px] text-[12px] text-white"
                    : "rounded-full border border-fs-border bg-[#f5f7fa] px-2.5 py-[7px] text-[12px] text-[#121213] transition-colors sm:hover:border-fs-purple/40"
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <BlogCard key={`${post.category}-${index}`} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
