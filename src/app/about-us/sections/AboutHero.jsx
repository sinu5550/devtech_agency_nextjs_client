"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import { teamData } from "../../../../data/teamData";

export default function AboutHero() {
  const [activeMemberId, setActiveMemberId] = useState(teamData[0].id);
  const activeMember = teamData.find((member) => member.id === activeMemberId);

  return (
    <div className="min-h-screen bg-background text-foreground py-8 px-4 md:px-8 font-sans transition-colors duration-300 relative overflow-hidden flex flex-col justify-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

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
            Build Website with self Design — Click any member to reveal details.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="flex flex-col-reverse lg:flex-row w-full gap-8 items-center justify-center">
          {/* ================= LEFT SIDE: Active Member Details ================= */}
          <div className="lg:w-7/12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                className="relative p-6 md:p-8 rounded-3xl bg-background/40 backdrop-blur-2xl border border-border/50 shadow-2xl shadow-primary/5 space-y-8 overflow-hidden"
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

                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15] bg-clip-text">
                    {activeMember.name}
                  </h2>
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
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 items-center">
              {teamData.map((member, index) => {
                const isActive = activeMemberId === member.id;
                const isEven = index % 2 === 1;

                return (
                  <motion.div
                    key={member.id}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isEven ? "mt-4 md:mt-5 " : "mb-4 md:mb-5"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveMemberId(member.id)}
                  >
                    <div
                      className={`mx-auto relative group  max-h-45 md:max-h-125 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                        isActive
                          ? "border-primary glow-blue shadow-[0_0_25px_rgba(59,130,246,0.5)] scale-[1.02] z-10"
                          : "border-transparent grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:border-border"
                      }`}
                    >
                      {/* Member Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full aspect-5/5  md:aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Glassmorphic Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3">
                        <p className="text-white font-bold text-sm leading-tight glow-text-blue">
                          {member.name}
                        </p>
                        <p className="text-primary text-[11px] font-medium mt-0.5">
                          {member.role}
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
