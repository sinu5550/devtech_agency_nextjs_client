"use client";
import React, { useState } from "react";
import PricingHero from "./sections/PricingHero";
import PricingCards from "./sections/PricingCards";
import PricingFAQ from "./sections/PricingFAQ";

export default function ClientPricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="mt-16 min-h-screen bg-background text-foreground py-20 px-4 md:px-8 font-sans transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <PricingHero isYearly={isYearly} setIsYearly={setIsYearly} />
        <PricingCards isYearly={isYearly} />
        <PricingFAQ />
      </div>
    </main>
  );
}
