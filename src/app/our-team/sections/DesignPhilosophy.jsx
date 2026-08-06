"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, CloudLightning } from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

const philosophies = [
  {
    icon: <Sparkles className="w-5 h-5 text-orange-500" />,
    badge: "01 // UI & UX",
    title: "Aesthetic Precision",
    description:
      "Influenced by clean typography and structured grid systems. We believe UI should breathe through crisp whitespace, dark mode consistency, and boxy Minecraft-style rectangular precision.",
  },
  {
    icon: <Layers className="w-5 h-5 text-orange-500" />,
    badge: "02 // Architecture",
    title: "Inner Perfection",
    description:
      "A beautiful UI is nothing without a solid foundation. We focus heavily on secure Next.js App Router architectures, type-safe validation, and zero-trust security standards.",
  },
  {
    icon: <CloudLightning className="w-5 h-5 text-orange-500" />,
    badge: "03 // Scalability",
    title: "Future-Ready Scale",
    description:
      "Always looking ahead. Moving beyond writing code to full DevOps automation, sub-300ms global edge caching, and scalable cloud deployments.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground transition-colors duration-300 relative overflow-hidden border-b border-border">
      {/* Background Micro-Dot Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Outer Dashed Guide Container with GridJoint Nodes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 border border-dashed border-border p-6 md:p-10 bg-background/50 backdrop-blur-[2px]">
        <GridJoint position="top-left" />
        <GridJoint position="top-right" />
        <GridJoint position="bottom-left" />
        <GridJoint position="bottom-right" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block">
              [ OUR CORE MINDSET ]
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              Beyond Just <br className="hidden sm:inline" />
              <span className="text-orange-500">Code.</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-normal">
              Our philosophy is simple: Architect digital experiences that are
              visually striking on the outside and structurally unbreakable on
              the inside.
            </p>

            <div className="pt-3 border-t border-dashed border-border font-mono text-xs text-muted-foreground">
              // Engineering scalable solutions built strictly for modern industrial standards.
            </div>
          </div>

          {/* Right Cards Stack / Grid (Sharp boxy corners rounded-none) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                className={`p-6 sm:p-8 bg-card border border-border rounded-none shadow-sm hover:border-foreground/40 transition-all duration-300 flex flex-col justify-between ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                    <div className="w-10 h-10 border border-border bg-secondary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-muted-foreground">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
