import { getCloudinaryUrl } from "@/lib/cloudinary";

export default function FooterLogo() {
  return (
    <div className="flex items-center gap-[12px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={getCloudinaryUrl("futuresphere/logos/future-sphere-logo")}
        alt=""
        aria-hidden="true"
        className="w-[27px] h-[24px]"
      />
      <span className="font-heading font-medium text-white">FutureSphere</span>
    </div>
  );
}
