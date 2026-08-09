import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import BlogsPageContent from "@/components/blogs/blogs-page";
import NewsletterSection from "@/components/newsletter/newsletter-section";

export const metadata = {
  title: "Blogs | FutureSphere",
  description:
    "Discover insights and inspiration from FutureSphere — articles on healthcare, business, and cloud computing.",
};

export default function Blogs() {
  return (
    <main className="bg-fs-background flex flex-col items-center gap-6 sm:gap-8 w-full pb-0">
      <Navbar />
      <BlogsPageContent />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
