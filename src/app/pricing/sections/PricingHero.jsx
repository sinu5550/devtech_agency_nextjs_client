"use client";
import React from "react";
import { Sparkles } from "lucide-react";

export default function PricingHero({ isYearly, setIsYearly }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-4">
        <Sparkles size={14} />
        <span>TRANSPARENT PRICING</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
        Simple Plans for{" "}
        <span className="glow-text-blue text-primary">Every Scale</span>
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
        Choose the perfect plan tailored for your web development needs.
        Self-designed, high performance, and zero hidden fees.
      </p>

      {/* Billing Toggle Switch */}
      <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-secondary/60 border border-border/60 backdrop-blur-md shadow-inner">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
            !isYearly
              ? "bg-primary text-primary-foreground shadow-md glow-blue"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Monthly Billing
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
            isYearly
              ? "bg-primary text-primary-foreground shadow-md glow-blue"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span>Yearly Billing</span>
          <span className="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 font-bold rounded-full border border-emerald-500/30">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}
