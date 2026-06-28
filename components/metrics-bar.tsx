import React from "react";

const metrics = [
  { value: "50K", label: "New users per month" },
  { value: "150K", label: "Active Users" },
  { value: "98%", label: "Satisfied Customers" },
];

export default function MetricsBar() {
  return (
    <section className="flex justify-center">
      <div className="w-[931px] h-[123px] bg-white border border-[#EFF0F7] rounded-2xl px-12 py-4 flex items-center">
        {metrics.map((metric, i) => (
          <React.Fragment key={i}>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <span className="font-heading text-[48px] leading-[58px] font-semibold tracking-[-3.8267px] text-fs-purple">
                {metric.value}
              </span>
              <span className="font-body text-p2 leading-[33px] font-normal tracking-[-0.96px] text-fs-purple mt-1">
                {metric.label}
              </span>
            </div>
            {i < metrics.length - 1 && (
              <div className="w-px bg-[#EDF0EE] h-[80px]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}