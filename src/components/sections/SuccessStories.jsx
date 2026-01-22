"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Quote, Star, TrendingUp, Users, Award, PlayCircle } from "lucide-react";

const SuccessCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group h-full rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] ${item.colSpan || ""}`}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-grid-white pointer-events-none" />
      <div className={`absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br ${item.gradient} blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
              {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
            </div>
            {item.badge && (
              <Badge className="bg-primary/20 text-primary border-none font-bold text-[10px] py-1 px-3">
                {item.badge}
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-white mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          <p className="text-slate-400 font-medium leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-white text-sm">
              {item.clientInitials}
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-tight">{item.clientName}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest font-black">{item.clientRole}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      title: "Global E-commerce Growth",
      description: "How we scaled a local fashion brand to $1M+ in monthly revenue through advanced SEO and a custom React-based storefront.",
      icon: <TrendingUp />,
      gradient: "from-blue-500 to-indigo-600",
      badge: "ROI 400%",
      clientName: "Alex Rivera",
      clientRole: "CEO, LuxFashion",
      clientInitials: "AR",
      colSpan: "md:col-span-2",
    },
    {
      title: "FinTech Innovation",
      description: "Building a secure, high-concurrency wallet system for a European banking startup.",
      icon: <Users />,
      gradient: "from-purple-500 to-pink-600",
      badge: "100k Users",
      clientName: "Sarah Chen",
      clientRole: "CTO, WalletX",
      clientInitials: "SC",
    },
    {
      title: "Award-Winning UX",
      description: "Redesigning the entire user journey for a leading healthcare platform, resulting in a 45% increase in patient retention.",
      icon: <Award />,
      gradient: "from-emerald-400 to-cyan-500",
      badge: "UX Design Award",
      clientName: "Marcus Thorne",
      clientRole: "Product Lead, HealthSync",
      clientInitials: "MT",
    },
    {
      title: "Streaming Performance",
      description: "Optimizing video delivery networks to support million+ concurrent viewers globally.",
      icon: <PlayCircle />,
      gradient: "from-rose-500 to-orange-600",
      badge: "0ms Latency",
      clientName: "Elena Rodriguez",
      clientRole: "Ops Manager, StreamHub",
      clientInitials: "ER",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="stories" className="bg-[#030617] py-32 select-none overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="flex-1">
            <Badge variant="outline" className="mb-4 px-6 py-2 text-primary border-primary/30 glow-blue bg-primary/10 uppercase tracking-[0.4em] text-[10px] font-black">
              Case Studies
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Our Success <br />
              <span className="text-primary glow-text-blue">Stories.</span>
            </h2>
            <p className="max-w-xl text-slate-400 text-lg font-medium leading-relaxed">
              Real results for ambitious companies. We don't just build websites; we create digital engines for sustainable business growth.
            </p>
          </div>
          
          <div className="hidden lg:flex gap-16 items-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">98%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Retention</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black text-white">250+</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Projects</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((item, index) => (
            <SuccessCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
