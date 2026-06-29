"use client";

import { useState, useEffect, useRef, Fragment } from "react";

interface MetricItem {
  value: number;
  label: string;
  suffix?: string;
}

const metrics: MetricItem[] = [
  { value: 50000, label: "New users per month", suffix: "+" },
  { value: 150000, label: "Active Users", suffix: "+" },
  { value: 98, label: "Satisfied Customers", suffix: "%" },
];

function formatValue(value: number, suffix?: string): string {
  const formatted = Math.round(value).toLocaleString("en-US");
  return suffix ? `${formatted}${suffix}` : formatted;
}

function AnimatedCounter({
  targetValue,
  suffix,
  delay,
  animate,
}: {
  targetValue: number;
  suffix?: string;
  delay: number;
  animate: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const [scale, setScale] = useState(1);
  const hasAnimated = useRef(false);
  const rafRef = useRef<number>(0);
  const settleTimeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!animate || hasAnimated.current) return;
    hasAnimated.current = true;

    const startDelay = setTimeout(() => {
      const duration = 1400;
      const startTime = performance.now();

      const animateTick = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        const jitter = (1 - eased) * targetValue * 0.3;
        const randomOffset = (Math.random() - 0.5) * 2 * jitter;
        const current = targetValue * eased + randomOffset * (1 - eased);

        setDisplayValue(Math.max(0, current));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animateTick);
        } else {
          setDisplayValue(targetValue);
          const t1 = setTimeout(() => setScale(0.98), 0);
          const t2 = setTimeout(() => setScale(1.03), 60);
          const t3 = setTimeout(() => setScale(1), 120);
          settleTimeoutRefs.current = [t1, t2, t3];
        }
      };

      rafRef.current = requestAnimationFrame(animateTick);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(rafRef.current);
      settleTimeoutRefs.current.forEach(clearTimeout);
      settleTimeoutRefs.current = [];
    };
  }, [animate, targetValue, delay]);

  return (
    <span
      style={{
        display: "inline-block",
        transform: `scale(${scale})`,
        transition: "transform 0.12s ease-out",
      }}
    >
      {formatValue(displayValue, suffix)}
    </span>
  );
}

export default function MetricsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, []);

return (
<section className="flex justify-center mt-[80px] w-full px-4 sm:px-6">
       <div className="w-full max-w-[1058px] mx-auto">
        <div
          ref={sectionRef}
          className="w-full bg-transparent sm:bg-white border border-[#EFF0F7] rounded-2xl px-4 sm:px-12 py-4 flex flex-col sm:flex-row items-center"
        >
          {metrics.map((metric, i) => (
            <Fragment key={i}>
              <div className="flex-1 flex flex-col items-center justify-center text-center py-2 sm:py-0">
                <span className="font-heading text-3xl sm:text-[48px] leading-[36px] sm:leading-[58px] font-semibold tracking-[-3.8267px] text-fs-purple">
                  <AnimatedCounter
                    targetValue={metric.value}
                    suffix={metric.suffix}
                    delay={i * 120}
                    animate={shouldAnimate}
                  />
                </span>
                <span className="font-body text-p2 leading-[33px] font-normal tracking-[-0.96px] text-fs-purple mt-1">
                  {metric.label}
                </span>
              </div>
              {i < metrics.length - 1 && (
                <div className="w-full h-px sm:w-px sm:h-[80px] bg-[#EDF0EE] my-2 sm:my-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
