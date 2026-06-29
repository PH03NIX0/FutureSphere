export default function FooterLogo() {
  return (
    <div className="flex items-center gap-[12px]">
      <img
        src="/icons/future-sphere-logo.svg"
        alt=""
        aria-hidden="true"
        className="w-[27px] h-[24px]"
      />
      <span className="font-heading font-medium text-white">FutureSphere</span>
    </div>
  );
}
