import { getCloudinaryUrl } from "@/lib/cloudinary";

export const blogCategories = ["All", "Healthcare", "Business", "Cloud Computing"] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts = [
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
  {
    category: "Business",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Business insights blog post",
  },
  {
    category: "Cloud Computing",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Cloud computing blog post",
  },
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
  {
    category: "Business",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Business insights blog post",
  },
  {
    category: "Cloud Computing",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Cloud computing blog post",
  },
  {
    category: "Healthcare",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Healthcare AI blog post",
  },
  {
    category: "Business",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Business insights blog post",
  },
  {
    category: "Cloud Computing",
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt:
      "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Cloud computing blog post",
  },
] as const;

export const featuredBlog = {
  category: "Healthcare",
  title: "The Benefits of Email Marketing for Small Businesses",
  excerpt:
    "In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.",
  imageSrc: getCloudinaryUrl("futuresphere/images/blog-featured", { fetch_format: "auto", quality: "auto" }),
  imageAlt: "Email marketing for small businesses",
} as const;
