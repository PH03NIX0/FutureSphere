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
    <section className="flex justify-center mt-[80px]">
      <div
        className="border border-[#EFF0F7] rounded-[32px] bg-white"
        style={{ width: "1058px", height: "534px", padding: "43px 20px" }}
      >
        <div
          className="flex flex-row items-center justify-between gap-[67px] mx-auto"
          style={{ width: "1018px", height: "448px" }}
        >
          {/* Left Column */}
          <div
            className="flex flex-col justify-between"
            style={{ width: "501px", height: "346px" }}
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
                    className="font-heading font-normal"
                    style={{
                      fontSize: "36px",
                      lineHeight: "44px",
                      letterSpacing: "-0.96px",
                      color: "var(--color-fs-purple)",
                    }}
                  >
                    {slide.heading}
                  </h2>
                  <p
                    className="font-body font-normal text-left"
                    style={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      color: "var(--color-fs-grey)",
                      letterSpacing: "-0.75px",
                    }}
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
            className="relative rounded-[32px] overflow-hidden bg-white"
            style={{ width: "460px", height: "420px" }}
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
