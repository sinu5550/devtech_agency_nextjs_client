"use client";
import React from "react";
import { motion } from "framer-motion";
import { processSteps } from "@/data/serviceData";
import { Sparkles } from "lucide-react";

export default function ProcessWorkflow() {
  return (
    <div className="mb-28 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-4">
          <Sparkles size={14} />
          <span>HOW WE EXECUTE</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Our Development{" "}
          <span className="glow-text-blue text-primary">Workflow</span>
        </h2>

        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
          A structured engineering pipeline ensuring high quality, performance,
          and transparent communication.
        </p>
      </div>

      {/* Workflow Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-dark border border-border/50 p-6 md:p-8 rounded-3xl relative hover:border-primary/40 transition-colors"
          >
            <span className="font-mono text-3xl font-black text-primary/30 mb-4 block">
              {step.step}
            </span>

            <h3 className="text-xl font-bold text-foreground mb-2">
              {step.title}
            </h3>

            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
