"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, CloudLightning, ArrowUpRight } from "lucide-react";

const philosophies = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    badge: "01 // UI & UX",
    title: "Aesthetic Precision",
    description:
      "Influenced by clean typography like Geist Mono and structured themes. We believe UI should breathe through perfect whitespace and thoughtful Glassmorphism.",
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    badge: "02 // Architecture",
    title: "Inner Perfection",
    description:
      "A beautiful UI is nothing without a solid foundation. We focus heavily on secure architectures, Zod-based validations, and robust Role-Based Access Control (RBAC).",
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-primary" />,
    badge: "03 // Scalability",
    title: "Future-Ready Scale",
    description:
      "Always looking ahead. Moving beyond just writing code to understanding the full DevOps lifecycle, containerization, and scalable cloud deployments.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Header / Text Content */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-mono text-xs uppercase tracking-[0.25em] font-bold">
                Our Core Mindset
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
              Beyond Just <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-foreground/60 bg-clip-text text-transparent">
                Code.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Our philosophy is simple: Architect digital experiences that are
              visually striking on the outside and structurally unbreakable on
              the inside.
            </p>

            <div className="pt-2 border-t border-border/40">
              <p className="text-sm text-muted-foreground/80 leading-relaxed font-mono">
                // Engineering scalable solutions tailored strictly for modern
                industrial standards.
              </p>
            </div>
          </div>

          {/* Right Cards Stack / Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={`group relative p-8 rounded-3xl bg-background/40 hover:bg-background/60 backdrop-blur-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden ${
                  index === 2 ? "md:col-span-2" : ""
                }`}
              >
                {/* Hover Glow Light inside Card */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-2xl bg-secondary/60 border border-border/40 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Decorative Line on Hover */}
                <div className="mt-8 h-[2px] w-full bg-border/30 group-hover:bg-primary/40 transition-colors duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
