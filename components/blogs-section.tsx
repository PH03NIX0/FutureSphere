import Badge from "@/components/badge";
import ContactUsButton from "@/components/contact-us-button";
import ViewAllLink from "@/components/view-all-link";
import BlogCard from "@/components/blog-card";

const blogs = [
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: "/images/blog-featured.png",
    imageAlt: "Healthcare AI blog post",
  },
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: "/images/blog-featured.png",
    imageAlt: "Healthcare AI blog post",
  },
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: How Machine Learning is Revolutionizing Patient Care",
    excerpt: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: "/images/blog-featured.png",
    imageAlt: "Healthcare AI blog post",
  },
];

export default function BlogsSection() {
  return (
    <section className="fs-container mx-auto flex flex-col gap-[50px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-[20px] w-full">
        <Badge fontSize="16px">Blogs</Badge>
          <h2
            className="font-heading font-medium sm:font-normal text-fs-dark text-center w-full text-h2 sm:text-[40px] lg:text-[48px] leading-h2 sm:leading-[48px] lg:leading-[58px]"
          >
            Latest Insights
          </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-[24px]">
          <ContactUsButton />
          <ViewAllLink />
        </div>
      </div>
    </section>
  );
}
