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
    <section className="flex flex-col items-center gap-[50px] w-[1058px] mt-[80px]">
      <div className="flex flex-col items-center gap-[20px] w-[800px]">
        <Badge>Our Clients</Badge>
        <h2 className="font-heading font-normal text-fs-dark w-[800px] text-center" style={{ fontSize: "48px", lineHeight: "58px", letterSpacing: "-3.8267px" }}>
          Trusted by Industry Leaders
        </h2>
        <p className="font-body text-[16px] leading-[22px] tracking-[-0.75px] text-center text-[#7A7D9C] w-[720px]">
          Empowering Innovation for a Digital Tomorrow
        </p>
      </div>

      <div className="flex items-center justify-between w-[1054px] h-[64px]">
        {logos.map((logo) => (
          <ClientLogo key={logo.alt} {...logo} />
        ))}
      </div>
    </section>
  );
}
