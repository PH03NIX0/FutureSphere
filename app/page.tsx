import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import HeroImage from "@/components/hero/hero-image";
import dynamic from "next/dynamic";

const MetricsBar = dynamic(() => import("@/components/metrics/metrics-bar"));
const Features = dynamic(() => import("@/components/features/features"));
const MissionSection = dynamic(() => import("@/components/mission/mission-section"));
const ClientSection = dynamic(() => import("@/components/clients/client-section"));
const ServicesSection = dynamic(() => import("@/components/services/services-section"));
const TestimonialsSection = dynamic(() => import("@/components/testimonials/testimonials-section"));
const BlogsSection = dynamic(() => import("@/components/blogs/blogs-section"));
const NewsletterSection = dynamic(() => import("@/components/newsletter/newsletter-section"));

export default function Home() {
  return (
    <main className="bg-fs-background flex flex-col items-center w-full">
      <Navbar />
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
        <Hero />
        <HeroImage />
      </div>
      <MetricsBar />
      <Features />
      <MissionSection />
      <ClientSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
