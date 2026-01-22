"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const StatCard = ({ item, i, inView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      key={i}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
    >
      {/* Card Container */}
      <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/5 transition-all duration-700 hover:border-primary/20 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] overflow-hidden">
        {/* Internal Hover Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.hoverColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        <div className="relative z-10 flex flex-col items-center" style={{ transform: "translateZ(50px)" }}>
          <span className="text-[100px] font-black text-white/[0.02] absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none transition-transform duration-700 group-hover:scale-125 group-hover:text-primary/10">
            {item.value}
          </span>

          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter transition-all duration-500 group-hover:text-primary group-hover:scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            {inView ? <CountUp end={item.value} duration={2.5} /> : "0"}{item.suffix || "+"}
          </h3>

          <p className="mt-6 text-xs font-bold text-slate-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500 text-center">
            {item.label}
          </p>
          
          {/* Decorative Bottom Bar */}
          <div className="h-1.5 w-8 bg-primary/20 rounded-full mt-8 transition-all duration-500 group-hover:w-16 group-hover:bg-primary group-hover:glow-blue" />
        </div>
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 12, label: "Years of Excellence", hoverColor: "from-blue-600/10" },
    { value: 250, label: "Successful Projects", hoverColor: "from-purple-600/10" },
    { value: 98, label: "Satisfaction Rate", suffix: "%", hoverColor: "from-emerald-600/10" },
    { value: 15, label: "Expert Engineers", hoverColor: "from-rose-600/10" },
  ];

  return (
    <div ref={ref} className="bg-[#030617] py-20 md:py-24 select-none overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <StatCard key={i} item={item} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
};
