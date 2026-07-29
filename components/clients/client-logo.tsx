import { getCloudinaryUrl } from "@/lib/cloudinary";

interface ClientLogoProps {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export default function ClientLogo({ src, alt, width, height }: ClientLogoProps) {
  const cloudinarySrc = src.startsWith("/") ? getCloudinaryUrl(src.replace(/^\/(images|icons)\//, "futuresphere/").replace(/\.\w+$/, "")) : src;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={cloudinarySrc}
      alt={alt}
      width={width}
      height={height}
      className="grayscale-0 opacity-100 sm:grayscale sm:opacity-70 sm:hover:grayscale-0 sm:hover:opacity-100 sm:hover:scale-105 transition-transform duration-300"
    />
  );
}
