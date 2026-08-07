"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable SectionTitle Component for site-wide consistency.
 *
 * @param {Object} props
 * @param {string} [props.tag] - Optional top monospaced tag/badge text (e.g. "WHAT WE ENGINEER")
 * @param {string|React.ReactNode} props.title - Main section title
 * @param {string} [props.highlightTitle] - Optional highlighted word in orange with animated tapered curve
 * @param {string} [props.lgTitleSize="lg:text-6xl"] - Font size class for large devices (defaults to "lg:text-6xl")
 * @param {string} [props.titleSize] - Custom complete font size classes for title
 * @param {string} [props.subtitle] - Section subtitle / description text
 * @param {"center"|"left"|"right"} [props.align="center"] - Text alignment ("center" | "left" | "right")
 * @param {React.ReactNode} [props.actionButton] - Optional right-aligned action button/link
 * @param {string} [props.className=""] - Additional custom container styles
 */
export default function SectionTitle({
  tag,
  title,
  highlightTitle,
  subtitle,
  align = "center",
  actionButton,
  lgTitleSize = "text-6xl",
  titleSize,
  className = "",
}) {
  const isLeft = align === "left";
  const isRight = align === "right";

  const alignmentClasses = isLeft
    ? "text-left items-start"
    : isRight
      ? "text-right items-end"
      : "text-center items-center mx-auto";

  const computedTitleSize =
    titleSize || `text-3xl md:text-5xl lg:${lgTitleSize}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses} ${className}`}
    >
      {/* ── Top Monospaced Tag / Badge ── */}
      {tag && (
        <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.25em] block mb-3">
          [ {tag.replace(/^\[?\s*|\s*\]?$/g, "")} ]
        </span>
      )}

      {/* ── Title & Action Button Container ── */}
      <div
        className={`w-full flex flex-col ${
          actionButton && isLeft
            ? "md:flex-row md:items-end md:justify-between gap-4 border-b border-border pb-6"
            : ""
        }`}
      >
        <div>
          {/* Main Title */}
          {title && (
            <h2
              className={`${computedTitleSize} font-bold tracking-tight text-foreground leading-[1.1]`}
            >
              {title}{" "}
              {highlightTitle && (
                <span className="relative inline-block text-primary pb-2 sm:pb-3">
                  {highlightTitle}
                  {/* Full Word Width Tapered Curve SVG (Responsive height & weight for sm/md) */}
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full h-3.5 md:h-4 lg:h-6 overflow-visible text-primary pointer-events-none -rotate-1"
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                    whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.0,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "left center" }}
                  >
                    {/* Ultra-Smooth Left-to-Right Draw Curve */}
                    <path
                      d="M 0 14 C 25 2, 75 2, 100 10 L 100 17 C 75 8, 25 8, 0 15 Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.15"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                    />
                  </motion.svg>
                </span>
              )}
            </h2>
          )}

          {/* Subtitle / Description */}
          {subtitle && (
            <p
              className={`text-xs sm:text-sm md:text-base text-muted-foreground mt-3 leading-relaxed max-w-xl ${
                !isLeft && !isRight ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Optional Action Button */}
        {actionButton && <div className="shrink-0">{actionButton}</div>}
      </div>
    </motion.div>
  );
}
