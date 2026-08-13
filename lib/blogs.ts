import { getCloudinaryUrl } from "@/lib/cloudinary";

export const blogCategories = ["All", "Healthcare", "Business", "Cloud Computing"] as const;

export type BlogCategory = (typeof blogCategories)[number];

const blogCardImageSrc = getCloudinaryUrl("futuresphere/images/blog-featured", {
  fetch_format: "auto",
  quality: "auto",
});

const blogHeroImageSrc = getCloudinaryUrl("futuresphere/images/blog-hero", {
  fetch_format: "auto",
  quality: "auto",
});

const blogInlineImageSrc = getCloudinaryUrl("futuresphere/images/blog-inline", {
  fetch_format: "auto",
  quality: "auto",
});

const blogDate = "Feb 24, 2023";

const blogArticleSections = [
  {
    title: "Maximizing Product Success: Key Strategies for Product Managers",
    intro:
      "Product managers play a critical role in guiding products from idea to market. Success depends on a clear understanding of customers, disciplined prioritization, and close collaboration across teams.",
    heading: "Understand Customer Needs: The Foundation of Product Success.",
    items: [
      "Conduct thorough market research to identify customer pain points and opportunities.",
      "Perform user interviews and usability tests to validate assumptions early.",
      "Analyze feedback and usage data to refine product decisions over time.",
    ],
  },
  {
    title: "Develop a Strategic Product Roadmap: Guiding Your Product's Journey",
    intro:
      "A strong roadmap aligns stakeholders around what to build, why it matters, and when it should ship. It keeps the team focused while remaining flexible enough to adapt.",
    items: [
      "Define a product vision that supports broader business objectives.",
      "Prioritize features based on customer value, effort, and strategic impact.",
      "Set clear milestones and communicate progress across engineering, design, and marketing.",
    ],
  },
  {
    title: "Core Competencies",
    intro: "The candidate should possess the following core competencies:",
    items: [
      "Strategic Thinking: Ability to think strategically and align product goals with overall business objectives.",
      "Leadership: Strong leadership skills to inspire and motivate cross-functional teams.",
      "Communication: Excellent communication skills to effectively collaborate with stakeholders and convey product vision.",
      "Problem Solving: Proven ability to identify and solve complex problems in a fast-paced environment.",
      "Collaboration: Demonstrated ability to work collaboratively with cross-functional teams, including engineering, design, and marketing.",
    ],
  },
  {
    title: "Desired Qualities",
    intro:
      "In addition to the required qualifications, the following qualities are desired:",
    items: [
      "Passion for Technology: A genuine passion for technology and a desire to stay updated with industry trends.",
      "Customer-Centric Mindset: A customer-centric approach to product development, focusing on delivering value to end-users.",
      "Adaptability: Ability to adapt to changing priorities and thrive in a fast-paced, dynamic environment.",
      "Detail-Oriented: Strong attention to detail to ensure product quality and accuracy.",
      "Results-Driven: A results-driven mindset with a focus on delivering products that meet business goals.",
    ],
  },
] as const;

const aiExcerpt =
  "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.";

function createGridPost(
  slug: string,
  category: Exclude<BlogCategory, "All">,
  imageAlt: string
) {
  return {
    slug,
    category,
    title: "The Future of AI in Healthcare: Transforming Patient Care",
    excerpt: aiExcerpt,
    date: blogDate,
    imageSrc: blogCardImageSrc,
    imageAlt,
    inlineImageSrc: blogInlineImageSrc,
    inlineImageAlt: "Facebook like and dislike buttons on a light surface",
    sections: blogArticleSections,
  };
}

export const blogPosts = [
  createGridPost("the-future-of-ai-in-healthcare", "Healthcare", "Healthcare AI blog post"),
  createGridPost("the-future-of-ai-in-healthcare-business", "Business", "Business insights blog post"),
  createGridPost("the-future-of-ai-in-healthcare-cloud", "Cloud Computing", "Cloud computing blog post"),
  createGridPost("the-future-of-ai-in-healthcare-2", "Healthcare", "Healthcare AI blog post"),
  createGridPost("the-future-of-ai-in-healthcare-business-2", "Business", "Business insights blog post"),
  createGridPost("the-future-of-ai-in-healthcare-cloud-2", "Cloud Computing", "Cloud computing blog post"),
  createGridPost("the-future-of-ai-in-healthcare-3", "Healthcare", "Healthcare AI blog post"),
  createGridPost("the-future-of-ai-in-healthcare-business-3", "Business", "Business insights blog post"),
  createGridPost("the-future-of-ai-in-healthcare-cloud-3", "Cloud Computing", "Cloud computing blog post"),
] as const;

export const featuredBlog = {
  slug: "the-benefits-of-email-marketing-for-small-businesses",
  category: "Healthcare",
  title: "The Benefits of Email Marketing for Small Businesses",
  excerpt:
    "In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.",
  date: blogDate,
  imageSrc: blogHeroImageSrc,
  imageAlt: "Smartphone showing a social media folder",
  inlineImageSrc: blogInlineImageSrc,
  inlineImageAlt: "Facebook like and dislike buttons on a light surface",
  sections: blogArticleSections,
} as const;

export type BlogPost = (typeof blogPosts)[number] | typeof featuredBlog;

export function getAllBlogPosts(): BlogPost[] {
  return [featuredBlog, ...blogPosts];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, 3);
}
