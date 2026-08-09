import Image from "next/image";
import Badge from "@/components/ui/badge";
import ContactUsButton from "@/components/ui/contact-us-button";
import SignUpButton from "@/components/ui/sign-up-button";
import { offices } from "@/lib/offices";

export default function OfficesSection() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-[80px]">
      <div className="fs-container mx-auto flex flex-col items-center gap-6 sm:gap-[30px]">
        <div className="flex flex-col items-center gap-8 sm:gap-[50px] w-full">
          <div className="flex flex-col items-center gap-3 sm:gap-5 w-full max-w-[800px]">
            <Badge>Our Offices</Badge>
            <h2 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Discover Our Global Network of Offices
            </h2>
            <p className="font-body text-center text-fs-grey max-w-[800px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
              Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.
            </p>
          </div>

          <div className="w-full rounded-blog border border-fs-border bg-white px-4 py-5 sm:px-8 sm:py-8 lg:px-[65px] lg:py-[47px]">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
              {offices.map((office) => (
                <article key={office.city} className="flex flex-col gap-5 sm:gap-[30px]">
                  <div className="relative h-[200px] sm:h-[260px] lg:h-[301px] overflow-hidden rounded-[8px]">
                    <Image
                      src={office.imageSrc}
                      alt={office.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-[10px] font-heading tracking-[-0.96px]">
                    <h3 className="text-[18px] sm:text-[20px] leading-[24px] text-fs-purple">{office.city}</h3>
                    <p className="text-[15px] sm:text-[16px] leading-[20px] sm:leading-[19px] text-fs-grey">{office.address}</p>
                    <p className="text-[15px] sm:text-[16px] leading-[20px] sm:leading-[19px] text-fs-dark">{office.phone}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-[15px]">
          <SignUpButton>Sign Up</SignUpButton>
          <ContactUsButton />
        </div>
      </div>
    </section>
  );
}
