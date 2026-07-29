import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import HeroImage from "@/components/hero/hero-image";
import MetricsBar from "@/components/metrics/metrics-bar";
import Features from "@/components/features/features";
import MissionSection from "@/components/mission/mission-section";
import ClientSection from "@/components/clients/client-section";
import BlogsSection from "@/components/blogs/blogs-section";
import NewsletterSection from "@/components/newsletter/newsletter-section";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("@/components/services/services-section"));
const TestimonialsSection = dynamic(() => import("@/components/testimonials/testimonials-section"));

export default function Home() {
  return (
    <main className="bg-fs-background flex flex-col items-center gap-6 sm:gap-8 w-full">
      <Navbar />
      <Hero />
      <HeroImage />
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
