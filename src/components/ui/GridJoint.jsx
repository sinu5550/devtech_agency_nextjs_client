"use client";

import React from "react";

const positions = {
  "top-left": "-top-1 -left-[5px]",
  "top-right": "-top-1 -right-[5px]",
  "bottom-left": "-bottom-1 -left-[5px]",
  "bottom-right": "-bottom-1 -right-[5px]",
  "center-left": "top-1/2 -left-[5px] -translate-y-1/2",
  "center-right": "top-1/2 -right-[5px] -translate-y-1/2",
};

/**
 * Cloudflare-style border intersection joint box node
 * Attached with pixel-perfect precision directly at section line intersections.
 */
export const GridJoint = ({ position = "top-left", className = "" }) => {
  const posClass = positions[position] || position;

  return (
    <span
      className={`absolute w-2.5 h-2.5 border border-muted-foreground/60 bg-background z-30 pointer-events-none select-none ${posClass} ${className}`}
    />
  );
};
