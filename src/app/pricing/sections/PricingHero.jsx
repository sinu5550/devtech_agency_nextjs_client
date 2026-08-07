"use client";
import React from "react";
import SectionTitle from "@/components/shared/SectionTitle";

export default function PricingHero({ isYearly, setIsYearly }) {
  return (
    <div className="flex flex-col items-center mb-16 md:mb-20">
      <SectionTitle
        tag="TRANSPARENT PRICING"
        title="Simple Plans for Every"
        highlightTitle="Scale."
        subtitle="Choose the perfect plan tailored for your web development needs. Self-designed, high performance, and zero hidden fees."
        className="mb-8"
      />

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
