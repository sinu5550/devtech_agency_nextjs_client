"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import local images from public folder
import reactImg from "../../../public/assets/tools/react.png";
import nextImg from "../../../public/assets/tools/next.png";
import nodeImg from "../../../public/assets/tools/node.png";
import typescriptImg from "../../../public/assets/tools/typescript.png";
import javascriptImg from "../../../public/assets/tools/javascript.png";
import pythonImg from "../../../public/assets/tools/python.png";
import mongodbImg from "../../../public/assets/tools/mongodb.png";
import firebaseImg from "../../../public/assets/tools/firebase.png";
import flutterImg from "../../../public/assets/tools/flutter.png";
import androidImg from "../../../public/assets/tools/android.png";
import iosImg from "../../../public/assets/tools/ios.svg";
import figmaImg from "../../../public/assets/tools/figma.svg";
import adobexdImg from "../../../public/assets/tools/adobexd.svg";
import gitImg from "../../../public/assets/tools/git.png";
import vscodeImg from "../../../public/assets/tools/vscode.png";

const leftTilesTop = [
  { name: "React", icon: reactImg, size: "large", label: "React & Next.js" },
  { name: "TypeScript", icon: typescriptImg, size: "small" },
  { name: "JavaScript", icon: javascriptImg, size: "small" },
  { name: "Node.js", icon: nodeImg, size: "small" },
];

const leftTilesBottom = [
  { name: "Python", icon: pythonImg, size: "small" },
  { name: "MongoDB", icon: mongodbImg, size: "medium", label: "MongoDB" },
  { name: "Firebase", icon: firebaseImg, size: "small" },
];

const rightTilesTop = [
  { name: "Next.js", icon: nextImg, size: "small", isLightBg: true },
  { name: "Flutter", icon: flutterImg, size: "small" },
  { name: "Figma", icon: figmaImg, size: "medium", label: "Figma UI/UX" },
];

const rightTilesBottom = [
  { name: "iOS", icon: iosImg, size: "large", label: "iOS & Android", isLightBg: true },
  { name: "Android", icon: androidImg, size: "small" },
  { name: "Git", icon: gitImg, size: "small" },
  { name: "VS Code", icon: vscodeImg, size: "small" },
];

const ToolTile = ({ name, icon, size = "small", label, isLightBg }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
      className={`
        group relative flex items-center justify-center p-4 border rounded-none shadow-sm
        hover:border-foreground transition-all cursor-pointer overflow-hidden
        ${isLightBg ? "bg-white text-zinc-950 border-zinc-300" : "bg-card text-foreground border-border"}
        ${size === "large" ? "w-40 h-40 md:w-48 md:h-48 flex-col gap-3" : ""}
        ${size === "medium" ? "h-20 w-44 md:w-52 flex-row gap-3" : ""}
        ${size === "small" ? "w-16 h-16 md:w-20 md:h-20" : ""}
      `}
    >
      <div
        className={`relative ${
          size === "large" ? "w-16 h-16 md:w-20 md:h-20" : size === "medium" ? "w-8 h-8" : "w-8 h-8 md:w-10 md:h-10"
        }`}
      >
        <Image
          src={icon}
          alt={name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {label && (
        <span
          className={`font-mono text-xs font-semibold text-center transition-colors ${
            isLightBg ? "text-zinc-900 group-hover:text-black" : "text-foreground group-hover:text-primary"
          }`}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
};

const ToolSection = () => {
  return (
    <section id="expertise" className="bg-background py-24 md:py-32 px-4 relative overflow-hidden border-b border-border">
      {/* Background Micro-Dot Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Side Guide Lines (Cloudflare / HashiCorp guide margins) */}
      <div className="max-w-7xl mx-auto relative z-10 border-x border-dashed border-border/80 px-4 md:px-8">
        
        {/* HashiCorp Ecosystem Layout: Left Grid -- Center Content -- Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_1fr] gap-8 items-center">

          {/* ── LEFT ECOSYSTEM TILES ── */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            <div className="flex items-center gap-3">
              <ToolTile {...leftTilesTop[0]} />
              <div className="flex flex-col gap-3">
                <ToolTile {...leftTilesTop[1]} />
                <ToolTile {...leftTilesTop[2]} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ToolTile {...leftTilesTop[3]} />
              <ToolTile {...leftTilesBottom[1]} />
            </div>
            <div className="flex items-center gap-3">
              <ToolTile {...leftTilesBottom[0]} />
              <ToolTile {...leftTilesBottom[2]} />
            </div>
          </div>

          {/* ── CENTER CONTENT (HashiCorp Style) ── */}
          <div className="text-center py-6 px-4">
            <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.25em] block mb-4">
              [ TECH ECOSYSTEM &amp; STACK ]
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Built to work with your ecosystem
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
              We leverage production-proven frameworks, databases, and modern cloud architecture tools that integrate seamlessly with your existing infrastructure.
            </p>

            {/* Metrics Counter Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-dashed border-border font-mono text-center">
              <div>
                <span className="text-xl md:text-2xl font-bold text-foreground block">15+</span>
                <span className="text-[10px] text-muted-foreground uppercase">Core Technologies</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-foreground block">100%</span>
                <span className="text-[10px] text-muted-foreground uppercase">TypeScript Ready</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-foreground block">99.9%</span>
                <span className="text-[10px] text-muted-foreground uppercase">System Uptime</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT ECOSYSTEM TILES ── */}
          <div className="hidden lg:flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <ToolTile {...rightTilesTop[0]} />
              <ToolTile {...rightTilesTop[2]} />
            </div>
            <div className="flex items-center gap-3">
              <ToolTile {...rightTilesBottom[0]} />
              <div className="flex flex-col gap-3">
                <ToolTile {...rightTilesTop[1]} />
                <ToolTile {...rightTilesBottom[1]} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ToolTile {...rightTilesBottom[2]} />
              <ToolTile {...rightTilesBottom[3]} />
            </div>
          </div>

        </div>

        {/* Mobile / Tablet View: Clean Grid fallback */}
        <div className="lg:hidden grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-8">
          {[...leftTilesTop, ...leftTilesBottom, ...rightTilesTop, ...rightTilesBottom].map((tool, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-3 border rounded-none h-20 ${
                tool.isLightBg ? "bg-white text-zinc-950 border-zinc-300" : "bg-card border-border"
              }`}
            >
              <div className="relative w-7 h-7 mb-1">
                <Image src={tool.icon} alt={tool.name} fill className="object-contain" />
              </div>
              <span className="text-[10px] font-mono truncate max-w-full font-medium">{tool.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ToolSection;
