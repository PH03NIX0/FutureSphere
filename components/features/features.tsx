import { Fragment } from "react";
import ContactUsButton from "@/components/ui/contact-us-button";
import FeaturedCard from "@/components/features/featured-card";
import Divider from "@/components/ui/divider";
import Badge from "@/components/ui/badge";
import ViewAllLink from "@/components/ui/view-all-link";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const features = [
  {
    src: getCloudinaryUrl("futuresphere/icons/feature-innovation"),
    title: "Cutting-Edge Innovation",
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
  },
  {
    src: getCloudinaryUrl("futuresphere/icons/feature-connectivity"),
    title: "Seamless Connectivity",
    description:
      "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.",
  },
  {
    src: getCloudinaryUrl("futuresphere/icons/feature-ui"),
    title: "Intuitive User Interface",
    description:
      "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[50px] fs-container mx-auto mt-12 sm:mt-16 lg:mt-[80px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-[50px] w-full">
        <div className="flex flex-col items-center gap-3 sm:gap-5 w-full max-w-[600px]">
          <Badge fontSize="16px">Features</Badge>
          <h2 className="font-heading font-medium sm:font-normal text-fs-dark text-center text-[28px] leading-[34px] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px]">
            Discover the Tools that Drive Success
          </h2>
          <p className="font-body text-[15px] leading-[22px] sm:text-[16px] sm:leading-[22px] tracking-[-0.75px] text-center text-fs-grey">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-[30px] w-full">
          <div className="border border-fs-border rounded-card bg-white w-full px-5 py-6 sm:px-10 sm:py-12">
            {/* Mobile / tablet: stacked features with horizontal rules */}
            <div className="flex flex-col lg:hidden w-full">
              {features.map((feature, index) => (
                <div key={feature.title}>
                  {index > 0 && <div className="h-px w-full bg-fs-border" aria-hidden="true" />}
                  <FeaturedCard
                    src={feature.src}
                    alt={feature.title}
                    title={feature.title}
                    description={feature.description}
                    index={index + 1}
                  />
                </div>
              ))}
            </div>

            {/* Desktop: horizontal features with vertical dividers */}
            <div className="hidden lg:flex items-center justify-center gap-[60px] w-full max-w-[1018px] mx-auto">
              {features.map((feature, i) => (
                <Fragment key={feature.title}>
                  <FeaturedCard
                    src={feature.src}
                    alt={feature.title}
                    title={feature.title}
                    description={feature.description}
                    index={i + 1}
                  />
                  {i < features.length - 1 && <Divider />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-[24px]">
            <ContactUsButton />
            <ViewAllLink />
          </div>
        </div>
      </div>
    </section>
  );
}
