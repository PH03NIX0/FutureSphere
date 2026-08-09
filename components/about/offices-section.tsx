import Image from "next/image";
import Badge from "@/components/ui/badge";
import ContactUsButton from "@/components/ui/contact-us-button";
import SignUpButton from "@/components/ui/sign-up-button";
import { offices } from "@/lib/offices";

export default function OfficesSection() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-[80px]">
      <div className="fs-container mx-auto flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[50px] w-full">
          <div className="flex flex-col items-center gap-[20px] w-full max-w-[800px]">
            <Badge>Our Offices</Badge>
            <h2 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Discover Our Global Network of Offices
            </h2>
            <p className="font-body text-center text-fs-grey max-w-[800px] text-[16px] leading-[19px] sm:leading-[24px]">
              Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.
            </p>
          </div>

          <div className="w-full rounded-blog border border-fs-border bg-white px-5 py-6 sm:px-10 sm:py-10 lg:px-[65px] lg:py-[47px]">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-[30px] lg:justify-between">
              {offices.map((office) => (
                <article key={office.city} className="flex flex-col gap-[30px]">
                  <div className="relative h-[220px] sm:h-[301px] overflow-hidden rounded-[8px]">
                    <Image
                      src={office.imageSrc}
                      alt={office.imageAlt}
                      fill
                      sizes="(max-width: 1058px) 100vw, 330px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] font-heading tracking-[-0.96px]">
                    <h3 className="text-[20px] leading-[24px] text-fs-purple">{office.city}</h3>
                    <p className="text-[16px] leading-[19px] text-fs-grey">{office.address}</p>
                    <p className="text-[16px] leading-[19px] text-fs-dark">{office.phone}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-[15px]">
          <SignUpButton>Signup</SignUpButton>
          <ContactUsButton />
        </div>
      </div>
    </section>
  );
}
