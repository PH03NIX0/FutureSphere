interface SignUpButtonProps {
  readonly children: React.ReactNode;
}

export default function SignUpButton({ children }: SignUpButtonProps) {
  return (
    <button className="bg-fs-dark text-white font-body px-[30px] py-[8px] rounded-button h-[35px] flex items-center justify-center transition-transform duration-150 sm:hover:-translate-y-[1px] active:translate-y-0">
      {children}
    </button>
  );
}
