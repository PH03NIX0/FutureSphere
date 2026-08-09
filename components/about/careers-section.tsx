import Image from "next/image";
import Badge from "@/components/ui/badge";
import { jobs } from "@/lib/jobs";

export default function CareersSection() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-[80px]">
      <div className="fs-container mx-auto flex flex-col items-center gap-[50px]">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[800px]">
          <Badge>Careers</Badge>
          <h2 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
            New job opportunities
          </h2>
          <p className="font-body text-center text-fs-grey max-w-[720px] text-[16px] leading-[19px] sm:leading-[24px]">
            Browse through vacancies. internships and job postings at FutureSphere
          </p>
        </div>

        <div className="flex w-full max-w-[1065px] flex-col gap-[10px]">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="group flex items-center justify-between gap-4 rounded-[8px] border border-fs-border bg-white px-5 py-5 transition-transform duration-150 sm:hover:-translate-y-[1px]"
            >
              <div className="flex min-w-0 flex-col gap-[15px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-heading text-[20px] font-medium leading-[24px] tracking-[-0.75px] text-fs-card-text">
                    {job.title}
                  </h3>
                  <p className="font-heading text-[16px] tracking-[-0.96px]">
                    <span className="text-fs-grey">{job.type}</span>
                    <span className="text-fs-card-muted"> - </span>
                    <span className={job.locationTone === "purple" ? "text-fs-purple" : "text-[#9f5af7]"}>
                      {job.location}
                    </span>
                  </p>
                </div>
                <p className="font-body text-[14px] leading-[20px] text-fs-grey sm:text-[16px] sm:leading-[22px]">
                  {job.description}
                </p>
              </div>

              <span className="hidden size-[55.11px] shrink-0 items-center justify-center rounded-full border border-fs-purple opacity-80 sm:inline-flex">
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={21}
                  height={21}
                  unoptimized
                  className="transition-transform duration-150 group-hover:translate-x-[2px]"
                  aria-hidden="true"
                />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
