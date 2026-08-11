"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";
import SliderNavigation from "@/components/testimonials/slider-navigation";

interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly avatarSrc: string;
  readonly socials?: { readonly href: string; readonly label: string; readonly iconSrc: string }[];
}

interface TeamCarouselProps {
  readonly members: readonly TeamMember[];
  readonly activeIndex: number;
  readonly onActiveIndexChange: (index: number) => void;
}

type Slot = {
  readonly size: number;
  readonly offset: number;
  readonly opacity: number;
  readonly z: number;
  readonly y: number;
};

/** Mobile: 3 larger faces (kept separate from tablet/desktop) */
const MOBILE_SLOTS: readonly Slot[] = [
  { size: 152, offset: -118, opacity: 0.5, z: 1, y: 22 },
  { size: 220, offset: 0, opacity: 1, z: 3, y: 0 },
  { size: 152, offset: 118, opacity: 0.5, z: 1, y: 22 },
];

/** Tablet + desktop: Figma-scale 7-person arc (center ~315) */
const DESKTOP_SLOTS: readonly Slot[] = [
  { size: 180, offset: -456, opacity: 0.45, z: 1, y: 36 },
  { size: 193, offset: -324, opacity: 0.6, z: 2, y: 22 },
  { size: 222, offset: -192, opacity: 0.85, z: 3, y: 10 },
  { size: 315, offset: 0, opacity: 1, z: 5, y: 0 },
  { size: 222, offset: 192, opacity: 0.85, z: 3, y: 10 },
  { size: 193, offset: 324, opacity: 0.6, z: 2, y: 22 },
  { size: 180, offset: 456, opacity: 0.45, z: 1, y: 36 },
];

const SLIDE_TRANSITION = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.85,
};

function CarouselStage({
  members,
  activeIndex,
  onActiveIndexChange,
  slots,
  height,
}: {
  readonly members: readonly TeamMember[];
  readonly activeIndex: number;
  readonly onActiveIndexChange: (index: number) => void;
  readonly slots: readonly Slot[];
  readonly height: number;
}) {
  const count = members.length;
  const radius = (slots.length - 1) / 2;

  return (
    <div
      className="relative mx-auto w-full"
      style={{ height }}
      aria-live="polite"
    >
      {slots.map((slot, slotIndex) => {
        const relative = slotIndex - radius;
        const memberIndex = (activeIndex + relative + count * 10) % count;
        const member = members[memberIndex];
        const isCenter = relative === 0;

        return (
          <motion.button
            key={member.id}
            type="button"
            onClick={() => onActiveIndexChange(memberIndex)}
            aria-label={`Show ${member.name}`}
            aria-current={isCenter ? "true" : undefined}
            initial={false}
            animate={{
              x: `calc(-50% + ${slot.offset}px)`,
              width: slot.size,
              height: slot.size,
              opacity: slot.opacity,
              y: slot.y,
              zIndex: slot.z,
            }}
            transition={SLIDE_TRANSITION}
            className="absolute top-0 left-1/2 overflow-hidden rounded-full border border-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fs-purple"
          >
            <Image
              src={getCloudinaryUrl(member.avatarSrc)}
              alt={member.name}
              width={320}
              height={320}
              sizes="(max-width: 767px) 220px, 315px"
              className="h-full w-full object-cover"
              draggable={false}
              // Only the center face needs to be eager; neighbors can wait.
              loading={isCenter ? "eager" : "lazy"}
            />
          </motion.button>
        );
      })}
    </div>
  );
}

export default function TeamCarousel({
  members,
  activeIndex,
  onActiveIndexChange,
}: TeamCarouselProps) {
  const count = members.length;
  // Mount a single stage so we do not download every avatar twice (mobile + desktop trees).
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function goTo(index: number) {
    onActiveIndexChange(((index % count) + count) % count);
  }

  const showMobile = isMobile !== false;
  const slots = showMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
  const height = showMobile ? 260 : 380;

  return (
    <div className="flex w-full flex-col items-center gap-[24px] md:gap-[28px]">
      {/* Reserve height before matchMedia resolves to avoid layout shift */}
      <div className="w-full min-h-[260px] md:min-h-[380px]">
        {isMobile !== null && (
          <CarouselStage
            members={members}
            activeIndex={activeIndex}
            onActiveIndexChange={onActiveIndexChange}
            slots={slots}
            height={height}
          />
        )}
      </div>

      <SliderNavigation
        onPrevious={() => goTo(activeIndex - 1)}
        onNext={() => goTo(activeIndex + 1)}
        align="center"
      />
    </div>
  );
}
