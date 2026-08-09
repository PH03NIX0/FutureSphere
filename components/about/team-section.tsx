"use client";

import { useState } from "react";
import Badge from "@/components/ui/badge";
import TeamMemberCard from "./team-member-card";
import TeamCarousel from "./team-carousel";

interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly avatarSrc: string;
  readonly socials?: { readonly href: string; readonly label: string; readonly iconSrc: string }[];
}

const team: TeamMember[] = [
  {
    id: "1",
    name: "Vasily",
    role: "CEO & Founder",
    bio: "The founder of FutureSphere, Vasily launched the company after identifying a critical gap in mobile learning tools while preparing for the LSAT himself. His first app became the top-grossing LSAT prep tool, laying the foundation for what would become FutureSphere. Today, as Founder and CEO, Vasily focuses on strategic direction and new market opportunities. He brings a founder's intuition to every major decision, from product architecture to go-to-market strategy. Under his leadership, the company has expanded from educational apps to serve industries worldwide, staying true to the original mission of solving problems through elegant technology.",
    avatarSrc: "Member_Image_egpust",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah leads the engineering organization with a focus on building robust, scalable systems that can grow with the company's ambitions. With over a decade of experience in cloud architecture and distributed systems, she has architected the infrastructure that powers FutureSphere's flagship products. Prior to joining, she spent five years at a fintech startup where she led the migration to microservices. Sarah holds a Master's in Computer Science from MIT and is a frequent speaker at engineering conferences. She is passionate about mentoring junior engineers and implementing best practices that ensure reliability, security, and performance across all platforms.",
    avatarSrc: "Member_Image_1_ydscag",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Head of Design",
    bio: "Marcus oversees the design vision across all FutureSphere products, ensuring that every interaction is both beautiful and functional. His background spans over twelve years in product design, ranging from early-stage startups to Fortune 500 companies. He previously led the design team at a SaaS company where he championed a user-centered design culture that resulted in a 40 percent increase in user engagement. Marcus studied Visual Communication Design at RISD and believes in crafting experiences that bridge aesthetics and functionality. His design philosophy centers on simplicity, accessibility, and creating emotional connections through thoughtful design systems.",
    avatarSrc: "Member_Image_2_dlfrni",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "4",
    name: "John Wick",
    role: "CEO FutureSphere",
    bio: "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn't exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
    avatarSrc: "Member_Image_3_euaglk",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "5",
    name: "David Kim",
    role: "Product Lead",
    bio: "David drives product strategy and execution across FutureSphere's portfolio, turning complex challenges into clear, impactful solutions. He joined the company after leading product development at a growth-stage startup where he launched three successful products in the mobile productivity space. David holds an MBA from Wharton and a degree in Cognitive Science from UC Berkeley. His analytical approach combines user research, data insights, and market analysis to make informed decisions. He is particularly passionate about leveraging artificial intelligence to create products that anticipate user needs and seamlessly integrate into their daily workflows.",
    avatarSrc: "Member_Image_4_lqpow4",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "6",
    name: "Aisha Patel",
    role: "Head of Growth",
    bio: "Aisha leads the growth team, focusing on user acquisition, retention, and market expansion strategies. Before joining FutureSphere, she built the growth function at a mobile commerce startup from 10,000 to over 2 million active users in three years. Aisha specializes in data-driven growth experiments, combining behavioral psychology with analytics to optimize the full user lifecycle. She holds a degree in Economics from Stanford and has been recognized as a top growth marketer under 30. Her expertise spans performance marketing, content strategy, and international market entry, helping FutureSphere scale globally while maintaining strong user engagement.",
    avatarSrc: "Member_Image_7_pa3axn",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
  {
    id: "7",
    name: "James Wilson",
    role: "Lead Developer",
    bio: "James leads the engineering team with a focus on building performant, maintainable code that scales. He is passionate about open-source contributions and has authored several widely-used libraries in the JavaScript ecosystem. Before FutureSphere, James spent four years at a consulting firm where he architected solutions for clients in finance and healthcare. He holds a degree in Software Engineering and is constantly exploring new frameworks and methodologies to improve development workflows. James believes in writing clean, well-documented code and advocates for automated testing and continuous integration practices across all projects.",
    avatarSrc: "Member_Image_6_sqp506",
    socials: [
      { href: "#", label: "Twitter", iconSrc: "futuresphere/social/twitter-purple.svg" },
      { href: "#", label: "Facebook", iconSrc: "futuresphere/social/facebook-purple.svg" },
      { href: "#", label: "LinkedIn", iconSrc: "futuresphere/social/linkedin-purple.svg" },
    ],
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeMember = team[activeIndex];

  return (
    <section className="flex justify-center w-full px-4 sm:px-6 mt-20">
      <div className="fs-container mx-auto">
        <div className="flex flex-col items-center gap-[50px]">
          <div className="flex flex-col items-center gap-[15px] w-full max-w-[800px]">
            <Badge>Our Team</Badge>

            <h2 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
              Meet our team
            </h2>

            <p className="font-body text-center text-fs-grey max-w-[800px] text-[16px] leading-[19px] sm:leading-[24px]">
              Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.
            </p>
          </div>

          {/* White card with member details */}
          <div className="w-full max-w-[842px] rounded-card border border-fs-border bg-white px-5 py-6 sm:px-10 sm:py-10 lg:px-[65px] lg:py-[47px]">
            <TeamMemberCard
              bio={activeMember.bio}
              name={activeMember.name}
              role={activeMember.role}
              socials={activeMember.socials}
            />
          </div>

          {/* Carousel and navigation outside the card */}
          <TeamCarousel members={team} activeIndex={activeIndex} onActiveIndexChange={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}
