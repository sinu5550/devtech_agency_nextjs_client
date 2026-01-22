"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Monitor, Sparkles, Clapperboard, TrendingUp, Settings, ChevronRight } from "lucide-react";

/**
 * Individual Stacking Card Component
 */
const StackingCard = ({ service, index, isLast }) => {
  const container = useRef(null);
  
  // To achieve the layered stacking effect where previous cards' top edges are visible:
  // Using calc to combine a base offset with a pixel increment per card.
  // We offset it by ~25vh to center it better between navbar and bottom.
  const stickyTop = `calc(25vh + ${index * 40}px)`; 

  return (
    <div 
      ref={container}
      className={`static md:sticky w-full ${isLast ? 'mb-0' : 'mb-20 md:mb-[30vh]'}`}
      style={{ 
        top: stickyTop, 
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-gradient-to-br ${service.gradient} p-6 md:p-14 lg:p-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/20`}
      >
        {/* Background Grid & Accents */}
        <div className="absolute inset-0 opacity-[0.08] bg-grid-white pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Side: Content */}
        <div className="flex-[1.5] relative z-10 space-y-8">
          <Badge 
            variant="outline" 
            className="bg-white/15 border-white/30 text-white font-black uppercase tracking-[0.4em] text-[10px] py-2 px-6 backdrop-blur-xl"
          >
            Service {index + 1}
          </Badge>
          
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.0]">
            {service.title}
          </h2>
          
          <p className="max-w-2xl text-white/90 text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            {service.tags.map((tag) => (
              <Badge 
                key={tag} 
                className="bg-black/20 hover:bg-black/40 text-white border border-white/10 py-1.5 px-4 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <button className="group mt-10 flex items-center gap-4 bg-white/10 hover:bg-white/25 text-white border border-white/20 rounded-full px-10 py-4 md:py-5 transition-all duration-300 backdrop-blur-2xl shadow-xl">
             <span className="font-black uppercase tracking-widest text-xs">Explore Service</span>
             <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Right Side: Large Icon Box */}
        <div className="flex-1 relative z-10 flex justify-center md:justify-end w-full">
          <div className="relative w-48 h-48 md:w-64 lg:w-80 md:h-64 lg:h-80 bg-white/15 rounded-[3.5rem] md:rounded-[5rem] backdrop-blur-3xl border border-white/30 flex items-center justify-center shadow-2xl group overflow-hidden">
            <div className="relative z-10 transform-gpu transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              {React.cloneElement(service.icon, { className: "w-24 h-24 md:w-40 lg:w-48 md:h-40 lg:h-48 text-white" })}
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServiceLayout = () => {
  const services = [
    {
      title: "Web Design",
      icon: <Monitor />,
      description: "Offer an unforgettable user experience with high-performance interfaces tailored for your business success.",
      tags: ["React", "Next.js", "Tailwind", "Responsive"],
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      title: "Branding",
      icon: <Sparkles />,
      description: "Stand out with a unique visual identity and professional brand strategy that captures your audience.",
      tags: ["Identity", "Logo", "Brand Strategy"],
      gradient: "from-rose-500 to-pink-600",
    },
    {
      title: "Video Editing",
      icon: <Clapperboard />,
      description: "Engage your audience with professional animations and video solutions that tell your story perfectly.",
      tags: ["Motion", "UI/UX", "Social Media"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "SEO & SEA",
      icon: <TrendingUp />,
      description: "Dominate search results and boost your online presence with expert data-driven growth strategies.",
      tags: ["Google Ads", "Analytics", "Keywords", "Backlinks"],
      gradient: "from-slate-700 to-slate-900",
    },
    {
      title: "Maintenance",
      icon: <Settings />,
      description: "Keep your modern web applications secure, fast, and always up to date with our dedicated support.",
      tags: ["Security", "Scaling", "Updates"],
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="services" className="relative bg-[#030617] pt-32 pb-20 px-4 overflow-visible">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-32 text-center">
          <Badge variant="outline" className="mb-6 px-8 py-2.5 text-primary border-primary/30 glow-blue bg-primary/10 uppercase tracking-[0.5em] text-[11px] font-black">
            Our Solutions
          </Badge>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
            High-Impact <br />
            <span className="text-primary glow-text-blue">Expertise.</span>
          </h2>
          <div className="h-2 w-48 bg-primary mx-auto rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <StackingCard 
              key={index} 
              service={service} 
              index={index} 
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLayout;
