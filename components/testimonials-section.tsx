"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Badge from "@/components/badge";
import DividerLabel from "@/components/divider-label";
import SliderNavigation from "@/components/slider-navigation";

interface TestimonialSlide {
  quote: string;
  authorName: string;
  authorTitle: string;
  imageSrc: string;
  imageAlt: string;
}

const testimonials: TestimonialSlide[] = [
  {
    quote: "I am incredibly impressed with the transformative technology solutions provided by FutureSphere. Their cutting-edge innovations have revolutionized our business operations, streamlining processes and boosting productivity. The seamless connectivity and intuitive user interface have made a significant impact on our team's efficiency. Thanks to their advanced data analytics capabilities, we now make data-driven decisions with confidence. I highly recommend FutureSphere to any organization seeking to stay ahead in the digital era.",
    authorName: "Sarah Thompson",
    authorTitle: "CEO Thompson Enterprises",
    imageSrc: "/images/client-portrait.png",
    imageAlt: "Sarah Thompson testimonial portrait",
  },
  {
    quote: "FutureSphere has been a game-changer for our company. The platform's intuitive design and powerful features have transformed how we manage our operations. We've seen a significant improvement in efficiency across all departments, and the support team is always responsive and helpful when we need assistance.",
    authorName: "David Chen",
    authorTitle: "CTO NovaTech Solutions",
    imageSrc: "/images/client-portrait.png",
    imageAlt: "David Chen testimonial portrait",
  },
  {
    quote: "The analytics capabilities alone have saved us countless hours. What used to take our team weeks now takes minutes. FutureSphere's commitment to innovation keeps us ahead of our competitors, and we couldn't imagine going back to our old workflows after experiencing this platform.",
    authorName: "Emily Rodriguez",
    authorTitle: "VP Operations Meridian Group",
    imageSrc: "/images/client-portrait.png",
    imageAlt: "Emily Rodriguez testimonial portrait",
  },
  {
    quote: "We evaluated dozens of platforms before choosing FutureSphere, and it was the best decision we made this year. The onboarding was smooth and the interface is beautiful, the results speak for themselves. Our team morale and output have never been higher thanks to this partnership.",
    authorName: "Marcus Johnson",
    authorTitle: "Director Pinnacle Systems",
    imageSrc: "/images/client-portrait.png",
    imageAlt: "Marcus Johnson testimonial portrait",
  },
];

const trustedBrands = [
  { src: "/icons/Airwallex.svg", alt: "Airwallex", width: 160, height: 64 },
  { src: "/icons/Outreach.svg", alt: "Outreach", width: 160, height: 64 },
  { src: "/icons/Razorpay.svg", alt: "Razorpay", width: 160, height: 64 },
  { src: "/icons/Discord.svg", alt: "Discord", width: 160, height: 64 },
  { src: "/icons/Dropbox.svg", alt: "Dropbox", width: 160, height: 64 },
];

const row1 = trustedBrands.slice(0, 3);
const row2 = trustedBrands.slice(3, 5);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slide = testimonials[activeIndex];

  return (
    <section className="flex flex-col items-center gap-[50px] w-full px-4 sm:px-6 mt-[80px]">
      <div className="flex flex-col items-center gap-[50px] fs-container mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[600px]">
          <Badge fontSize="16px">Testimonials</Badge>
          <h2
            className="font-heading font-medium sm:font-normal text-fs-dark w-full text-center text-h2 sm:text-[40px] lg:text-[48px] leading-h2 sm:leading-[48px] lg:leading-[58px]"
          >
            1M+ Global Customers
          </h2>
        </div>

        {/* Animated Testimonial Card */}
        <div
          className="border border-fs-border rounded-card sm:bg-white bg-transparent w-full p-6 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[60px] w-full">
            {/* Left: Fixed-size image container */}
            <div
              className="relative rounded-[16px] overflow-hidden flex-shrink-0 bg-transparent sm:bg-white w-full h-[280px] sm:h-[420px] max-w-[460px]"
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
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    sizes="(max-width: 1058px) 100vw, 460px"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Text column - nav fixed at bottom */}
            <div className="flex flex-col flex-1 w-full">
              {/* Animated text area - normal flow to avoid overlap */}
              <div className="min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col gap-[20px]"
                  >
<p
                     className="font-body font-normal text-left w-full text-p2 text-fs-grey">
                    {slide.quote}
                  </p>

                    <div className="flex flex-col gap-[4px]">
                      <span className="font-heading text-[20px] sm:text-[24px] leading-[24px] sm:leading-[29px] font-normal text-fs-dark">
                        {slide.authorName}
                      </span>
                      <span className="font-heading text-[16px] sm:text-[20px] leading-[22px] sm:leading-[24px] font-normal text-fs-dark">
                        {slide.authorTitle}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Fixed navigation - never animated */}
              <div className="flex justify-end mt-6">
                <SliderNavigation onPrevious={handlePrevious} onNext={handleNext} />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="flex flex-col items-center gap-[30px] w-full">
          <DividerLabel>Trusted By</DividerLabel>

          <div className="flex flex-col items-center gap-[24px]">
            <div className="flex items-center justify-center gap-6 sm:gap-[60px]">
              {row1.map((brand) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={brand.alt}
                  src={brand.src}
                  alt={brand.alt}
                  className="h-6 sm:h-8 w-auto shrink-0"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-[60px]">
              {row2.map((brand) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={brand.alt}
                  src={brand.src}
                  alt={brand.alt}
                  className="h-6 sm:h-8 w-auto shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}