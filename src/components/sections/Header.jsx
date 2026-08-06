"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Header() {
  const router = useRouter();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background px-4 pt-24 pb-16"
    >
      {/* ── Background: dot grid ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.08]"
        >
          Engineering Digital Products{" "}
          <span
            className="text-gradient inline-block"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.56 0.22 264), oklch(0.72 0.18 54))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            with Precision
          </span>{" "}
          &amp; Scale.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-normal"
        >
          We partner with startups and enterprises to build scalable web
          applications, mobile products, and digital systems — engineered for
          performance, designed to impress.
        </motion.p>

        {/* CTA group - Sharp corners */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex flex-col sm:flex-row items-center gap-3 mt-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo("footer")}
            className="
              group flex items-center gap-2.5
              px-7 py-3.5 text-sm font-semibold rounded-none
              bg-foreground text-background
              hover:bg-foreground/90 active:scale-[0.98]
              transition-all duration-200 shadow-sm
            "
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollTo("services")}
            className="
              group flex items-center gap-2
              px-7 py-3.5 text-sm font-semibold rounded-none
              bg-card border border-border text-foreground
              hover:border-foreground/30 hover:bg-secondary
              active:scale-[0.98] transition-all duration-200
            "
          >
            View Our Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-muted-foreground" />
          </button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex items-center gap-3 mt-6 text-xs text-muted-foreground border-t border-border pt-6 w-full justify-center"
        >
          <span>
            Trusted by <strong className="text-foreground font-semibold">50+</strong> businesses
          </span>
          <span className="text-border">·</span>
          <span>
            <strong className="text-foreground font-semibold">12+</strong> years of excellence
          </span>
        </motion.div>
      </div>
    </section>
  );
}

