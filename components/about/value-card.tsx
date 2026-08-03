interface ValueCardProps {
  readonly title: string;
  readonly description: string;
  readonly iconSrc: string;
}

export default function ValueCard({ title, description, iconSrc }: ValueCardProps) {
  return (
    <div className="feature-card flex flex-col gap-4 items-center justify-center text-center p-5">
      <img src={iconSrc} alt="" className="w-9 h-9 shrink-0" aria-hidden="true" />
      <h3 className="font-heading text-p1 font-semibold text-fs-dark">
        {title}
      </h3>

      <p className="font-body text-p2 text-fs-grey max-w-[231px]">
        {description}
      </p>
    </div>
  );
}
