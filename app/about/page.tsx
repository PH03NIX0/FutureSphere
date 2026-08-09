import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import AboutHero from "@/components/about/about-hero";
import StorySection from "@/components/about/story-section";
import ValuesSection from "@/components/about/values-section";
import TeamSection from "@/components/about/team-section";
import ClientSection from "@/components/clients/client-section";
import OfficesSection from "@/components/about/offices-section";
import CareersSection from "@/components/about/careers-section";
import NewsletterSection from "@/components/newsletter/newsletter-section";

export const metadata = {
  title: "About Us | FutureSphere",
  description:
    "Learn about FutureSphere's mission, values, team, global offices, and open career opportunities.",
};

export default function About() {
  return (
    <main className="bg-fs-background flex flex-col items-center gap-6 sm:gap-8 w-full">
      <Navbar />
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <ClientSection />
      <TeamSection />
      <OfficesSection />
      <CareersSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
