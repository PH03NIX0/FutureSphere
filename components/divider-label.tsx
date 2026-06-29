export default function DividerLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[12px] sm:gap-[16px] w-full">
      <div className="flex-1 h-[2px] bg-[#EDF0EE]" />
      <span className="font-body text-s sm:text-[16px] text-fs-grey">{children}</span>
      <div className="flex-1 h-[2px] bg-[#EDF0EE]" />
    </div>
  );
}
