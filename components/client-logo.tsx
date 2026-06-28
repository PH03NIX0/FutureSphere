interface ClientLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ClientLogo({ src, alt, width, height }: ClientLogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
    />
  );
}
