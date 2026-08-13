import type { Job } from "@/lib/jobs";

interface JobDescriptionProps {
  readonly job: Job;
}

export default function JobDescription({ job }: JobDescriptionProps) {
  return (
    <section className="fs-container w-full px-4 sm:px-6 mt-8 sm:mt-12 lg:mt-[50px]">
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 sm:gap-10">
        {job.sections.map((section) => (
          <article key={section.title} className="flex flex-col gap-4 sm:gap-5">
            <h2 className="font-heading text-[22px] leading-[28px] font-medium text-fs-dark sm:text-[24px] sm:leading-[29px] sm:tracking-[-0.75px]">
              {section.title}
            </h2>
            <p className="font-body text-[15px] leading-[22px] text-fs-grey sm:text-[16px] sm:leading-[24px]">
              {section.intro}
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5 font-body text-[15px] leading-[22px] text-fs-grey sm:gap-2.5 sm:text-[16px] sm:leading-[24px]">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
