"use client";
import React from "react";

export default function ServicesHero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
      <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block mb-3">
        [ WHAT WE ENGINEER ]
      </span>

      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight">
        Services Built for{" "}
        <span className="text-orange-500">Digital Dominance</span>
      </h1>

      <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        From custom Figma UI/UX prototyping to full-stack Next.js web applications, we engineer solutions designed to scale your business.
      </p>
    </div>
  );
}
