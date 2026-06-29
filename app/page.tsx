import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HeroImage from "@/components/hero-image";
import MetricsBar from "@/components/metrics-bar";
import Features from "@/components/features";
import MissionSection from "@/components/mission-section";
import ClientSection from "@/components/client-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogsSection from "@/components/blogs-section";
import NewsletterSection from "@/components/newsletter-section";

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
