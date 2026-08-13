import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function CareersHero() {
  return (
    <section className="fs-container px-4 sm:px-6 pt-4 pb-8 sm:pb-12 flex flex-col items-center gap-8 sm:gap-[50px]">
      <div className="flex flex-col items-center gap-3 sm:gap-[15px] w-full max-w-[935px]">
        <h1 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
          Join Our Team and Shape the Future
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
          Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life. Collaborate with a dynamic group, create stunning websites, and make a lasting impact in the world of design, no matter where you are.
        </p>
      </div>

      <Image
        src={getCloudinaryUrl("futuresphere/images/careers-hero-composition")}
        alt="FutureSphere team collage with global presence and 30+ talented team members"
        width={834}
        height={706}
        priority
        fetchPriority="high"
        sizes="(max-width: 834px) 100vw, 834px"
        className="block h-auto w-full max-w-[834px]"
      />
    </section>
  );
}
