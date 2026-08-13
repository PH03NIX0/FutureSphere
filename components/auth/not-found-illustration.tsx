import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/cloudinary";

const notFoundIllustrationSrc = getCloudinaryUrl("futuresphere/images/not-found-illustration");

export default function NotFoundIllustration() {
  return (
    <div className="relative flex w-full max-w-[280px] items-center justify-center sm:max-w-[320px]" aria-hidden="true">
      <Image
        src={notFoundIllustrationSrc}
        alt=""
        width={320}
        height={280}
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
