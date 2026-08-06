"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Building digital products since 2012",
    hoverColor: "from-blue-500/15",
    accent: "#3b82f6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Across industries worldwide",
    hoverColor: "from-violet-500/15",
    accent: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Consistently rated 5 stars",
    hoverColor: "from-emerald-500/15",
    accent: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    value: 15,
    suffix: "+",
    label: "Expert Engineers",
    sublabel: "Senior devs & designers",
    hoverColor: "from-rose-500/15",
    accent: "#f43f5e",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const StatCard = ({ item, i, inView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <div
        className="relative p-5 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-border
          transition-all duration-500
          hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.35)]
          overflow-hidden h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Hover gradient wash */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.hoverColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10 flex flex-col gap-3" style={{ transform: "translateZ(30px)" }}>
          {/* Top row: icon badge + accent bar */}
          <div className="flex items-center justify-between">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${item.accent}22`, color: item.accent }}
            >
              {item.icon}
            </div>
            <div
              className="h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-14"
              style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
            />
          </div>

          {/* Number */}
          <div className="flex items-end gap-0.5 leading-none mt-1">
            <span
              className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground transition-transform duration-300 group-hover:scale-105 origin-left inline-block"
            >
              {inView ? <CountUp end={item.value} duration={2.2} /> : "0"}
            </span>
            <span
              className="text-xl sm:text-2xl font-black mb-0.5 transition-colors duration-300"
              style={{ color: item.accent }}
            >
              {item.suffix || "+"}
            </span>
          </div>

          {/* Label + sublabel */}
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.sublabel}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className="bg-background py-14 md:py-16 select-none overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">By the numbers</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground">
            Results that speak for themselves
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {stats.map((item, i) => (
            <StatCard key={i} item={item} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
};

