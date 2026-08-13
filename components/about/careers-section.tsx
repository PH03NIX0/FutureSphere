import Badge from "@/components/ui/badge";
import JobCard from "@/components/careers/job-card";
import { jobs } from "@/lib/jobs";

interface CareersSectionProps {
  readonly heading?: string;
}

export default function CareersSection({
  heading = "New job opportunities",
}: CareersSectionProps) {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-[80px]">
      <div className="fs-container mx-auto flex flex-col items-center gap-8 sm:gap-[50px]">
        <div className="flex flex-col items-center gap-3 sm:gap-5 w-full max-w-[800px]">
          <Badge>Careers</Badge>
          <h2 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
            {heading}
          </h2>
          <p className="font-body text-center text-fs-grey max-w-[720px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
            Browse through vacancies. internships and job postings at FutureSphere
          </p>
        </div>

        <div className="flex w-full flex-col gap-[10px]">
          {jobs.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
