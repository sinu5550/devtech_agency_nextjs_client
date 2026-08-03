"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesList } from "@/data/serviceData";
import {
  Code2,
  Palette,
  ShieldCheck,
  CloudLightning,
  ArrowUpRight,
  Check,
} from "lucide-react";

const iconMap = {
  Code2: <Code2 className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  CloudLightning: <CloudLightning className="w-8 h-8" />,
};

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-28">
      {servicesList.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -10 }}
        >
          <div className="relative group rounded-[2.5rem] p-8 md:p-10 bg-card/90 dark:bg-card/60 border-2 border-border/80 dark:border-white/10 hover:border-primary/80 backdrop-blur-3xl shadow-xl hover:shadow-[0_0_45px_rgba(59,130,246,0.3)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
            {" "}
            {/* Top Diagonal Specular Light Reflection */}
            <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] bg-linear-to-br from-white/15 via-transparent to-transparent rotate-45 pointer-events-none group-hover:translate-x-10 transition-transform duration-1000" />
            {/* Dynamic Ambient Sphere Glow inside Card */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
            <div className="relative z-10">
              {/* Top Bar: Glowing Icon Box + Mono Index */}
              <div className="w-fit mb-8">
                <div className="relative group/icon">
                  <div className="absolute -inset-1 bg-primary/40 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="relative p-4 rounded-2xl bg-secondary/80 border border-border/80 dark:border-white/15 text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {iconMap[service.iconName]}
                  </div>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-2xl md:text-4xl font-black text-foreground tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Short Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                {service.shortDesc}
              </p>

              {/* Interactive Capability Pills */}
              <div className="space-y-3 mb-2 pt-6 border-t border-border/60">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground font-bold mb-3">
                  Key Deliverables
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-secondary/40 border border-border/40 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group/pill"
                    >
                      <div className="p-1 rounded-lg bg-primary/20 text-primary shrink-0 group-hover/pill:bg-primary group-hover/pill:text-primary-foreground transition-colors">
                        <Check size={14} />
                      </div>
                      <span className="text-xs md:text-sm font-semibold text-foreground/90">
                        {feature}
                      </span>
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
