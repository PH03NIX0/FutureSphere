import Image from "next/image";
import Badge from "@/components/ui/badge";

const perks = [
  {
    title: "Flexible Work Environment",
    description:
      "Enjoy the freedom to work from anywhere in the world, whether it's the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs.",
  },
  {
    title: "Cultural Diversity",
    description:
      "Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth.",
  },
  {
    title: "Professional Development",
    description:
      "Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry.",
  },
  {
    title: "Travel Opportunities",
    description:
      "Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments.",
  },
  {
    title: "Global Networking",
    description:
      "Connect with professionals from around the world and build a vast network. Exchange ideas, share experiences, and create meaningful connections that can open doors to future collaborations and career growth.",
  },
  {
    title: "Competitive Compensation",
    description:
      "Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly.",
  },
] as const;

export default function PerksSection() {
  return (
    <section className="flex w-full justify-center px-4 sm:px-6 mt-10 sm:mt-16">
      <div className="fs-container mx-auto flex w-full flex-col gap-[30px]">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10 lg:justify-center">
          <div className="relative h-[280px] w-full max-w-[561px] overflow-hidden rounded-[32px] sm:h-[406px]">
            <Image
              src="/careers/perks-image.png"
              alt="Team member working remotely"
              fill
              sizes="(max-width: 1058px) 100vw, 561px"
              className="object-cover"
            />
          </div>

          <div className="flex w-full max-w-[480px] flex-col items-start gap-5">
            <Badge>Perks</Badge>
            <h2 className="font-heading text-h2 leading-[29px] font-medium text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Perks That Go Beyond Borders
            </h2>
            <p className="font-body text-fs-grey text-[16px] leading-[19px] sm:leading-[24px]">
              Experience a world of benefits with our global presence. Enjoy flexible work environments, cultural diversity, professional development opportunities, travel adventures, global networking, and competitive compensation.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-[10px] sm:grid-cols-2">
          {perks.map((perk) => (
            <article
              key={perk.title}
              className="flex flex-col gap-5 rounded-[8px] border border-fs-border bg-white px-5 py-[22px]"
            >
              <h3 className="font-heading text-[16px] tracking-[-0.96px] text-fs-purple">
                {perk.title}
              </h3>
              <div className="h-px w-full bg-fs-border" />
              <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-fs-grey">
                {perk.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
