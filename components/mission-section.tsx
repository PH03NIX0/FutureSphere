import Image from "next/image";
import Badge from "@/components/badge";
import ContactUsButton from "@/components/contact-us-button";

export default function MissionSection() {
  return (
    <section className="flex justify-center mt-[80px]">
      <div
        className="border border-[#EFF0F7] rounded-[32px] bg-white"
        style={{ width: "1058px", height: "534px", padding: "43px 20px" }}
      >
        <div
          className="flex flex-row items-center justify-between gap-[67px] mx-auto"
          style={{ width: "1018px", height: "448px" }}
        >
          {/* Left Column */}
          <div
            className="flex flex-col gap-[20px]"
            style={{ width: "501px", height: "346px" }}
          >
            {/* Mission Badge */}
            <Badge>Our Mission Statement</Badge>

            {/* Heading */}
            <h2
              className="font-heading font-normal text-fs-dark"
              style={{
                width: "501px",
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "-0.96px",
              }}
            >
              Empowering the world through transformative technology
              solutions
            </h2>

            {/* Body Text */}
            <p
              className="font-body font-normal text-left"
              style={{
                width: "501px",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#7A7D9C",
              }}
            >
              We are dedicated to empowering individuals, businesses, and
              communities by providing innovative and cutting-edge technology
              solutions that unlock new possibilities and drive positive change.
              Our mission is to make technology accessible, reliable, and
              impactful, enabling our customers to thrive in the digital era and
              shape a better future for all.
            </p>

            {/* Actions */}
            <div
              className="flex items-center gap-[25px]"
              style={{ height: "35px" }}
            >
              <a
                href="#"
                className="relative font-body text-[16px] font-medium text-fs-purple transition-colors duration-150 group"
              >
                Signup
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-fs-purple scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-200" />
              </a>
              <ContactUsButton />
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative rounded-[32px] overflow-hidden"
            style={{ width: "460px", height: "420px" }}
          >
            <Image
              src="/images/mission-visual.png"
              alt="Our mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}