import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ContactPage from "@/components/contact/contact-page";
import dynamic from "next/dynamic";

const NewsletterSection = dynamic(() => import("@/components/newsletter/newsletter-section"));

export const metadata = {
  title: "Contact Us | FutureSphere",
  description: "Get in touch with the FutureSphere team for sales, partnerships, support, and office information.",
};

export default function Contact() {
  return (
    <main className="flex w-full flex-col items-center gap-[100px] bg-fs-background pb-0 pt-[15px]">
      <Navbar />
      <ContactPage />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
