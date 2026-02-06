"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Rocket, Eye, Heart, Handshake, CheckCircle2 } from "lucide-react";

const features = [
  { 
    title: "Qualified", 
    desc: "Our team consists of certified experts with decades of combined experience.", 
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    status: "Verified",
    progress: 100
  },
  { 
    title: "Proficient", 
    desc: "We utilize cutting-edge AI and modern methodologies to deliver faster.", 
    icon: <Zap className="w-10 h-10 text-primary" />,
    status: "Active",
    progress: 85
  },
  { 
    title: "Expert", 
    desc: "Deep specialized expertise in Cloud, Security, and Scalable UX.", 
    icon: <Rocket className="w-10 h-10 text-primary" />,
    status: "Certified",
    progress: 95
  },
  {
    title: "Transparent",
    desc: "We maintain clear, honest communication through every step of development.",
    icon: <Eye className="w-10 h-10 text-primary" />,
    status: "Audited",
    progress: 100
  },
  { 
    title: "Integrity", 
    desc: "Guided by strong ethical principles and professional standards.", 
    icon: <Heart className="w-10 h-10 text-primary" />,
    status: "Trusted",
    progress: 100
  },
  { 
    title: "Relationship", 
    desc: "We focus on long-term partnerships and the ultimate success of our clients.", 
    icon: <Handshake className="w-10 h-10 text-primary" />,
    status: "Partner",
    progress: 90
  },
];

const About = () => {
  return (
    <div id="about" className="container mx-auto py-20 md:py-32 px-4 select-none">
      <div className="text-center mb-20">
        <Badge variant="outline" className="mb-4 px-6 py-2 text-primary border-primary/30 glow-blue bg-primary/10 uppercase tracking-[0.4em] text-[10px] font-black">
          Our Values
        </Badge>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tighter leading-tight">
          Crafting Excellence <br className="hidden sm:block" /> with Every Pixel
        </h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {features.map((item, index) => {
          return (
            <Card 
              key={index} 
              className="group relative transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] hover:border-primary/20 border-border bg-card/50 backdrop-blur-xl overflow-hidden"
            >
              {/* Dashboard Elements */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] font-black uppercase text-emerald-500 tracking-widest">{item.status}</span>
                </div>
              </div>

              <CardContent className="flex flex-col p-8 md:p-10 h-full">
                <div className="mb-8 p-4 rounded-2xl bg-primary/5 w-fit group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] border border-primary/10">
                  {item.icon}
                </div>
                
                <h4 className="font-black text-2xl mb-4 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.title}
                  <CheckCircle2 className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                
                <p className="text-base font-medium text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors mb-10">
                  {item.desc}
                </p>

                {/* Progress Indicator (Dashboard Feel) */}
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span>Performance</span>
                    <span className="text-foreground">{item.progress}%</span>
                  </div>
                  <div className="h-1 w-full bg-card/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-primary glow-blue" 
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default About;
