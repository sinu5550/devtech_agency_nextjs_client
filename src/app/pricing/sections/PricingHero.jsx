"use client";
import React from "react";


export default function PricingHero({ isYearly, setIsYearly }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      {/* Mono Section Tag */}
      <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-4">
        [ TRANSPARENT PRICING ]
      </span>


      {/* Main Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">
        Simple Plans for{" "}
        <span className="text-primary underline decoration-primary/40 underline-offset-8">Every Scale</span>
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
        Choose the perfect plan tailored for your web development needs.
        Self-designed, high performance, and zero hidden fees.
      </p>

      {/* Billing Toggle Switch */}
      <div className="inline-flex items-center gap-2 p-1.5 border border-border bg-card shadow-sm">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-5 py-2 text-xs md:text-sm font-mono font-semibold transition-all duration-200 ${
            !isYearly
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          MONTHLY BILLING
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-5 py-2 text-xs md:text-sm font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
            isYearly
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
          }`}
        >
          <span>YEARLY BILLING</span>
          <span
            className={`px-2 py-0.5 text-[10px] font-bold border transition-colors ${
              isYearly
                ? "bg-primary-foreground text-primary border-primary-foreground/40"
                : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
            }`}
          >
            SAVE 20%
          </span>
        </button>

      </div>
    </div>
  );
}

