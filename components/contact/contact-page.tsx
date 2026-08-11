import dynamic from "next/dynamic";
import ContactFormSection from "@/components/contact/contact-form-section";
import ContactOffices from "@/components/contact/contact-offices";

const FaqSection = dynamic(() => import("@/components/contact/faq-section"));

/** Server shell: form hydrates eagerly; FAQ is below-fold and code-split. */
export default function ContactPage() {
  return (
    <>
      <section className="fs-container mx-auto flex flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h1 className="font-heading text-[36px] font-normal leading-[44px] text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px]">
          Contact Us
        </h1>
        <p className="max-w-[760px] font-body text-[16px] leading-[22px] text-fs-grey">
          At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.
        </p>
      </section>
      <ContactFormSection />
      <div className="flex w-full flex-col items-center">
        <ContactOffices />
        <div id="faqs" className="w-full">
          <FaqSection />
        </div>
      </div>
    </>
  );
}
