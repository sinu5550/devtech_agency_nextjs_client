"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "@/data/teamData";
import {
  Github,
  Linkedin,
  Globe,
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function AboutHero() {
  const [activeMemberId, setActiveMemberId] = useState(teamData[0]?.id);

  // Auto-switch Active Member every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMemberId((prevId) => {
        const currentIndex = teamData.findIndex((m) => m.id === prevId);
        const nextIndex = (currentIndex + 1) % teamData.length;
        return teamData[nextIndex].id;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeMember = teamData.find((member) => member.id === activeMemberId);

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8 font-sans transition-colors duration-300 relative overflow-hidden flex flex-col justify-center">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
      {/* Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10" style={{background: 'radial-gradient(circle, oklch(0.56 0.22 264 / 0.08) 0%, transparent 70%)'}} />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none -z-10" style={{background: 'radial-gradient(circle, oklch(0.72 0.18 54 / 0.06) 0%, transparent 70%)'}} />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-2">
            <Sparkles size={14} />
            <span>Meet The Masterminds</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-foreground leading-tight">
            DevTech{" "}
            <span className="bg-linear-to-r from-primary via-primary/80 to-foreground/60 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Build Website with self Design — Click any member or sit back to
            watch.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="flex flex-col-reverse lg:flex-row w-full gap-8 items-center justify-center">
          {/* ================= LEFT SIDE: Active Member Details ================= */}
          <div className="lg:w-7/12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative p-6 md:p-8 rounded-3xl bg-card border border-border shadow-sm card-shadow space-y-8 overflow-hidden"
              >
                {/* Background Subtle Radial Glow */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                {/* Meta Role & Name Header */}
                <div className="space-y-3 relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-primary font-mono text-[11px] uppercase tracking-[0.2em] font-bold">
                      {activeMember.role}
                    </span>
                  </div>

                  {/* Name & Eye-Catching Position Side-by-Side Wrapper */}
                  <div className="flex flex-col gap-3">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15] bg-clip-text">
                      {activeMember.name}
                    </h2>

                    {/* Dynamic Eye-Catching Position Tag */}
                    <span className="w-fit inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-black tracking-wider uppercase shadow-lg shadow-primary/30 border border-primary-foreground/20 hover:scale-105 transition-transform cursor-default">
                      <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
                      {activeMember.position}
                    </span>
                  </div>
                </div>

                {/* Section 01: Academic Credentials */}
                <div className="space-y-4 relative z-10">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Academic Credentials
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary/30 border border-border/40 backdrop-blur-sm space-y-3 shadow-inner">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <GraduationCap size={18} />
                      </div>
                      <span className="font-semibold text-sm md:text-base text-foreground">
                        {activeMember.education.institution}
                      </span>
                    </div>

                    {activeMember.education.subject && (
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="p-2 rounded-lg bg-primary/5 text-primary">
                          <BookOpen size={18} />
                        </div>
                        <span>{activeMember.education.subject}</span>
                      </div>
                    )}

                    {activeMember.education.cgpa && (
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="p-2 rounded-lg bg-primary/5 text-primary">
                          <Award size={18} />
                        </div>
                        <span>
                          CGPA:{" "}
                          <span className="font-bold text-foreground font-mono bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                            {activeMember.education.cgpa}
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 02: Technical Expertise Pills */}
                <div className="space-y-4 relative z-10">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Tech Stack & Core
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3.5 py-1.5 rounded-xl bg-secondary/40 hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-medium tracking-wide transition-all duration-300 border border-border/40 hover:border-primary/50 shadow-sm hover:shadow-md hover:shadow-primary/20 cursor-default hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section 03: Social Connect Profiles */}
                <div className="pt-2 space-y-4 relative z-10">
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Connect Profiles
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {/* LinkedIn */}
                    <a
                      href={activeMember.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm"
                    >
                      <Linkedin
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      <span>LinkedIn</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>

                    {/* GitHub */}
                    {activeMember.links.github && (
                      <a
                        href={activeMember.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm"
                      >
                        <Github
                          size={16}
                          className="transition-transform group-hover:scale-110"
                        />
                        <span>GitHub</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </a>
                    )}

                    {/* Portfolio */}
                    {activeMember.links.portfolio && (
                      <a
                        href={activeMember.links.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 text-xs font-semibold text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm"
                      >
                        <Globe
                          size={16}
                          className="transition-transform group-hover:scale-110"
                        />
                        <span>Portfolio</span>
                        <ArrowUpRight
                          size={14}
                          className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= RIGHT SIDE: Compact 2-Column Staggered Grid ================= */}
          <div className="lg:w-5/12 w-full">
            <div className="grid grid-cols-2 gap-x-5 md:gap-x-7 items-center">
              {teamData.map((member, index) => {
                const isActive = activeMemberId === member.id;
                const isEven = index % 2 === 1;

                return (
                  <motion.div
                    key={member.id}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isEven ? "mt-5 md:mt-7" : "mb-5 md:mb-7"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveMemberId(member.id)}
                  >
                    <div
                      className={`mx-auto relative group max-h-45 md:max-h-125 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                        isActive
                          ? "border-primary shadow-[0_0_20px_oklch(0.56_0.22_264/0.2)] scale-[1.02] z-10"
                          : "border-transparent grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:border-border"
                      }`}
                    >
                      {/* Member Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full aspect-5/5 md:aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Glassmorphic Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-all duration-300 flex flex-col justify-end p-3.5 md:p-4">
                        <p className="text-white font-bold text-base md:text-lg leading-tight glow-text-blue">
                          {member.name}
                        </p>
                        <p className="text-blue-400 text-xs md:text-sm font-semibold mt-1">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
