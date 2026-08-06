"use client";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/serviceData";

export default function ProcessWorkflow() {
  return (
    <section className="mb-20 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block mb-3">
          [ HOW WE EXECUTE ]
        </span>

        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3 leading-tight">
          Our Engineering <span className="text-orange-500">Pipeline</span>
        </h2>

        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
          A structured, transparent development methodology ensuring production-ready code, speed, and security.
        </p>
      </div>

      {/* Workflow Grid Layout — Sharp Boxy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <div className="h-full relative group rounded-none p-6 sm:p-8 bg-card border border-border hover:border-foreground/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
              <div>
                {/* Header: Step Number & Stage Tag */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <span className="font-mono text-base font-bold text-orange-500 bg-background dark:bg-secondary px-3 py-1 border border-border/80">
                    {step.step}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    STAGE 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2.5 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
