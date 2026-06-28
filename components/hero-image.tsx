import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-[1058px] h-[388px] rounded-full overflow-hidden group">
        <Image
          src="/images/hero-visual.png"
          alt="Hero visual"
          fill
          sizes="(max-width: 1058px) 100vw, 1058px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
    </div>
  );
}
