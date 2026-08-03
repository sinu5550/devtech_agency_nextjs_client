"use client";
import React from "react";
import { Sparkles, Layers } from "lucide-react";

export default function ServicesHero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-4">
        <Sparkles size={14} />
        <span>WHAT WE ENGINEER</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
        Services Built for{" "}
        <span className="glow-text-blue text-primary">Digital Dominance</span>
      </h1>

      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        From custom Figma UI/UX prototyping to full-stack Next.js web
        applications, we engineer solutions designed to scale your business.
      </p>
    </div>
  );
}
