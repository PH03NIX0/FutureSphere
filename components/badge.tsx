interface BadgeProps {
  children: React.ReactNode;
  fontSize?: string;
  variant?: "default" | "solid";
}

export default function Badge({ children, fontSize = "14px", variant = "default" }: BadgeProps) {
  const isSolid = variant === "solid";

  return (
    <div
      className="inline-flex w-fit px-[16px] py-[6px] rounded-full items-center justify-center"
      style={{
        height: "var(--badge-height)",
        background: isSolid ? "#C7A0F9" : "var(--badge-gradient)",
        border: isSolid ? "none" : "var(--badge-border)",
      }}
    >
      <span
        className="font-body font-medium text-center"
        style={{
          fontSize,
          color: isSolid ? "#FFFFFF" : "var(--color-fs-purple)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
