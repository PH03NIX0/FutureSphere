import Image from "next/image";
import Badge from "@/components/ui/badge";
import { getCloudinaryUrl } from "@/lib/cloudinary";

interface ServiceItem {
  readonly heading: string;
  readonly body: string;
  readonly image: string;
  readonly imageAlt: string;
}

const serviceImage = getCloudinaryUrl("futuresphere/images/mission-visual", {
  fetch_format: "auto",
  quality: "auto",
});

const services: ServiceItem[] = [
  {
    heading: "Streamlined Business Operations",
    body: "Our technology solutions streamline and optimize business operations, automating processes, enhancing efficiency, and improving overall productivity. From seamless inventory management to streamlined customer relationship management, our solutions empower businesses to operate at their peak potential, saving time and resources while maximizing profitability.",
    image: serviceImage,
    imageAlt: "Streamlined business operations",
  },
  {
    heading: "Seamless Connectivity Solutions",
    body: "Stay connected anytime, anywhere with our robust and reliable network infrastructure, ensuring uninterrupted communication and effortless access to the digital world. Our connectivity solutions enable teams to collaborate effectively across geographies and time zones, driving better outcomes.",
    image: serviceImage,
    imageAlt: "Seamless connectivity solutions",
  },
  {
    heading: "Intuitive Digital Experiences",
    body: "Enjoy a seamless and intuitive user experience with our sleek and user-friendly interface, designed to simplify complex tasks and enhance productivity. We create digital experiences that delight users and drive meaningful engagement across every touchpoint in the journey.",
    image: serviceImage,
    imageAlt: "Intuitive digital experiences",
  },
];

export default function ServicesSection() {
  return (
    <section className="flex justify-center mt-12 sm:mt-16 lg:mt-[80px] w-full px-4 sm:px-6">
      <div className="border border-fs-border rounded-card bg-white fs-container mx-auto p-5 sm:p-8 lg:p-10 flex flex-col gap-10 sm:gap-12 lg:gap-[60px]">
        {services.map((service, index) => (
          <article
            key={service.heading}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[67px]"
          >
            <div className="flex flex-col gap-5 sm:gap-8 w-full max-w-[501px]">
              {index === 0 ? <Badge>Services</Badge> : <span className="sr-only">Services</span>}
              <h2 className="font-heading font-normal w-full text-[28px] sm:text-[32px] md:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[44px] text-fs-purple">
                {service.heading}
              </h2>
              <p className="font-body font-normal text-left text-[15px] leading-[22px] sm:text-p2 text-fs-grey">
                {service.body}
              </p>
            </div>

            <div className="relative w-full max-w-[460px] rounded-card overflow-hidden h-[220px] sm:h-[320px] lg:h-[420px]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1058px) 100vw, 460px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
