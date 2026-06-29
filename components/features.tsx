import { Fragment } from "react";
import ContactUsButton from "@/components/contact-us-button";
import FeaturedCard from "@/components/featured-card";
import Divider from "@/components/divider";
import Badge from "@/components/badge";
import ViewAllLink from "@/components/view-all-link";

const features = [
  {
    src: "/icons/feature-innovation-icon.svg",
    title: "Cutting-Edge Innovation",
    description:
      "Experience groundbreaking technological advancements that push the boundaries of what's possible, revolutionizing industries and transforming the way we live and work.",
  },
  {
    src: "/icons/feature-connectivity-icon.svg",
    title: "Seamless Connectivity",
    description:
      "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world.",
  },
  {
    src: "/icons/feature-ui-icon.svg",
    title: "Intuitive User Interface",
    description:
      "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity.",
  },
];

export default function Features() {
  return (
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[1058px] mt-[80px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-[50px] w-full">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[600px]">
          <Badge fontSize="16px">Features</Badge>
          <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] leading-[38px] sm:leading-[48px] lg:leading-[58px] tracking-[-3.8267px] text-center text-fs-dark font-normal">
            Discover the Tools that Drive Success
          </h2>
          <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-center text-fs-grey">
            Unleash innovation and accelerate growth with our dynamic product.
          </p>
        </div>

        <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full px-4 sm:px-6 py-8 sm:py-12 bg-white border border-[#EFF0F7] rounded-[16px] gap-[24px]">
          {features.map((feature, i) => (
            <Fragment key={feature.title}>
              <FeaturedCard
                src={feature.src}
                alt={feature.title}
                title={feature.title}
                description={feature.description}
                index={i + 1}
                className="w-full sm:w-auto"
              />
              {i < features.length - 1 && <Divider className="hidden sm:block" />}
            </Fragment>
          ))}
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