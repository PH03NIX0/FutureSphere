"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import SliderNavigation from "@/components/testimonials/slider-navigation";
import { getCloudinaryUrl } from "@/lib/cloudinary";

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
    image: getCloudinaryUrl("futuresphere/images/mission-visual", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Our services",
  },
  {
    badge: "Services",
    heading: "Seamless Connectivity Solutions",
    body: "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world. Our connectivity solutions enable teams to collaborate effectively across geographies and time zones, driving better outcomes.",
    image: getCloudinaryUrl("futuresphere/images/mission-visual", { fetch_format: "auto", quality: "auto" }),
    imageAlt: "Our services",
  },
  {
    badge: "Services",
    heading: "Intuitive Digital Experiences",
    body: "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity. We create digital experiences that delight users and drive meaningful engagement across every touchpoint in the journey.",
    image: getCloudinaryUrl("futuresphere/images/mission-visual", { fetch_format: "auto", quality: "auto" }),
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
        className="border border-fs-border rounded-card sm:bg-white bg-transparent fs-container mx-auto p-6 sm:p-10"
      >
 <div
   className="flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[67px] mx-auto"
 >
 {/* Left Column */}
           <div
             className="flex flex-col justify-between w-full max-w-[501px]"
           >
             {/* Animated content area - normal flow to avoid overlap */}
             <div className="min-h-[260px]">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeIndex}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3, ease: "easeInOut" }}
                   className="flex flex-col gap-[38px]"
                 >
                   <Badge>{slide.badge}</Badge>
                   <h2
                     className="font-heading font-normal w-full text-[28px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[44px] text-fs-purple"
                   >
                     {slide.heading}
                   </h2>
 <p
                      className="font-body font-normal text-left text-p2 text-fs-grey">
                     {slide.body}
                   </p>
                 </motion.div>
               </AnimatePresence>
             </div>

             {/* Fixed footer: navigation never moves */}
             <div className="flex justify-end mt-6">
             <SliderNavigation onPrevious={handlePrevious} onNext={handleNext} />
           </div>
           </div>

           {/* Right Image */}
           <div
             className="relative w-full max-w-[460px] rounded-card overflow-hidden bg-transparent sm:bg-white h-[220px] sm:h-[420px]"
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
