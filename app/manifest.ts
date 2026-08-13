import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FutureSphere",
    short_name: "FutureSphere",
    description:
      "Cutting-edge technology solutions that streamline business operations and drive growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#F9FAFB",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
