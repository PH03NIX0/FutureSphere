interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`w-[2px] h-[120px] sm:h-[201px] bg-[#EDF0EE] shrink-0 ${className}`} />
  );
}