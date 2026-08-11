import Image from "next/image";
import Badge from "@/components/ui/badge";
import { offices } from "@/lib/offices";

/** Server-rendered offices block for the contact page (no client JS). */
export default function ContactOffices() {
  return (
    <section className="fs-container mx-auto mt-12 sm:mt-16 lg:mt-[90px] flex flex-col items-center gap-8 sm:gap-[50px] px-4 sm:px-6">
      <div className="flex max-w-[880px] flex-col items-center gap-3 sm:gap-5 text-center">
        <Badge>Our Offices</Badge>
        <h2 className="font-heading text-[28px] leading-[34px] font-medium text-fs-dark sm:text-[40px] sm:font-normal sm:leading-[48px] lg:text-[48px] lg:leading-[58px] lg:tracking-[-3.8267px]">
          Discover Our Global Network of Offices
        </h2>
        <p className="font-body text-[15px] leading-[22px] sm:text-[16px] text-fs-grey">
          Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.
        </p>
      </div>

      <div className="grid w-full gap-8 rounded-blog border border-fs-border bg-white px-4 py-5 sm:px-8 sm:py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-[65px] lg:py-[47px]">
        {offices.map((office) => (
          <article key={office.city} className="flex flex-col gap-5 sm:gap-[30px]">
            <div className="relative h-[200px] overflow-hidden rounded-[8px] sm:h-[260px] lg:h-[301px]">
              <Image
                src={office.imageSrc}
                alt={office.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-[10px] font-heading tracking-[-0.96px]">
              <h3 className="text-[18px] sm:text-[20px] leading-[24px] text-fs-purple">{office.city}</h3>
              <p className="text-[15px] sm:text-[16px] leading-[20px] text-fs-grey">{office.address}</p>
              <p className="text-[15px] sm:text-[16px] leading-[20px] text-fs-dark">{office.phone}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
