export function getCloudinaryUrl(
  publicId: string,
  transformations?: Record<string, string | number | boolean>
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    throw new Error("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not defined");
  }

  let url = `https://res.cloudinary.com/${cloudName}/image/upload`;

  if (transformations && Object.keys(transformations).length > 0) {
    const alias: Record<string, string> = {
      fetch_format: "f",
      quality: "q",
      width: "w",
      height: "h",
      crop: "c",
      gravity: "g",
      effect: "e",
      radius: "r",
      opacity: "o",
      border: "bo",
      background: "b",
      angle: "a",
      flags: "fl",
    };

    const transforms = Object.entries(transformations)
      .map(([key, value]) => `${alias[key] || key}_${value}`)
      .join(",");
    url += `/${transforms}`;
  }

  const encodedPublicId = publicId.split("/").map(encodeURIComponent).join("/");
  return `${url}/${encodedPublicId}`;
}
