import { Fragment } from "react";
import Badge from "@/components/ui/badge";
import ValueCard from "./value-card";
import Divider from "@/components/ui/divider";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const values = [
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every interaction, building trust through transparency and honesty.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-integrity", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Innovation",
    description:
      "We push boundaries and embrace new ideas to create transformative solutions that shape the future.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-innovation", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering outstanding quality in everything we do, exceeding expectations at every turn.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-excellence", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Collaboration",
    description:
      "We believe the best results come from working together, fostering an environment of shared knowledge and teamwork.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-collaboration", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Customer Focus",
    description:
      "We put our customers at the heart of every decision, ensuring their success drives our own.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-customer-focus", { fetch_format: "svg", quality: "auto" }),
  },
  {
    title: "Accountability",
    description:
      "We take ownership of our actions and outcomes, learning and growing from every experience.",
    iconSrc: getCloudinaryUrl("futuresphere/icons/value-excellence", { fetch_format: "svg", quality: "auto" }),
  },
];

export default function ValuesSection() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-20">
      <div className="fs-container mx-auto">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-[15px] w-full max-w-[800px]">
            <Badge>Our Values</Badge>

            <h2 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Guided by Integrity and Purpose
            </h2>

            <p className="font-body text-center text-fs-grey max-w-[800px] text-[16px] leading-[19px] sm:leading-[24px]">
              At FutureSphere, we are driven by a strong set of values that shape every aspect of our business, ensuring transparency, ethical practices, and a shared commitment to making a positive impact.
            </p>
          </div>

          <div className="w-full max-w-[1168px] rounded-card border border-fs-border bg-white px-[65px] py-[47px]">
            <div className="flex flex-col gap-[81px]">
              {/* Mobile: single column */}
              <div className="flex flex-col sm:hidden">
                {values.map((value) => (
                  <ValueCard key={value.title} title={value.title} description={value.description} iconSrc={value.iconSrc} />
                ))}
              </div>

              {/* Tablet: 2 columns */}
              <div className="hidden sm:flex lg:hidden flex-col gap-[81px]">
                {[values.slice(0, 2), values.slice(2, 4), values.slice(4, 6)].map((row) => (
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

              {/* Desktop: 3 columns */}
              <div className="hidden lg:flex flex-col gap-[81px]">
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
