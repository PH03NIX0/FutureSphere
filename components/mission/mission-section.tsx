import Image from "next/image";
import Badge from "@/components/ui/badge";
import ContactUsButton from "@/components/ui/contact-us-button";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function MissionSection() {
  const missionImage = getCloudinaryUrl("futuresphere/images/mission-visual", { fetch_format: "auto", quality: "auto" });
  return (
<section className="flex justify-center mt-[80px] w-full px-4 sm:px-6">
      <div
        className="border border-fs-border rounded-card sm:bg-white bg-transparent fs-container mx-auto p-6 sm:p-10"
      >
        <div className="flex flex-col gap-[20px] lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-[67px] lg:gap-y-[20px]">
          <Badge>Our Mission Statement</Badge>

          <div className="relative h-[280px] w-full overflow-hidden rounded-card lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:h-[420px] lg:max-w-[460px]">
            <Image
              src={missionImage}
              alt="Our mission"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <h2
            className="font-heading font-normal text-fs-dark w-full text-[28px] sm:text-[32px] lg:text-[36px] leading-[34px] sm:leading-[38px] lg:leading-[44px] tracking-[-0.96px] lg:col-start-1"
          >
            Empowering the world through transformative technology solutions
          </h2>

          <p
            className="font-body font-normal text-left w-full text-p2 text-fs-grey lg:col-start-1"
          >
            We are dedicated to empowering individuals, businesses, and
            communities by providing innovative and cutting-edge technology
            solutions that unlock new possibilities and drive positive change.
            Our mission is to make technology accessible, reliable, and
            impactful, enabling our customers to thrive in the digital era and
            shape a better future for all.
          </p>

          <div
            className="flex items-center justify-center sm:justify-start gap-[25px] mt-2 sm:mt-0 lg:col-start-1"
          >
            <a
              href="/signup"
              className="relative font-body text-[16px] font-medium text-fs-purple transition-colors duration-150 group"
            >
              Signup
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-fs-purple scale-x-0 sm:group-hover:scale-x-100 origin-center transition-transform duration-200" />
            </a>
            <ContactUsButton />
          </div>
        </div>
      </div>
    </section>
  );
}
