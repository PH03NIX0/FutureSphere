interface ClientLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ClientLogo({ src, alt, width, height }: ClientLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="grayscale-0 opacity-100 sm:grayscale sm:opacity-70 sm:hover:grayscale-0 sm:hover:opacity-100 sm:hover:scale-105 transition-transform duration-300"
    />
  );
}
