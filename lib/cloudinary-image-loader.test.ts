import { describe, expect, it } from "vitest";
import cloudinaryImageLoader from "./cloudinary-image-loader";

describe("cloudinaryImageLoader", () => {
  it("adds responsive width transforms for raster Cloudinary URLs", () => {
    const src =
      "https://res.cloudinary.com/wfqwup4o/image/upload/f_auto,q_auto/futuresphere/images/hero-visual";
    const result = cloudinaryImageLoader({ src, width: 640, quality: 75 });

    expect(result).toContain("/w_640,c_limit,f_auto,q_75/");
    expect(result).not.toContain("f_auto,q_auto/");
  });

  it("does not rasterize SVG Cloudinary URLs", () => {
    const src =
      "https://res.cloudinary.com/wfqwup4o/image/upload/f_svg,q_auto/futuresphere/auth/logo";

    expect(cloudinaryImageLoader({ src, width: 32 })).toBe(src);
  });

  it("passes local and data URLs through unchanged", () => {
    expect(cloudinaryImageLoader({ src: "/icon.svg", width: 32 })).toBe("/icon.svg");
    expect(cloudinaryImageLoader({ src: "data:image/svg+xml,test", width: 32 })).toBe(
      "data:image/svg+xml,test",
    );
  });
});
