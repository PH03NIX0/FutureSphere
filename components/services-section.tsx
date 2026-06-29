"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Badge from "@/components/badge";
import SliderNavigation from "@/components/slider-navigation";

interface ServiceSlide {
  badge: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
}

const services: ServiceSlide[] = [
  {
    badge: "Services",
    heading: "Streamlined Business Operations",
    body: "Our technology solutions streamline and optimize business operations, automating processes, enhancing efficiency, and improving overall productivity. From seamless inventory management to streamlined customer relationship management, our solutions empower businesses to operate at their peak potential, saving time and resources while maximizing profitability.",
    image: "/images/mission-visual.png",
    imageAlt: "Our services",
  },
  {
    badge: "Services",
    heading: "Seamless Connectivity Solutions",
    body: "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world. Our connectivity solutions enable teams to collaborate effectively across geographies and time zones, driving better outcomes.",
    image: "/images/mission-visual.png",
    imageAlt: "Our services",
  },
  {
    badge: "Services",
    heading: "Intuitive Digital Experiences",
    body: "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity. We create digital experiences that delight users and drive meaningful engagement across every touchpoint in the journey.",
    image: "/images/mission-visual.png",
    imageAlt: "Our services",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slide = services[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="flex justify-center mt-[80px] w-full px-4 sm:px-6">
      <div
        className="border border-[#EFF0F7] rounded-[32px] bg-white w-full max-w-[1058px] p-6 sm:p-10"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[67px] mx-auto"
          style={{ maxWidth: "1018px" }}
        >
          {/* Left Column */}
          <div
            className="flex flex-col justify-between w-full"
            style={{ maxWidth: "501px" }}
          >
            {/* Fixed-height animated content area */}
            <div className="relative h-[260px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col gap-[38px]"
                >
                  <Badge>{slide.badge}</Badge>
                  <h2
                    className="font-heading font-normal w-full text-[28px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[44px] tracking-[-0.96px]"
                    style={{ color: "var(--color-fs-purple)" }}
                  >
                    {slide.heading}
                  </h2>
                  <p
                    className="font-body font-normal text-left w-full text-p2"
                    style={{ color: "var(--color-fs-grey)" }}
                  >
                    {slide.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Fixed footer: navigation never moves */}
            <SliderNavigation onPrevious={handlePrevious} onNext={handleNext} />
          </div>

          {/* Right Image */}
          <div
            className="relative rounded-[32px] overflow-hidden bg-white w-full h-[220px] sm:h-[420px]"
            style={{ maxWidth: "460px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${activeIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  sizes="(max-width: 1058px) 100vw, 460px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
