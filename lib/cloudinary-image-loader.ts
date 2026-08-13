import type { ImageLoaderProps } from "next/image";

/**
 * Serve Cloudinary assets directly with width/quality transforms.
 * Local `/public` paths pass through unchanged.
 * Avoids double-optimizing Cloudinary URLs via the Next image proxy.
 */
export default function cloudinaryImageLoader({ src, width, quality }: ImageLoaderProps): string {
  if (src.startsWith("/") || src.startsWith("data:")) {
    return src;
  }

  try {
    const url = new URL(src);
    if (url.hostname !== "res.cloudinary.com") {
      return src;
    }

    const marker = "/image/upload/";
    const markerIndex = url.pathname.indexOf(marker);
    if (markerIndex === -1) {
      return src;
    }

    const afterUpload = url.pathname.slice(markerIndex + marker.length);
    const segments = afterUpload.split("/");
    const transformLike = /^([a-z]+_|,)/i;
    const hasTransforms = segments.length > 0 && transformLike.test(segments[0] ?? "");
    const existing = hasTransforms ? (segments[0] ?? "") : "";

    // Keep vector assets as SVG — f_auto would rasterize them into blurry PNGs.
    const isSvg =
      url.pathname.toLowerCase().endsWith(".svg") || /(^|,)f_svg(,|$)/.test(existing);
    if (isSvg) {
      return src;
    }

    const q = quality || "auto";
    const widthTransform = `w_${width},c_limit,f_auto,q_${q}`;

    let pathname: string;
    if (hasTransforms) {
      // Replace/append onto existing transform segment
      const rest = segments.slice(1).join("/");
      const cleaned = existing
        .split(",")
        .filter((part) => part && !/^w_/.test(part) && !/^c_/.test(part) && !/^f_/.test(part) && !/^q_/.test(part))
        .join(",");
      const nextTransforms = cleaned ? `${cleaned},${widthTransform}` : widthTransform;
      pathname = `${url.pathname.slice(0, markerIndex + marker.length)}${nextTransforms}/${rest}`;
    } else {
      pathname = `${url.pathname.slice(0, markerIndex + marker.length)}${widthTransform}/${afterUpload}`;
    }

    return `${url.origin}${pathname}${url.search}`;
  } catch {
    return src;
  }
}
