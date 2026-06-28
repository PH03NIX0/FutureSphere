interface ViewAllLinkProps {
  href?: string;
}

export default function ViewAllLink({ href = "#" }: ViewAllLinkProps) {
  return (
    <a href={href} className="group flex items-center gap-[8px]">
      <span className="text-fs-dark font-body text-[16px] font-normal">View All</span>
      <svg className="transition-transform duration-200 group-hover:translate-x-[4px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}