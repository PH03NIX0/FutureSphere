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

interface PositionConfig {
  readonly size: number;
  readonly offset: number;
  readonly zIndex: number;
  readonly opacity: number;
  readonly scale: number;
}

const POSITIONS: readonly PositionConfig[] = [
  { size: 180, offset: -456, zIndex: 5, opacity: 0.45, scale: 0.8 },
  { size: 193, offset: -324, zIndex: 15, opacity: 0.6, scale: 0.85 },
  { size: 222, offset: -192, zIndex: 25, opacity: 0.85, scale: 0.92 },
  { size: 315, offset: 0, zIndex: 40, opacity: 1, scale: 1 },
  { size: 222, offset: 192, zIndex: 30, opacity: 0.85, scale: 0.92 },
  { size: 193, offset: 324, zIndex: 20, opacity: 0.6, scale: 0.85 },
  { size: 180, offset: 456, zIndex: 10, opacity: 0.45, scale: 0.8 },
];

export default function TeamCarousel({ members, activeIndex, onActiveIndexChange }: TeamCarouselProps) {
  const total = members.length;

  const getDisplayOrder = (active: number): number[] => {
    const order: number[] = [];
    for (let i = -3; i <= 3; i++) {
      const idx = ((active + i) % total + total) % total;
      order.push(idx);
    }
    return order;
  };

  const displayOrder = getDisplayOrder(activeIndex);

  const goToPrevious = () => {
    onActiveIndexChange((activeIndex - 1 + total) % total);
  };

  const goToNext = () => {
    onActiveIndexChange((activeIndex + 1) % total);
  };

  return (
    <div className="flex flex-col items-center gap-[24px]">
      <div className="relative flex items-center justify-center w-full h-[380px]">
        {displayOrder.map((memberIndex, displayIndex) => {
          const member = members[memberIndex];
          const pos = POSITIONS[displayIndex];
          const isActive = displayIndex === 3;

          return (
            <button
              key={member.id}
              type="button"
              onClick={() => onActiveIndexChange(memberIndex)}
              className="absolute rounded-full overflow-hidden transition-all duration-200"
              aria-label={`View ${member.name}`}
              aria-pressed={isActive}
              style={{
                width: `${pos.size}px`,
                height: `${pos.size}px`,
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translateX(${pos.offset}px) scale(${pos.scale})`,
                zIndex: pos.zIndex,
                opacity: pos.opacity,
              }}
            >
              <Image
                src={getCloudinaryUrl(member.avatarSrc, { fetch_format: "auto", quality: "auto" })}
                alt={member.name}
                fill
                sizes={`${pos.size}px`}
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      <SliderNavigation onPrevious={goToPrevious} onNext={goToNext} />
    </div>
  );
}
