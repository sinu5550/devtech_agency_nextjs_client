"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { teamData } from "@/data/teamData";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Header() {
  const [activeTooltipId, setActiveTooltipId] = useState(null);
  const avatarStackRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarStackRef.current &&
        !avatarStackRef.current.contains(event.target)
      ) {
        setActiveTooltipId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-between items-center bg-background px-4 sm:px-6 pt-24 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      {/* ── Line Grid Background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.5 0.05 264 / 0.2) 1px, transparent 1px), linear-gradient(90deg, oklch(0.5 0.05 264 / 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Top-Left Lighting Glow ── */}
      <div
        className="absolute -top-40 -left-40 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] pointer-events-none rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.22 54 / 0.45) 0%, oklch(0.65 0.2 54 / 0.15) 45%, transparent 70%)",
          filter: "blur(70px)",
          animationDuration: "3.5s",
        }}
      />

      {/* ── Bottom-Right Lighting Glow ── */}
      <div
        className="absolute -bottom-40 -right-40 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] pointer-events-none rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.22 54 / 0.4) 0%, oklch(0.56 0.22 264 / 0.15) 50%, transparent 70%)",
          filter: "blur(70px)",
          animationDuration: "4.5s",
        }}
      />

      <div className="w-full" />

      {/* ── Main Center Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6 my-auto">
        {/* Main Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground dark:text-amber-100 tracking-tight leading-[1.15] sm:leading-[1.1]"
        >
          We design and{" "}
          <em className="font-serif italic font-normal text-orange-500 not-italic">
            deliver
          </em>{" "}
          <br className="hidden sm:block" />
          secure, scalable IT solutions <br className="hidden sm:block" />
          that just{" "}
          <span className="inline-block bg-orange-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 font-bold tracking-tight shadow-md">
            work.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="max-w-xl text-xs sm:text-base text-muted-foreground leading-relaxed font-normal px-2"
        >
          From high-performance web platforms to enterprise mobile systems —
          engineered with precision, built to scale.
        </motion.p>

        {/* ── Bottom Action Row: Team Avatars Cluster + Buttons ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-3 sm:mt-2 w-full sm:w-auto"
        >
          {/* Team Avatars Cluster Only */}
          <div ref={avatarStackRef} className="flex -space-x-2.5 shrink-0">
            {teamData.slice(0, 4).map((member) => {
              const isTooltipActive = activeTooltipId === member.id;
              return (
                <div
                  key={member.id}
                  className="group relative"
                  onClick={() => {
                    if (
                      typeof window !== "undefined" &&
                      window.innerWidth < 768
                    ) {
                      setActiveTooltipId(isTooltipActive ? null : member.id);
                    }
                  }}
                >
                  {/* Tooltip Card (Pure hover on desktop, tap toggle on mobile) */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 flex-col items-center z-50 pointer-events-none transition-all duration-200 ${
                      isTooltipActive
                        ? "flex md:hidden"
                        : "hidden group-hover:flex"
                    }`}
                  >
                    <div className="bg-zinc-900 border border-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg shadow-xl text-center whitespace-nowrap min-w-[120px]">
                      <p className="text-xs font-bold leading-tight text-white">
                        {member.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                        {member.position}
                      </p>
                      {member.role && (
                        <p className="text-[10px] text-zinc-400 font-mono mt-0.5">
                          {member.role}
                        </p>
                      )}
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-2.5 h-2.5 bg-zinc-900 border-r border-b border-zinc-700 transform rotate-45 -mt-1.5" />
                  </div>

                  {/* Avatar Circle */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-background overflow-hidden relative shadow-sm group-hover:scale-115 group-hover:z-30 transition-transform duration-200 cursor-pointer">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {/* Primary CTA */}
            <button
              onClick={() => scrollTo("footer")}
              className="
                w-full sm:w-auto group flex items-center justify-center gap-2
                px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider
                bg-foreground text-background
                hover:bg-foreground/90 active:scale-[0.98]
                transition-all duration-200 shadow-md cursor-pointer rounded-none
              "
            >
              Get Started Now
              <span className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollTo("why-choose")}
              className="
                w-full sm:w-auto group flex items-center justify-center gap-1.5
                px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider
                bg-card border border-border text-foreground
                hover:border-orange-500 hover:text-orange-500 hover:bg-secondary
                active:scale-[0.98] transition-all duration-200 cursor-pointer rounded-none
              "
            >
              Explore Solutions
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
