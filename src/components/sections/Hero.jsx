"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal, Zap, Globe, Cpu, Rocket, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

const FloatingIcon = ({ icon: Icon, x, y, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
      x: [0, 15, 0],
      y: [0, -20, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute hidden md:block"
    style={{ left: x, top: y, color }}
  >
    <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
      <Icon className="w-8 h-8" />
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden select-none px-4">
      {/* 1. Digital Floor Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-digital-floor [transform:rotateX(60deg)_translateZ(0)] origin-bottom pointer-events-none opacity-40 z-0" />
      
      {/* 2. Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* 3. Floating Icons (Galactic Feel) */}
      <FloatingIcon icon={SiReact} x="10%" y="20%" delay={0} color="#61DAFB" />
      <FloatingIcon icon={SiNextdotjs} x="85%" y="15%" delay={1} color="#FFFFFF" />
      <FloatingIcon icon={SiTailwindcss} x="15%" y="65%" delay={2} color="#38B2AC" />
      <FloatingIcon icon={SiFramer} x="80%" y="70%" delay={1.5} color="#0055FF" />
      <FloatingIcon icon={Globe} x="5%" y="45%" delay={3} color="#60A5FA" />
      <FloatingIcon icon={Code2} x="90%" y="40%" delay={0.5} color="#F472B6" />

      {/* 4. Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Digital Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter">
            Unleash 
            <span className="mx-4 md:mx-6 inline-flex items-center justify-center w-14 h-14 md:w-24 md:h-24 bg-primary/10 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] group hover:scale-110 transition-transform duration-500 align-middle">
              <SendHorizonal className="w-7 h-7 md:w-12 md:h-12 text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            </span>
            Standout <br />
            Web Design and 
            <span className="mx-4 md:mx-6 inline-flex items-center justify-center w-14 h-14 md:w-24 md:h-24 bg-amber-500/10 rounded-3xl border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.3)] group hover:scale-110 transition-transform duration-500 align-middle">
              <Zap className="w-7 h-7 md:w-12 md:h-12 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]" />
            </span>
            SEO Solutions
          </h1>

          <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed mt-4">
            We build high-performance, immersive digital experiences that <br className="hidden md:block" />
            help professional businesses dominate their local and global markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-10">
            <Button 
              size="lg" 
              className="rounded-full bg-primary text-white hover:bg-blue-600 px-8 md:px-12 py-6 md:py-9 text-lg md:text-xl font-black shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 border border-white/10 uppercase tracking-widest"
            >
              Start Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 md:px-12 py-6 md:py-9 text-lg md:text-xl font-bold shadow-2xl transition-all duration-300 cursor-pointer hover:bg-white/10 hover:border-white/20 uppercase tracking-widest"
            >
              Our Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-32 flex flex-col items-center gap-4 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Explore Our World</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;

