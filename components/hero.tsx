import ContactUsButton from "@/components/contact-us-button";

export default function Hero() {
  return (
    <section className="max-w-[1058px] mx-auto px-6 pt-4 pb-12 flex flex-col items-center gap-4">
      <h1 className="font-heading text-h1 text-fs-dark leading-tight text-center font-normal tracking-[-3.8267px]">
        Revolutionizing the Future with
        <br />
        Cutting-Edge Technology
      </h1>
      <p className="font-body text-p2 text-fs-grey text-center tracking-[-0.75px]">
        Empowering Innovation for a Digital Tomorrow
      </p>
      <div className="flex items-center justify-center gap-[15px]">
         <button className="bg-fs-dark text-white font-body px-[30px] py-[8px] rounded-[20px] h-[35px] flex items-center justify-center transition-all duration-150 hover:-translate-y-[1px] active:translate-y-0">
           Signup
         </button>
         <ContactUsButton />
      </div>
    </section>
  );
}
