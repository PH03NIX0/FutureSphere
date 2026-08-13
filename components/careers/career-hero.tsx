import Image from "next/image";
import Badge from "@/components/ui/badge";
import type { Job } from "@/lib/jobs";
import { getJobOffice } from "@/lib/jobs";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const locationPinSrc = getCloudinaryUrl("futuresphere/icons/location-pin", {
  fetch_format: "svg",
  quality: "auto",
});

const careerGlobeSrc = getCloudinaryUrl("futuresphere/images/career-globe", {
  effect: "make_transparent",
});

interface CareerHeroProps {
  readonly job: Job;
}

export default function CareerHero({ job }: CareerHeroProps) {
  const office = getJobOffice(job);

  return (
    <section className="fs-container w-full px-4 sm:px-6 pt-4">
      <div className="relative min-h-[220px] overflow-hidden rounded-blog border border-fs-border bg-white px-5 py-6 sm:min-h-[260px] sm:rounded-card sm:px-8 sm:py-8 lg:min-h-[280px] lg:px-[50px] lg:py-10">
        <div className="relative z-10 flex w-[70%] max-w-[520px] flex-col items-start gap-3 sm:w-[58%] sm:gap-4">
          <Badge>{job.category}</Badge>
          <div className="flex flex-col gap-2 sm:gap-3">
            <h1 className="font-heading text-[28px] leading-[34px] font-medium text-fs-dark sm:text-[40px] sm:leading-[48px] sm:font-normal sm:tracking-[-3.8267px] lg:text-[48px] lg:leading-[58px]">
              {job.title}
            </h1>
            <p className="font-heading text-[16px] tracking-[-0.96px] sm:text-[18px]">
              <span className="text-fs-grey">{job.type}</span>
              <span className="text-fs-card-muted"> - </span>
              <span className={job.locationTone === "purple" ? "text-fs-purple" : "text-[#9f5af7]"}>
                {job.location}
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={locationPinSrc}
              alt=""
              width={24}
              height={24}
              className="mt-0.5 size-6 shrink-0"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1 font-heading tracking-[-0.96px]">
              <p className="text-[18px] leading-[24px] text-fs-purple sm:text-[20px]">{office.city}</p>
              <p className="text-[15px] leading-[20px] text-fs-grey sm:text-[16px]">{office.address}</p>
              <p className="text-[15px] leading-[20px] text-fs-grey sm:text-[16px]">{office.phone}</p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[58%] max-w-[560px] [mask-image:linear-gradient(to_right,transparent,black_22%)]"
        >
          <Image
            src={careerGlobeSrc}
            alt=""
            fill
            sizes="(max-width: 640px) 70vw, 560px"
            className="object-contain object-right"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
