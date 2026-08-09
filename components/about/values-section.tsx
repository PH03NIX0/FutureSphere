import { Fragment } from "react";
import Badge from "@/components/ui/badge";
import ValueCard from "./value-card";
import Divider from "@/components/ui/divider";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const values = [
  {
    title: "Integrity",
    description:
      "Upholding honesty and ethical conduct in everything we do, building trust with our stakeholders.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-integrity", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Innovation",
    description:
      "Embracing a culture of creativity and continuous improvement to drive groundbreaking solutions.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-innovation", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Collaboration",
    description:
      "Fostering a collaborative environment that encourages teamwork, diversity, and shared success.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-collaboration", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Customer-centric",
    description:
      "Putting our customers at the heart of everything we do, delivering exceptional experiences and exceeding their expectations.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-customer-focus", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Sustainability",
    description:
      "Operating with a focus on environmental and social responsibility, striving for a more sustainable future.",
    iconSrc: "/icons/value-sustainability.svg",
  },
  {
    title: "Excellence",
    description:
      "Pursuing excellence in all aspects of our work, setting high standards and striving for continuous growth and improvement.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-excellence", { fetch_format: "svg", quality: "auto" }),
  },
];

export default function ValuesSection() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-12 sm:mt-16 lg:mt-20">
      <div className="fs-container mx-auto">
        <div className="flex flex-col items-center gap-8 sm:gap-[50px]">
          <div className="flex flex-col items-center gap-3 sm:gap-[15px] w-full max-w-[800px]">
            <Badge>Our Values</Badge>

            <h2 className="font-heading text-[28px] leading-[34px] font-medium text-center text-fs-dark sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Guided by Integrity and Purpose
            </h2>

            <p className="font-body text-center text-fs-grey max-w-[800px] text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px]">
              At FutureSphere, we are driven by a strong set of values that shape every aspect of our business, ensuring transparency, ethical practices, and a shared commitment to making a positive impact.
            </p>
          </div>

          <div className="w-full rounded-blog border border-fs-border bg-white px-4 py-5 sm:px-8 sm:py-8 lg:px-[65px] lg:py-[47px]">
            <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[81px]">
              <div className="flex flex-col sm:hidden" aria-label="Company values">
                {values.map((value) => (
                  <ValueCard key={value.title} title={value.title} description={value.description} iconSrc={value.iconSrc} />
                ))}
              </div>

              <div className="hidden sm:flex lg:hidden flex-col gap-12" aria-hidden="true">
                {[values.slice(0, 2), values.slice(2, 4), values.slice(4, 6)].map((row) => (
                  <div key={row[0].title} className="flex items-center justify-center gap-6 md:gap-10">
                    {row.map((value, i) => (
                      <Fragment key={value.title}>
                        {i > 0 && <Divider />}
                        <ValueCard title={value.title} description={value.description} iconSrc={value.iconSrc} />
                      </Fragment>
                    ))}
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex flex-col gap-[81px]" aria-hidden="true">
                {[values.slice(0, 3), values.slice(3, 6)].map((row) => (
                  <div key={row[0].title} className="flex items-center justify-center gap-[55px]">
                    {row.map((value, i) => (
                      <Fragment key={value.title}>
                        {i > 0 && <Divider />}
                        <ValueCard title={value.title} description={value.description} iconSrc={value.iconSrc} />
                      </Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
