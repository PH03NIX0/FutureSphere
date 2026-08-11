import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import AboutHero from "@/components/about/about-hero";
import StorySection from "@/components/about/story-section";
import dynamic from "next/dynamic";

const ValuesSection = dynamic(() => import("@/components/about/values-section"));
const ClientSection = dynamic(() => import("@/components/clients/client-section"));
const TeamSection = dynamic(() => import("@/components/about/team-section"));
const OfficesSection = dynamic(() => import("@/components/about/offices-section"));
const CareersSection = dynamic(() => import("@/components/about/careers-section"));
const NewsletterSection = dynamic(() => import("@/components/newsletter/newsletter-section"));

export const metadata = {
  title: "About Us | FutureSphere",
  description:
    "Learn about FutureSphere's mission, values, team, global offices, and open career opportunities.",
};

export default function About() {
  return (
    <main className="bg-fs-background flex flex-col items-center w-full overflow-x-hidden">
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
