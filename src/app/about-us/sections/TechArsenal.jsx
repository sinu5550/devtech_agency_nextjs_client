"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Terminal,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    index: "01",
    icon: <Code2 className="text-primary w-5 h-5" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Engineering",
    index: "02",
    icon: <Server className="text-primary w-5 h-5" />,
    skills: ["Node.js", "Express", "PHP", "REST APIs"],
  },
  {
    title: "Database & ORM",
    index: "03",
    icon: <Database className="text-primary w-5 h-5" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    title: "Security & Auth",
    index: "04",
    icon: <ShieldCheck className="text-primary w-5 h-5" />,
    skills: ["NextAuth (Auth.js)", "BetterAuth", "JWT", "RBAC"],
  },
  {
    title: "DevOps & Tools",
    index: "05",
    icon: <Wrench className="text-primary w-5 h-5" />,
    skills: ["Docker", "AWS", "Git", "GitHub Actions"],
  },
];

export default function TechArsenal() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary font-mono text-xs uppercase tracking-[0.25em] font-bold">
              Capabilities & Tech Stack
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-foreground leading-tight">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-foreground/60 bg-clip-text text-transparent">
              Arsenal.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
            The modern frameworks, languages, and industrial tools powering our
            high-performance applications.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-7 rounded-3xl bg-background/40 hover:bg-background/60 backdrop-blur-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between overflow-hidden ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Subtle Radial Glow inside Card */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon, Title & Index */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-border/40">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-secondary/60 border border-border/40 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-muted-foreground/60 group-hover:text-primary transition-colors">
                    //{category.index}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 bg-secondary/40 hover:bg-primary hover:text-primary-foreground text-foreground border border-border/40 hover:border-primary/50 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 shadow-sm cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar Effect */}
              <div className="mt-8 h-[2px] w-full bg-border/20 group-hover:bg-primary/30 transition-colors duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
