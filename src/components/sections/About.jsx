"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Rocket, Eye, Heart, Handshake } from "lucide-react";

const features = [
  { 
    title: "Qualified", 
    desc: "Certified experts with decades of combined experience building mission-critical software.", 
    icon: <ShieldCheck className="w-5 h-5 text-foreground" />,
    status: "Verified",
  },
  { 
    title: "Proficient", 
    desc: "Modern methodologies and cutting-edge toolchains to accelerate development speed.", 
    icon: <Zap className="w-5 h-5 text-foreground" />,
    status: "Active",
  },
  { 
    title: "Expert", 
    desc: "Deep specialized knowledge across Cloud, Security, DevOps, and Scalable UX.", 
    icon: <Rocket className="w-5 h-5 text-foreground" />,
    status: "Certified",
  },
  {
    title: "Transparent",
    desc: "Honest, clear communication and transparent tracking through every single sprint.",
    icon: <Eye className="w-5 h-5 text-foreground" />,
    status: "Audited",
  },
  { 
    title: "Integrity", 
    desc: "Guided by unyielding professional standards, code quality, and ethical principles.", 
    icon: <Heart className="w-5 h-5 text-foreground" />,
    status: "Trusted",
  },
  { 
    title: "Relationship", 
    desc: "Long-term client partnerships focused entirely on sustainable digital success.", 
    icon: <Handshake className="w-5 h-5 text-foreground" />,
    status: "Partner",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - no badge */}
        <div className="mb-12 md:mb-16 border-b border-border pb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-2">
            Crafting Excellence with Every Pixel
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            The core principles that guide our technical engineering and client partnerships.
          </p>
        </div>

        {/* Boxy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, index) => {
            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-card border border-border rounded-none p-6 md:p-8 flex flex-col justify-between hover:border-foreground/40 hover:bg-secondary/30 transition-all duration-200"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 bg-secondary/50">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase border border-border px-2 py-0.5 bg-secondary/30">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
