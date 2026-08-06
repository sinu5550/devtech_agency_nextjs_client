"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Monitor, Sparkles, TrendingUp, Settings, ChevronRight, Code2 } from "lucide-react";

const services = [
  {
    title: "Web Design & Dev",
    icon: Monitor,
    description: "High-performance interfaces tailored for your business — fast, responsive, and built to convert.",
    tags: ["React", "Next.js", "Tailwind", "Responsive"],
    gradient: "from-emerald-500 to-teal-600",
    badge: "Service 1",
  },
  {
    title: "Branding & Identity",
    icon: Sparkles,
    description: "Stand out with a unique visual identity and professional brand strategy that captures your audience.",
    tags: ["Logo", "Identity", "Brand Strategy"],
    gradient: "from-rose-500 to-pink-600",
    badge: "Service 2",
  },
  {
    title: "SEO & Growth",
    icon: TrendingUp,
    description: "Dominate search results and boost your online presence with expert, data-driven growth strategies.",
    tags: ["Google Ads", "Analytics", "Keywords", "Backlinks"],
    gradient: "from-blue-600 to-indigo-700",
    badge: "Service 3",
  },
  {
    title: "App Development",
    icon: Code2,
    description: "Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-violet-600 to-purple-700",
    badge: "Service 4",
  },
  {
    title: "Maintenance & Support",
    icon: Settings,
    description: "Keep your applications secure, fast, and always up to date with our dedicated support team.",
    tags: ["Security", "Scaling", "Updates"],
    gradient: "from-amber-500 to-orange-600",
    badge: "Service 5",
  },
];

// How much of the previous card peeks above the current one (px)
const PEEK = 48;
// Top offset for the first card (navbar height + breathing room)
const BASE_TOP = 80;

const StackingCard = ({ service, index, total }) => {
  const Icon = service.icon;
  const stickyTop = BASE_TOP + index * PEEK;

  return (
    <div
      className="sticky w-full"
      style={{
        top: stickyTop,
        zIndex: index + 1,
        // Bottom margin drives how long each card stays "in view" before next arrives
        marginBottom: index < total - 1 ? "30vh" : 0,
      }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br ${service.gradient}
          flex flex-col md:flex-row items-stretch gap-0
          shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] border border-white/10`}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-grid-white pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -left-16 -top-16 w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

        {/* LEFT — Content */}
        <div className="relative z-10 flex-[1.4] p-6 md:p-10 lg:p-12 flex flex-col gap-4 justify-center">
          <Badge
            variant="outline"
            className="self-start bg-white/15 border-white/25 text-white font-black uppercase tracking-[0.3em] text-[10px] py-1.5 px-4 backdrop-blur-xl"
          >
            {service.badge}
          </Badge>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.05]">
            {service.title}
          </h2>

          <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-md">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="bg-black/20 text-white/90 border border-white/10 rounded-lg py-1 px-3 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="group mt-2 self-start flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-6 py-3 transition-all duration-300 backdrop-blur-2xl">
            <span className="font-black uppercase tracking-widest text-xs">Explore Service</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT — Icon box */}
        <div className="relative z-10 flex-1 flex items-center justify-center p-6 md:p-10 min-h-[160px] md:min-h-0">
          <div className="relative w-28 h-28 md:w-40 lg:w-48 md:h-40 lg:h-48 bg-white/10 rounded-2xl md:rounded-3xl backdrop-blur-2xl border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden group">
            <div className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              <Icon className="w-12 h-12 md:w-20 lg:w-24 md:h-20 lg:h-24 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/15" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServiceLayout = () => {
  return (
    <section id="services" className="relative bg-background pt-20 md:pt-28 pb-32 px-4 overflow-visible">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-28 text-center">
          <Badge
            variant="outline"
            className="mb-4 px-5 py-1.5 text-primary border-primary/30 bg-primary/5 uppercase tracking-[0.3em] text-[10px] font-black"
          >
            Our Solutions
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-4 leading-[0.95]">
            High-Impact <br />
            <span className="text-primary glow-text-blue">Expertise.</span>
          </h2>
          <div className="h-1.5 w-32 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        </div>

        {/* Stacking cards */}
        <div className="relative">
          {services.map((service, index) => (
            <StackingCard
              key={index}
              service={service}
              index={index}
              total={services.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;
