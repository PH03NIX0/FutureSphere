import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import CareersHero from "@/components/careers/careers-hero";
import PerksSection from "@/components/careers/perks-section";
import dynamic from "next/dynamic";

const OfficesSection = dynamic(() => import("@/components/about/offices-section"));
const CareersSection = dynamic(() => import("@/components/about/careers-section"));
const NewsletterSection = dynamic(() => import("@/components/newsletter/newsletter-section"));

export const metadata = {
  title: "Careers | FutureSphere",
  description:
    "Join FutureSphere — explore perks, global offices, and open roles for remote and on-site talent.",
};

export default function Careers() {
  return (
    <main className="bg-fs-background flex flex-col items-center gap-6 sm:gap-8 w-full">
      <Navbar />
      <CareersHero />
      <PerksSection />
      <OfficesSection />
      <CareersSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
