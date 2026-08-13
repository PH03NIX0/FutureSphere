import type { Job } from "@/lib/jobs";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const arrowRightSrc = getCloudinaryUrl("futuresphere/icons/arrow-right", {
  fetch_format: "svg",
  quality: "auto",
});

interface JobCardProps {
  readonly job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <a
      href={`/careers/${job.slug}`}
      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-[8px] border border-fs-border bg-white px-4 py-4 sm:px-5 sm:py-5 transition-transform duration-150 sm:hover:-translate-y-[1px] outline-none focus-visible:ring-2 focus-visible:ring-fs-purple focus-visible:ring-offset-2"
    >
      <article className="flex min-w-0 flex-1 flex-col gap-[15px]">
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
      </article>

      <span className="inline-flex size-[44px] sm:size-[55.11px] shrink-0 items-center justify-center rounded-full border border-fs-purple opacity-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={arrowRightSrc}
          alt=""
          width={21}
          height={21}
          className="transition-transform duration-150 group-hover:translate-x-[2px]"
          aria-hidden="true"
        />
      </span>
    </a>
  );
}
