"use client";

import { useState } from "react";
import BlogCard from "@/components/blogs/blog-card";
import { blogCategories, blogPosts, type BlogCategory } from "@/lib/blogs";

/** Client island for category filtering — keeps the rest of the blogs page as RSC. */
export default function BlogCategoryGrid() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
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
  );
}
