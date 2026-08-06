"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  const scrollToFooter = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-none border border-foreground/20 bg-foreground text-background p-8 md:p-14 text-center"
        >
          {/* Grid lines inside dark box */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background tracking-tight leading-[1.1] mb-4">
              Ready to transform your technical infrastructure?
            </h2>

            {/* Subtext */}
            <p className="text-background/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Schedule a free 30-minute architecture review with our senior tech leads. No sales pitch — just honest technical advice.
            </p>

            {/* CTAs - sharp boxy buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={scrollToFooter}
                className="
                  group flex items-center gap-2.5
                  px-7 py-3.5 rounded-none text-sm font-semibold
                  bg-background text-foreground
                  hover:bg-background/90 active:scale-[0.98]
                  transition-all duration-200 shadow-sm
                "
              >
                Start Your Project Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="
                  px-7 py-3.5 rounded-none text-sm font-semibold
                  border border-background/30 text-background
                  hover:border-background hover:bg-background/10
                  transition-all duration-200
                "
              >
                View Our Services
              </button>
            </div>

            {/* Trust indicators */}
            <p className="mt-8 text-xs text-background/50 font-mono uppercase tracking-wider">
              No commitment required · Response within 24 hours · Senior engineers only
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
