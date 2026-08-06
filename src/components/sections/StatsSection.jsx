"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Delivering enterprise & startup solutions",
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Web apps, APIs & mobile platforms",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    sublabel: "Long-term engineering partnerships",
  },
  {
    value: 15,
    suffix: "+",
    label: "Senior Engineers",
    sublabel: "Full-stack & cloud specialists",
  },
];

export const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-background py-16 md:py-24 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Minimal Anthropic Grid: 4 boxy border columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 sm:p-10 border-b sm:border-b-0 border-r-0 sm:border-r border-border last:border-r-0 flex flex-col justify-between bg-card hover:bg-secondary/40 transition-colors duration-200"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 font-mono">
                  {inView ? <CountUp end={item.value} duration={2} /> : "0"}
                  <span className="text-primary">{item.suffix}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-4 border-t border-border/60">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
