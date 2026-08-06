"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Sparkles, TrendingUp, Code2, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "web-dev",
    title: "Web Design & Development",
    subtitle: "Engineered for speed, SEO & conversion",
    description:
      "We design and build ultra-fast, responsive web applications using Next.js, React, and Tailwind CSS. Built to scale effortlessly as your business grows.",
    quote:
      "Our web engineering transformed modern enterprise web presence into lightning-fast digital storefronts with 99.9% uptime.",
    icon: Monitor,
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "REST/GraphQL"],
    color: "bg-orange-600 text-white",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform Mobility Solutions",
    description:
      "Build fluid iOS and Android mobile apps with React Native & Flutter. Seamless hardware integrations, offline synchronization, and intuitive UX.",
    quote:
      "Delivering high-concurrency mobile products with responsive touch controls, push notifications, and app store deployment readiness.",
    icon: Code2,
    tags: ["React Native", "Flutter", "iOS", "Android", "Mobile Architecture"],
    color: "bg-indigo-600 text-white",
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    subtitle: "Stand out with a distinct brand identity",
    description:
      "Crafting memorable brand identities, logo systems, typography, design systems, and visual guidelines that resonate with your target market.",
    quote:
      "Establishing strong visual authority and design consistency across all digital and print customer touchpoints.",
    icon: Sparkles,
    tags: ["Brand Strategy", "Logo Design", "Design System", "UI/UX Kits"],
    color: "bg-zinc-900 text-white",
  },
  {
    id: "seo-growth",
    title: "SEO & Digital Growth",
    subtitle: "Dominate search rankings & scale traffic",
    description:
      "Technical SEO auditing, content architecture, keyword strategy, and data-driven performance marketing to drive sustainable organic reach.",
    quote:
      "Data-backed optimization strategies that increased organic search visibility by over 300% within the first two quarters.",
    icon: TrendingUp,
    tags: ["Technical SEO", "Google Ads", "Analytics", "Growth Strategy"],
    color: "bg-amber-600 text-white",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    subtitle: "24/7 dedicated support & infrastructure monitoring",
    description:
      "Proactive security patching, continuous performance optimization, zero-downtime database backups, and rapid SLA support.",
    quote:
      "Keeping your digital systems secure, updated, and performing at peak capacity so you can focus entirely on growth.",
    icon: Settings,
    tags: ["24/7 Monitoring", "Security Audits", "Database Backups", "SLA Support"],
    color: "bg-emerald-700 text-white",
  },
];

const ServiceLayout = () => {
  // 1st item (index 0) is open by default
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-background py-20 md:py-28 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 border-b border-border pb-6"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Services We Offer
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs md:text-right leading-relaxed">
              Hover over any service strip below to explore details.
            </p>
          </div>
        </motion.div>

        {/* ── Desktop Horizontal Accordion Showcase (Always Color Visible) ── */}
        <div className="hidden lg:flex h-[460px] gap-2.5 w-full">
          {services.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                layout
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  relative h-full cursor-pointer overflow-hidden border border-white/20 rounded-none shadow-md
                  transition-all duration-300 select-none ${item.color}
                  ${isActive ? "flex-[4.5]" : "flex-1 hover:opacity-95"}
                `}
              >
                {/* ── EXPANDED CARD VIEW ── */}
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="p-8 md:p-10 flex flex-col justify-between h-full relative z-10"
                  >
                    <div>
                      {/* Icon */}
                      <div className="w-12 h-12 border border-white/30 bg-white/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Header */}
                      <span className="text-xs font-mono text-white/80 uppercase tracking-wider block mb-1">
                        {item.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                        {item.title}
                      </h3>

                      {/* Quote / Highlight */}
                      <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium mb-6 border-l-2 border-white/40 pl-4 py-1">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags & Action */}
                    <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono border border-white/25 px-2.5 py-1 bg-white/10 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline underline-offset-4"
                      >
                        Explore Service
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* ── COLLAPSED VERTICAL STRIP VIEW (Always Color Visible) ── */
                  <div className="h-full flex flex-col items-center justify-between py-8 px-3 text-center">
                    {/* Top Icon */}
                    <div className="w-10 h-10 border border-white/30 flex items-center justify-center bg-white/10">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Vertical rotated text label */}
                    <div className="flex-1 flex items-center justify-center my-4">
                      <span className="writing-mode-vertical text-xs font-bold uppercase tracking-widest text-white/90 whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>

                    {/* Bottom arrow */}
                    <ArrowUpRight className="w-4 h-4 text-white/70" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile / Tablet Accordion Layout ── */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((item, index) => {
            const isActive = activeIndex === index;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`border border-white/20 rounded-none overflow-hidden transition-colors ${item.color}`}
              >
                {/* Header button */}
                <button
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-white/30 bg-white/10 flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-bold tracking-tight text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-white">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {/* Content */}
                {isActive && (
                  <div className="px-5 pb-6 pt-0 border-t border-white/20 text-white space-y-4">
                    <p className="text-xs font-mono text-white/70 uppercase pt-4">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono border border-white/20 px-2 py-0.5 bg-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceLayout;
