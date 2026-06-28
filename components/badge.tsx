interface BadgeProps {
  children: React.ReactNode;
  fontSize?: string;
}

export default function Badge({ children, fontSize = "14px" }: BadgeProps) {
  return (
    <div
      className="inline-flex w-fit px-[16px] py-[6px] rounded-full items-center justify-center"
      style={{
        height: "var(--badge-height)",
        background: "var(--badge-gradient)",
        border: "var(--badge-border)",
      }}
    >
      <span
        className="font-body font-medium text-fs-purple text-center"
        style={{ fontSize }}
      >
        {children}
      </span>
    </div>
  );
}
