import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PricingPlans from "@/components/pricing/pricing-plans";
import dynamic from "next/dynamic";

const NewsletterSection = dynamic(() => import("@/components/newsletter/newsletter-section"));

export const metadata = {
  title: "Pricing | FutureSphere",
  description:
    "Transparent pricing for FutureSphere — Basic, Business, and Enterprise plans with exceptional value.",
};

export default function Pricing() {
  return (
    <main className="bg-fs-background flex flex-col items-center gap-6 sm:gap-8 w-full">
      <Navbar />
      <PricingPlans />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
