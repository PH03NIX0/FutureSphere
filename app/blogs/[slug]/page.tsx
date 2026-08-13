import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import BlogHero from "@/components/blogs/blog-hero";
import BlogArticle from "@/components/blogs/blog-article";
import dynamic from "next/dynamic";
import {
  getAllBlogPosts,
  getBlogBySlug,
  getRelatedBlogPosts,
} from "@/lib/blogs";

const BlogsSection = dynamic(() => import("@/components/blogs/blogs-section"));

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Blog | FutureSphere" };
  }

  return {
    title: `${post.title} | Blogs | FutureSphere`,
    description: post.excerpt,
  };
}

export default async function BlogSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug);

  return (
    <main className="bg-fs-background flex flex-col items-center w-full pb-12 sm:pb-16 lg:pb-[80px]">
      <Navbar />
      <BlogHero post={post} />
      <BlogArticle post={post} />
      <BlogsSection
        heading="Related Blogs"
        showBadge={false}
        posts={relatedPosts}
      />
      <Footer />
    </main>
  );
}
