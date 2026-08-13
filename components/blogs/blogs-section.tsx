import Badge from "@/components/ui/badge";
import ContactUsButton from "@/components/ui/contact-us-button";
import ViewAllLink from "@/components/ui/view-all-link";
import BlogCard from "@/components/blogs/blog-card";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const homepageBlogs = [
  {
    slug: "the-future-of-ai-in-healthcare",
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
  {
    slug: "the-future-of-ai-in-healthcare-2",
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
  {
    slug: "the-future-of-ai-in-healthcare-3",
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
] as const;

type BlogSectionPost = {
  readonly slug?: string;
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

interface BlogsSectionProps {
  readonly heading?: string;
  readonly showBadge?: boolean;
  readonly posts?: readonly BlogSectionPost[];
}

export default function BlogsSection({
  heading = "Latest Insights",
  showBadge = true,
  posts = homepageBlogs,
}: BlogsSectionProps) {
  return (
    <section className="fs-container mx-auto mt-12 sm:mt-16 lg:mt-[80px] flex flex-col gap-8 sm:gap-10 lg:gap-[50px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-3 sm:gap-5 w-full">
        {showBadge ? <Badge fontSize="16px">Blogs</Badge> : null}
        <h2 className="font-heading font-medium sm:font-normal text-fs-dark text-center w-full text-[28px] leading-[34px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
        {posts.map((blog, index) => (
          <div key={blog.slug ?? `${blog.category}-${index}`} className={index === 2 ? "hidden lg:block" : ""}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-[24px]">
          <ContactUsButton />
          <ViewAllLink href="/blogs" />
        </div>
      </div>
    </section>
  );
}
