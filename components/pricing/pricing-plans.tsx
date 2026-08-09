import Badge from "@/components/ui/badge";

const commonFeatures = [
  "Responsive Website Design",
  "Basic SEO Optimization",
  "24/7 Customer Support",
] as const;

const additionalFeatures = [
  "Unlimited Bandwidth",
  "Custom Domain",
  "Secure SSL Certificate",
  "Priority Customer Support",
  "Advanced Analytics and Reporting",
  "E-commerce Integration",
] as const;

const plans = [
  {
    name: "Basic Plan",
    price: "$0",
    priceTone: "dark" as const,
    ctaVariant: "outline" as const,
    recommended: false,
    includedAdditional: ["Unlimited Bandwidth", "Custom Domain", "Secure SSL Certificate"],
  },
  {
    name: "Business Plan",
    price: "$19",
    priceTone: "purple" as const,
    ctaVariant: "solid" as const,
    recommended: true,
    includedAdditional: [
      "Unlimited Bandwidth",
      "Custom Domain",
      "Secure SSL Certificate",
      "Priority Customer Support",
      "Advanced Analytics and Reporting",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$29",
    priceTone: "dark" as const,
    ctaVariant: "outline" as const,
    recommended: false,
    includedAdditional: [...additionalFeatures],
  },
] as const;

function CheckIcon({ muted = false }: { readonly muted?: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M3 7.5L6.2 10.5L12 3.5"
        stroke={muted ? "#7f56d9" : "#1b152b"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4L11 11M11 4L4 11" stroke="#c4c4c4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function PricingPlans() {
  return (
    <section className="fs-container px-4 sm:px-6 flex w-full flex-col items-center gap-[50px]">
      <div className="flex flex-col items-center gap-[15px] w-full max-w-[935px]">
        <h1 className="font-heading text-h2 leading-[29px] font-medium text-center text-fs-dark sm:text-[48px] sm:leading-[58px] sm:tracking-[-3.8267px] sm:font-normal">
          Transparent Pricing for Exceptional Value
        </h1>
        <p className="font-body text-center text-fs-grey max-w-[930px] text-[16px] leading-[19px] sm:leading-[24px]">
          Find the perfect plan for your needs with our straightforward pricing options. Discover competitive rates and unlock the exceptional value we offer for our top-notch services.
        </p>
      </div>

      <div className="grid w-full max-w-[1146px] grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-4 lg:items-start">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="relative flex flex-col items-center gap-[30px] rounded-[8px] border border-fs-border bg-white px-8 py-[30px] sm:px-[60px]"
          >
            {plan.recommended ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Recommended</Badge>
              </div>
            ) : null}

            <h2 className="font-heading text-[24px] font-medium text-fs-dark text-center">{plan.name}</h2>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-end gap-1">
                <span
                  className={`font-heading text-[48px] tracking-[-3.8267px] leading-none ${
                    plan.priceTone === "purple" ? "text-fs-purple" : "text-fs-dark"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="font-heading pb-2 text-[20px] tracking-[-0.96px] text-fs-grey">/month</span>
              </div>
              <p className="font-heading text-[16px] tracking-[-0.96px] text-fs-grey">Great fit for the startups</p>
            </div>

            {plan.ctaVariant === "solid" ? (
              <a
                href="/contact"
                className="font-body bg-fs-purple text-white px-[30px] py-[8px] rounded-button h-[35px] flex items-center justify-center transition-transform duration-150 sm:hover:-translate-y-[1px]"
              >
                Get Started
              </a>
            ) : (
              <a
                href="/contact"
                className="font-body border border-fs-purple text-fs-purple px-[30px] py-[8px] rounded-button h-[35px] flex items-center justify-center transition-transform duration-150 sm:hover:-translate-y-[1px]"
              >
                Get Started
              </a>
            )}

            <div className="flex w-full max-w-[246px] flex-col gap-[15px]">
              <div className="flex flex-col gap-[10px]">
                {commonFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between rounded-[4px] border border-fs-border bg-[#f6f1fd] py-[7px] pl-2 pr-2.5"
                  >
                    <span className="font-heading text-[12px] text-fs-purple">{feature}</span>
                    <CheckIcon muted />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-[15px]">
                <p className="font-heading text-center text-[12px] tracking-[-0.96px] text-fs-grey">Features</p>
                <ul className="flex flex-col gap-2.5">
                  {additionalFeatures.map((feature) => {
                    const included = (plan.includedAdditional as readonly string[]).includes(feature);
                    return (
                      <li key={feature} className="flex items-start gap-[5px]">
                        {included ? <CheckIcon /> : <CrossIcon />}
                        <span className="font-heading text-[12px] text-fs-dark">{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
