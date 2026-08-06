"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, PlayCircle, ArrowUpRight } from "lucide-react";

const SuccessCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        group relative flex flex-col justify-between p-6 md:p-8
        bg-card border border-border rounded-none
        transition-all duration-200 cursor-pointer
        hover:border-foreground/40 hover:bg-secondary/30
        ${item.colSpan || ""}
      `}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 rounded-none border border-border flex items-center justify-center shrink-0 text-foreground bg-secondary/50">
            {React.cloneElement(item.icon, { className: "w-5 h-5" })}
          </div>
          <div className="flex items-center gap-2">
            {item.stat && (
              <span className="font-mono text-xs font-semibold text-primary border border-border px-2 py-0.5 bg-secondary/30">
                {item.stat}
              </span>
            )}
            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-40 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug tracking-tight">
          {item.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-none border border-border bg-secondary font-mono text-xs font-bold flex items-center justify-center text-foreground shrink-0">
            {item.clientInitials}
          </div>
          <div>
            <p className="text-foreground font-bold text-xs">{item.clientName}</p>
            <p className="text-muted-foreground text-[10px] uppercase font-mono">{item.clientRole}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      title: "Global E-commerce Scale",
      description: "Scaled a fashion retail brand to $1M+ in monthly revenue through advanced SEO and a high-performance Next.js storefront.",
      icon: <TrendingUp />,
      stat: "ROI 400%",
      clientName: "Alex Rivera",
      clientRole: "CEO, LuxFashion",
      clientInitials: "AR",
      colSpan: "md:col-span-2",
    },
    {
      title: "FinTech Infrastructure",
      description: "Architected a high-concurrency digital wallet & API system for a European banking startup.",
      icon: <Users />,
      stat: "100k+ Users",
      clientName: "Sarah Chen",
      clientRole: "CTO, WalletX",
      clientInitials: "SC",
    },
    {
      title: "Healthcare Platform UX",
      description: "Redesigned patient workflows for a telehealth provider, driving a 45% increase in user retention.",
      icon: <Award />,
      stat: "+45% Retention",
      clientName: "Marcus Thorne",
      clientRole: "Product Lead, HealthSync",
      clientInitials: "MT",
    },
    {
      title: "Low-Latency Media Delivery",
      description: "Optimized global CDN edge routing to support concurrent streaming workloads with sub-second latency.",
      icon: <PlayCircle />,
      stat: "0ms Buffer",
      clientName: "Elena Rodriguez",
      clientRole: "Ops Manager, StreamHub",
      clientInitials: "ER",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="stories" className="bg-background py-20 md:py-28 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-border pb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Case Studies &amp; Success Stories
            </h2>
            <p className="max-w-xl text-muted-foreground text-sm leading-relaxed mt-2">
              Real results for ambitious companies. We build digital engines engineered for performance and business growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stories.map((item, index) => (
            <SuccessCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
