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
    <section className="flex flex-col items-center gap-[50px] fs-container mx-auto mt-[80px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-[50px] w-full">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[600px]">
          <Badge fontSize="16px">Features</Badge>
          <h2
            className="font-heading font-medium sm:font-normal text-fs-dark text-center text-h2 sm:text-[40px] lg:text-[48px] leading-h2 sm:leading-[48px] lg:leading-[58px]"
          >
            Discover the Tools that Drive Success
          </h2>
          <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-center text-fs-grey">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div className="border border-fs-border rounded-card sm:bg-white bg-transparent w-full px-6 sm:px-10 py-8 sm:py-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[40px] lg:gap-[60px] w-full max-w-[1018px] mx-auto">
              <div className="flex flex-col lg:hidden w-full gap-6">
                {features.map((feature) => (
                  <FeaturedCard
                    key={feature.title}
                    src={feature.src}
                    alt={feature.title}
                    title={feature.title}
                    description={feature.description}
                    index={features.indexOf(feature) + 1}
                  />
                ))}
              </div>

              <div className="hidden lg:flex items-center justify-center gap-[60px] w-full">
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