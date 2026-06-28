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
    <section className="max-w-[1058px] mx-auto flex flex-col gap-[50px]">
      <div className="flex flex-col items-center gap-[20px] w-full">
        <Badge fontSize="16px">Blogs</Badge>
        <h2
          className="font-heading font-normal text-fs-dark text-center w-full"
          style={{ fontSize: "48px", lineHeight: "58px", letterSpacing: "-3.8267px" }}
        >
          Latest Insights
        </h2>
      </div>

      <div className="flex gap-[30px] w-full items-start">
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
