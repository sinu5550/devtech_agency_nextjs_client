"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, CloudLightning } from "lucide-react";

const philosophies = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Aesthetic Precision",
    description:
      "Influenced by clean typography like Geist Mono and structured themes. We believe UI should breathe through perfect whitespace and thoughtful Glassmorphism.",
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Inner Perfection",
    description:
      "A beautiful UI is nothing without a solid foundation. We focus heavily on secure architectures, Zod-based validations, and robust Role-Based Access Control (RBAC).",
  },
  {
    icon: <CloudLightning className="w-8 h-8 text-primary" />,
    title: "Future-Ready Scale",
    description:
      "Always looking ahead. Moving beyond just writing code to understanding the full DevOps lifecycle, containerization, and scalable cloud deployments.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300 bg-digital-floor relative">
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-extrabold mb-6 glow-text-blue">
              Beyond Just Code.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our philosophy is simple: Architect digital experiences that are
              visually striking on the outside and structurally unbreakable on
              the inside.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just build websites; we engineer scalable solutions
              tailored for modern standards.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`glass-dark p-8 rounded-3xl card-shadow ${
                  index === 2 ? "sm:col-span-2 sm:w-1/2 sm:mx-auto" : ""
                }`}
              >
                <div className="mb-6 p-4 bg-secondary inline-block rounded-2xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
