import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function HeroImage() {
  // Mobile: increase safe zone with different composition
  // Desktop: center crop
  // Container matches Hero/Navbar horizontal padding for alignment
  return (
    <div className="fs-container px-4 sm:px-6">
      <div className="relative w-full h-[280px] sm:h-[388px] rounded-2xl sm:rounded-full overflow-hidden group">
        <Image
           src={getCloudinaryUrl("futuresphere/images/hero-visual", { fetch_format: "auto", quality: "auto" })}
          alt="Futuristic technology interface with glowing geometric elements"
          fill
          priority
          sizes="(max-width: 1058px) 100vw, 1058px"
          className="object-cover sm:group-hover:scale-105 transition-transform duration-500 ease-out"
          style={{
            objectPosition: 'center 40%',
          }}
        />
      </div>
    </div>
  );
}
