import Badge from "@/components/badge";
import ClientLogo from "@/components/client-logo";

const logos = [
  { src: "/icons/descript.svg", alt: "Descript", width: 160, height: 64 },
  { src: "/icons/Shopify.svg", alt: "Shopify", width: 133, height: 64 },
  { src: "/icons/Slack.svg", alt: "Slack", width: 120, height: 64 },
  { src: "/icons/Elastic.svg", alt: "Elastic", width: 160, height: 64 },
  { src: "/icons/Loom.svg", alt: "Loom", width: 107, height: 64 },
];

export default function ClientSection() {
  return (
    <section className="flex flex-col items-center gap-[50px] w-full max-w-[1058px] mt-[80px] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-[20px] w-full max-w-[600px]">
        <Badge>Our Clients</Badge>
        <h2 className="font-heading font-normal text-fs-dark w-full text-center text-[32px] sm:text-[40px] lg:text-[48px] leading-[38px] sm:leading-[48px] lg:leading-[58px] tracking-[-3.8267px]">
          Trusted by Industry Leaders
        </h2>
        <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-center text-fs-grey w-full max-w-[720px]">
          Empowering Innovation for a Digital Tomorrow
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 w-full">
        {logos.map((logo) => (
          <ClientLogo key={logo.alt} {...logo} />
        ))}
      </div>
    </section>
  );
}
