interface SliderNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function SliderNavigation({ onPrevious, onNext }: SliderNavigationProps) {
  return (
    <div className="flex items-center justify-end gap-[15px]">
      <button
        type="button"
        onClick={onPrevious}
        className="w-10 h-10 sm:w-[48px] sm:h-[48px] rounded-full bg-white border border-fs-purple flex items-center justify-center transition-all duration-150 hover:-translate-y-[1px] active:translate-y-0"
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[32px] sm:h-[32px]">
          <path d="M24 16H6M6 16L13 8M6 16L13 24" stroke="#7F56D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        className="w-10 h-10 sm:w-[48px] sm:h-[48px] rounded-full bg-fs-purple flex items-center justify-center transition-all duration-150 hover:-translate-y-[1px] active:translate-y-0"
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[32px] sm:h-[32px]">
          <path d="M8 16H26M26 16L19 8M26 16L19 24" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
