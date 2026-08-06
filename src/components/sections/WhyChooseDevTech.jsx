"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Layers, DollarSign, ArrowRight } from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

const pillars = [
  {
    id: "01",
    title: "All-in-One Tech Integration",
    headline: "Unified architecture replacing fragmented agency vendors",
    description:
      "Instead of juggling separate UI designers, backend devs, and SEO agencies, DevTech provides a single cohesive engineering team. One partner, end-to-end execution, and continuous alignment.",
    metric: "100%",
    metricLabel: "Unified Team Ownership",
    icon: Layers,
    highlights: [
      "Single point of communication & accountability",
      "Full-stack alignment from UI design to cloud DevOps",
      "Seamless API integrations and microservice setups",
    ],
  },
  {
    id: "02",
    title: "Unmatched Speed & Performance",
    headline: "Sub-second load times & optimal Core Web Vitals",
    description:
      "We build with Next.js App Router, SSR caching, and global edge delivery to ensure lightning-fast page transitions and top Google Lighthouse scores across all devices.",
    metric: "<300ms",
    metricLabel: "Average Page Load Time",
    icon: Zap,
    highlights: [
      "Target 95+ Lighthouse performance scores",
      "Edge-cached static and server-rendered assets",
      "Optimized bundle sizes and image compression",
    ],
  },
  {
    id: "03",
    title: "Zero-Trust Security Standard",
    headline: "Built-in protection for your data and customers",
    description:
      "Security isn't an afterthought. Every line of code adheres to OWASP security guidelines with JWT authentication, encrypted environment variables, and automated vulnerability scanning.",
    metric: "99.99%",
    metricLabel: "System Reliability & Uptime",
    icon: ShieldCheck,
    highlights: [
      "OWASP top-10 security compliance",
      "Automated rate-limiting and DDoS mitigation",
      "Encrypted data storage and secure API gateways",
    ],
  },
  {
    id: "04",
    title: "Reduced Complexity & Cost",
    headline: "Predictable engineering costs without technical debt",
    description:
      "Clean, self-documenting code built with modular React components and TypeScript ensures your internal team can easily maintain or extend the system in the future.",
    metric: "40%",
    metricLabel: "Cost Reduction in Maintenance",
    icon: DollarSign,
    highlights: [
      "TypeScript type-safety reducing runtime bugs by 80%",
      "Modular, reusable UI design system components",
      "Transparent sprint pricing without hidden fees",
    ],
  },
];

const WhyChooseDevTech = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];
  const Icon = activePillar.icon;

  return (
    <section id="why-choose" className="bg-background py-20 md:py-28 px-4 border-b border-border relative overflow-hidden">
      {/* ── Micro-Dot Grid Background ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* ── Outer Container with Continuous Vertical Side Guide Lines ── */}
      <div className="max-w-6xl mx-auto relative z-10 border-x border-dashed border-border/80 p-6 md:p-8">
        
        {/* Section Intersection Joint Nodes ONLY on Main Side Guide Lines */}
        <GridJoint position="top-left" />
        <GridJoint position="top-right" />
        <GridJoint position="bottom-left" />
        <GridJoint position="bottom-right" />

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-dashed border-border/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Why Choose DevTech
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
              Engineering excellence, architectural security, and performance built directly into your digital foundation.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary hover:underline underline-offset-4"
          >
            Schedule Architecture Review
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* ── Split Showcase Container ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">

          {/* Left: Interactive 4 Pillar Tabs */}
          <div className="flex flex-col border border-border bg-card">
            {pillars.map((pillar, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`
                    p-6 text-left border-b border-border last:border-b-0 transition-all duration-200 cursor-pointer relative rounded-none
                    ${isActive ? "bg-secondary/80 border-l-4 border-l-primary" : "hover:bg-secondary/40"}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary">
                      {pillar.id}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {pillar.metric}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold tracking-tight mt-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {pillar.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border p-8 md:p-10 flex flex-col justify-between rounded-none relative"
            >
              <div>
                {/* Top metric badge */}
                <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-border bg-secondary/50 flex items-center justify-center text-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary uppercase">
                      Pillar {activePillar.id}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono text-foreground block">
                      {activePillar.metric}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">
                      {activePillar.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Headline & Description */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-3 leading-snug">
                  {activePillar.headline}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {activePillar.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-border">
                  {activePillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/80 font-medium">
                      <span className="text-primary font-mono text-xs shrink-0 mt-0.5">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-8 pt-4 border-t border-border flex justify-end">
                <button
                  onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                >
                  Learn More About {activePillar.title}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseDevTech;
