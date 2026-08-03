"use client";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/serviceData";
import { Sparkles, ArrowRight } from "lucide-react";

export default function ProcessWorkflow() {
  return (
    <section className="mb-28 relative">
      {/* Background Micro Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-4 shadow-sm">
          <Sparkles size={14} />
          <span>HOW WE EXECUTE</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
          Our Engineering{" "}
          <span className="glow-text-blue text-primary">Pipeline</span>
        </h2>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          A structured, transparent development methodology ensuring
          production-ready code, speed, and security.
        </p>
      </div>

      {/* Workflow Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className=" h-full relative group rounded-[2.5rem] p-8 md:p-9 bg-card/90 dark:bg-card/60 border-2 border-border/80 dark:border-white/10 hover:border-primary/80 backdrop-blur-3xl shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
              {/* Glossy Specular Reflection */}
              <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/15 via-transparent to-transparent rotate-45 pointer-events-none group-hover:translate-x-10 transition-transform duration-1000" />

              {/* Dynamic Ambient Glow Sphere inside Card */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/15 rounded-full blur-2xl group-hover:bg-primary/35 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Glowing Step Number Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="relative group/number">
                    <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
                    <span className="relative font-mono text-xl font-black text-primary group-hover:bg-primary group-hover:text-white px-4 py-2 rounded-2xl bg-primary/10 border border-primary/30 shadow-inner inline-block">
                      {step.step}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-bold px-3 py-1 rounded-full bg-secondary/80 border border-border">
                    STAGE 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
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
