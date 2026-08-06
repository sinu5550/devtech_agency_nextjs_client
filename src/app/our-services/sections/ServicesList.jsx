"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesList } from "@/data/serviceData";
import {
  Code2,
  Palette,
  ShieldCheck,
  CloudLightning,
  Check,
} from "lucide-react";

const iconMap = {
  Code2: <Code2 className="w-6 h-6 text-orange-500" />,
  Palette: <Palette className="w-6 h-6 text-orange-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-orange-500" />,
  CloudLightning: <CloudLightning className="w-6 h-6 text-orange-500" />,
};

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
      {servicesList.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.1 }}
        >
          <div className="h-full relative group rounded-none p-6 sm:p-8 md:p-10 bg-card border border-border hover:border-foreground/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="relative z-10 flex flex-col h-full">
              {/* Top Bar: Icon Box + Index */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <div className="w-12 h-12 border border-border/80 bg-background dark:bg-secondary flex items-center justify-center">
                  {iconMap[service.iconName]}
                </div>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <div className="grow">
                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-6 border-t border-border">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">
                  // Key Deliverables
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2 bg-background dark:bg-secondary border border-border/80 font-mono text-xs text-foreground/90 rounded-none shadow-2xs"
                    >
                      <span className="text-orange-500 font-bold">✓</span>
                      <span className="font-medium text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
