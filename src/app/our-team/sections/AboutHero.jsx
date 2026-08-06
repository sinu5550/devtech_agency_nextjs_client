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
  ArrowUpRight,
} from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

export default function AboutHero() {
  const [activeMemberId, setActiveMemberId] = useState(teamData[0]?.id);

  // Auto-switch Active Member every 6 seconds
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
    <section className="min-h-screen bg-background text-foreground py-16 px-4 md:px-8 relative overflow-hidden flex flex-col justify-center border-b border-border">
      {/* Ambient Lighting Glows */}
      <div
        className="absolute top-10 left-1/4 w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.22 54 / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block mb-3">
            [ MEET THE MASTERMINDS ]
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
            DevTech <span className="text-orange-500">Team</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-xs sm:text-sm md:text-base max-w-lg mx-auto">
            Click any member or sit back to watch our core engineering team in
            action.
          </p>
        </div>

        {/* Main Split Layout */}
        <div className="flex flex-col-reverse lg:flex-row w-full gap-8 items-stretch justify-center">
          {/* ================= LEFT SIDE: Active Member Details ================= */}
          <div className="lg:w-7/12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative p-6 sm:p-8 bg-card border border-border rounded-none shadow-md space-y-6 overflow-hidden h-full flex flex-col justify-between"
              >
                <div>
                  {/* Meta Role & Name Header */}
                  <div className="space-y-3 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/30 bg-orange-500/10 text-orange-500 font-mono text-[11px] uppercase tracking-[0.2em] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      <span>{activeMember.role}</span>
                    </div>

                    <div className="flex flex-col gap-2 justify-between">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                        {activeMember.name}
                      </h2>
                      <span className="w-fit inline-flex items-center gap-1.5 px-3 py-1 bg-foreground text-background font-mono text-xs font-bold uppercase tracking-wider rounded-none">
                        {activeMember.position}
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="pt-6 border-t border-border mt-6 space-y-3">
                    <span className="font-mono text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                      // Core Technical Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 bg-secondary border border-border font-mono text-xs text-foreground font-medium rounded-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education info */}
                  {activeMember.education && (
                    <div className="pt-6 space-y-2 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <GraduationCap className="w-4 h-4 text-orange-500" />
                        <span>{activeMember.education.institution}</span>
                      </div>
                      <p className="text-[11px]">
                        {activeMember.education.subject}
                        {activeMember.education.cgpa && (
                          <span className="text-orange-500 font-bold ml-2">
                            (CGPA: {activeMember.education.cgpa})
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* Social Links Bar */}
                <div className="pt-6 border-t border-border flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground text-[10px]">
                    STATUS: ACTIVE LEAD
                  </span>
                  <div className="flex items-center gap-3">
                    {activeMember.links.github && (
                      <a
                        href={activeMember.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border border-border bg-secondary hover:border-orange-500 hover:text-orange-500 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {activeMember.links.linkedin && (
                      <a
                        href={activeMember.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border border-border bg-secondary hover:border-orange-500 hover:text-orange-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {activeMember.links.portfolio && (
                      <a
                        href={activeMember.links.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border border-border bg-secondary hover:border-orange-500 hover:text-orange-500 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= RIGHT SIDE: Team Image Stack (equal gap-3.5) ================= */}
          <div className="lg:w-5/12 w-full grid grid-cols-2 gap-4">
            {teamData.map((member, index) => {
              const isSelected = activeMemberId === member.id;
              const formattedIndex = String(index + 1).padStart(2, "0");
              const isOdd = index % 2 !== 0;

              return (
                <button
                  key={member.id}
                  onClick={() => setActiveMemberId(member.id)}
                  className={`group text-left cursor-pointer relative focus:outline-none ${
                    isOdd ? "mt-2 md:mt-4" : "-mt-6"
                  }`}
                >
                  {/* Clean 4/5 Aspect Ratio Image Container */}
                  <div
                    className={`relative w-full aspect-[4/5] overflow-hidden border transition-all duration-300 ${
                      isSelected
                        ? "border-orange-500 ring-2 ring-orange-500/30 scale-[1.02]"
                        : "border-border hover:border-foreground/60 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Index Tag Overlay (Top-Left) */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-background/80 backdrop-blur-md border border-border font-mono text-[10px] font-bold text-foreground">
                      {formattedIndex}
                    </div>

                    {/* Name Overlay (Bottom Gradient) */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pt-8">
                      <h3 className="font-bold text-xs sm:text-sm text-white truncate">
                        {member.name}
                      </h3>
                      <p className="font-mono text-[10px] text-white/80 truncate mt-0.5">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
