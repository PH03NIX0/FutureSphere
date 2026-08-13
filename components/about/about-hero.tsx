import Image from "next/image";
import ContactUsButton from "@/components/ui/contact-us-button";
import SignUpButton from "@/components/ui/sign-up-button";

export default function AboutHero() {
  return (
    <section className="fs-container px-4 sm:px-6 pt-4 pb-8 sm:pb-12 flex flex-col items-center gap-8 sm:gap-[50px]">
      <div className="flex flex-col items-center gap-3 sm:gap-[15px] w-full max-w-[935px]">
        <h1 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
          To revolutionize industries through innovative technology solutions, driving positive change and empowering individuals and businesses
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
          At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change. We are dedicated to pushing the boundaries of what&apos;s possible, creating transformative experiences that make a lasting impact in a rapidly evolving digital landscape.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-[15px]">
          <SignUpButton>Sign Up</SignUpButton>
          <ContactUsButton />
        </div>
      </div>
      <div className="relative w-full h-[220px] sm:h-[420px] lg:h-[701px] rounded-[16px] sm:rounded-card overflow-hidden group">
        <Image
          src="https://res.cloudinary.com/wfqwup4o/image/upload/v1785420077/about_hero_image_tgrh77.png"
          alt="About us hero visual"
          fill
          sizes="(max-width: 1058px) 100vw, 1058px"
          className="object-cover sm:group-hover:scale-105 transition-transform duration-500 ease-out"
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
