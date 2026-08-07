"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Globe2,
} from "lucide-react";
import { teamData } from "@/data/teamData";

const codeTabSnippets = {
  performance: {
    filename: "performance.config.ts",
    language: "typescript",
    lines: [
      "// DevTech Edge Performance Engine",
      "export const appConfig = defineConfig({",
      "  framework: 'Next.js 15 App Router',",
      "  rendering: 'Server-Driven Streaming SSR',",
      "  edgeCaching: { ttl: 86400, stw: true },",
      "  targetTTFB: '< 100ms',",
      "  lighthouseScore: 100,",
      "});",
    ],
  },
  security: {
    filename: "security.policy.json",
    language: "json",
    lines: [
      "{",
      '  "architecture": "Zero-Trust Edge",',
      '  "authentication": "NextAuth + OAuth2 + MFA",',
      '  "rateLimiting": "10,000 req/min (DDoS Protected)",',
      '  "encryption": "AES-256-GCM + TLS 1.3",',
      '  "soc2Compliant": true',
      "}",
    ],
  },
  deploy: {
    filename: "cloud.deployment.yml",
    language: "yaml",
    lines: [
      "name: Global Production Release",
      "on: [push]",
      "jobs:",
      "  deploy:",
      "    runs-on: edge-global-matrix",
      "    steps:",
      "      - uses: cloudflare/edge-workers@v4",
      "      - run: devtech-build --turbo --optimize",
      "      - status: SUCCESS (320 Edge Nodes Updated)",
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Header2() {
  const [activeTooltipId, setActiveTooltipId] = useState(null);
  const [activeTab, setActiveTab] = useState("performance");
  const avatarStackRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarStackRef.current &&
        !avatarStackRef.current.contains(event.target)
      ) {
        setActiveTooltipId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4 sm:px-6 pt-28 pb-16 overflow-hidden select-none border-b border-border"
    >
      {/* ── High-Tech Ambient Grid (Lines + Intersection Crosshair Plus Accents) ── */}
      {/* Layer 1: Subtle Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Layer 2: Micro Plus (+) Crosshairs at Grid Intersections */}
      <div className="absolute inset-0 pointer-events-none text-foreground/40 dark:text-foreground/30 opacity-40">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern
              id="grid-plus-pattern"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 4 V -4 M -4 0 H 4"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-plus-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none" />

      {/* ── Pulsing Radial Glow Orbs ── */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[500px] pointer-events-none rounded-full animate-pulse"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.22) 0%, rgba(245, 158, 11, 0.06) 55%, transparent 75%)",
          filter: "blur(90px)",
          animationDuration: "4s",
        }}
      />

      {/* ── Main Container: Asymmetric Split Grid Layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── LEFT COLUMN: Vision, Typography & Inline Avatars ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Main Headline with Inline Team Avatars (After 'Scale.') */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-6xl md:text-5xl lg:text-[68px] font-extrabold tracking-tight leading-[1.08] text-foreground"
            >
              We Build{" "}
              <span className="relative inline-block text-primary pb-2 sm:pb-3">
                High-Speed
                {/* Full Word Width Tapered Underline Curve SVG */}
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
                  <path
                    d="M 0 14 C 25 2, 75 2, 100 10 L 100 17 C 75 8, 25 8, 0 15 Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.15"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                  />
                </motion.svg>
              </span>{" "}
              Digital Products That Scale.{" "}
              {/* Inline Avatar Stack Cluster right after Scale. */}
              <span
                ref={avatarStackRef}
                className="inline-flex -space-x-2.5 shrink-0 align-middle mx-1.5 sm:mx-2.5 my-1"
              >
                {teamData.slice(0, 4).map((member) => {
                  const isTooltipActive = activeTooltipId === member.id;
                  return (
                    <span
                      key={member.id}
                      className="group relative inline-block"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (
                          typeof window !== "undefined" &&
                          window.innerWidth < 768
                        ) {
                          setActiveTooltipId(
                            isTooltipActive ? null : member.id,
                          );
                        }
                      }}
                    >
                      {/* Tooltip Card */}
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 flex-col items-center z-50 pointer-events-none transition-all duration-200 ${
                          isTooltipActive
                            ? "flex md:hidden"
                            : "hidden group-hover:flex"
                        }`}
                      >
                        <span className="bg-zinc-900/95 border border-zinc-700 text-zinc-100 px-3.5 py-2 rounded-xl shadow-2xl text-center whitespace-nowrap w-max max-w-none font-sans normal-case tracking-normal leading-tight select-none">
                          <span className="text-xs font-semibold text-white block whitespace-nowrap">
                            {member.name}
                          </span>
                          <span className="text-[11px] text-zinc-300 font-mono font-medium mt-0.5 block whitespace-nowrap">
                            {member.position}
                          </span>
                          {member.role && (
                            <span className="text-[10px] text-orange-400 font-mono font-medium mt-0.5 block whitespace-nowrap">
                              {member.role}
                            </span>
                          )}
                        </span>
                        <span className="w-2.5 h-2.5 bg-zinc-900 border-r border-b border-zinc-700 transform rotate-45 -mt-1.5 block shrink-0" />
                      </span>

                      {/* Avatar Circle */}
                      <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-background overflow-hidden relative shadow-sm group-hover:scale-110 group-hover:z-30 transition-transform duration-200 cursor-pointer block">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </span>
                    </span>
                  );
                })}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed font-normal"
            >
              From custom Next.js web applications to enterprise cloud platforms
              — engineered with zero-trust security, sub-300ms latency, and
              industrial precision.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex items-center gap-3 w-full sm:w-auto pt-2"
            >
              <button
                onClick={() => scrollTo("footer")}
                className="
                  w-full sm:w-auto group flex items-center justify-center gap-2.5
                  px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider
                  bg-foreground text-background
                  hover:bg-primary hover:text-primary-foreground
                  active:scale-[0.98] transition-all duration-200 cursor-pointer rounded-none shadow-md
                "
              >
                Start Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("why-choose")}
                className="
                  w-full sm:w-auto group flex items-center justify-center gap-2
                  px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider
                  bg-card border border-border text-foreground
                  hover:border-primary hover:text-primary hover:bg-secondary/60
                  active:scale-[0.98] transition-all duration-200 cursor-pointer rounded-none
                "
              >
                Explore Capabilities
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Interactive High-Tech Live IDE Console ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="lg:col-span-5 relative w-full"
          >
            {/* Glowing Backdrop behind IDE Console */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-none blur-xl opacity-60 pointer-events-none" />

            {/* Main IDE Card Container */}
            <div className="relative rounded-none border border-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden font-mono">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[11px] text-muted-foreground ml-2">
                    devtech-engine // {codeTabSnippets[activeTab].filename}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE 24/7</span>
                </div>
              </div>

              {/* Interactive IDE Code Tabs */}
              <div className="flex border-b border-border/60 bg-background/50 text-xs">
                {["performance", "security", "deploy"].map((tabKey) => {
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`flex-1 px-3 py-2 text-center text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                        isActive
                          ? "bg-card text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-card/40"
                      }`}
                    >
                      {tabKey}
                    </button>
                  );
                })}
              </div>

              {/* Code Snippet Display Area */}
              <div className="p-5 text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1 text-muted-foreground"
                  >
                    {codeTabSnippets[activeTab].lines.map((line, idx) => (
                      <div key={idx} className="flex gap-4">
                        <span className="text-zinc-600 select-none w-5 text-right shrink-0">
                          {idx + 1}
                        </span>
                        <span
                          className={
                            line.startsWith("//")
                              ? "text-zinc-500 italic"
                              : line.includes(":") || line.includes("export")
                                ? "text-foreground font-semibold"
                                : "text-primary font-medium"
                          }
                        >
                          {line}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* IDE Card Footer Status Bar */}
              <div className="px-4 py-2.5 bg-secondary/40 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  <span>TurboPack 15.1</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-emerald-500 font-semibold">
                    100% Type-Safe
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Mini Tech Badge 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-4 bg-card/95 border border-border backdrop-blur-md px-3 py-1.5 rounded-none shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-foreground"
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Next.js 15 Turbo</span>
            </motion.div>

            {/* Floating Mini Tech Badge 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-5 -left-4 bg-card/95 border border-border backdrop-blur-md px-3 py-1.5 rounded-none shadow-lg flex items-center gap-2 text-xs font-mono font-bold text-foreground"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Sub-300ms Edge Latency</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
