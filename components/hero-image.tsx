import Image from "next/image";

export default function HeroImage() {
  // Mobile: increase safe zone with different composition
  // Desktop: center crop
  // Container matches Hero/Navbar horizontal padding for alignment
  return (
    <div className="w-full max-w-[1058px] mx-auto px-4 sm:px-6">
      <div className="relative w-full h-[280px] sm:h-[388px] rounded-2xl sm:rounded-full overflow-hidden group">
        <Image
          src="/images/hero-visual.png"
          alt="Hero visual"
          fill
          sizes="(max-width: 1058px) 100vw, 1058px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          style={{
            objectPosition: 'center 40%', // Mobile: subject lower for safe zone
          }}
        />
      </div>
    </div>
  );
}
