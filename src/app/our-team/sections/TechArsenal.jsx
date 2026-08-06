"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Palette,
} from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

const techCategories = [
  {
    title: "Frontend Development",
    index: "01",
    icon: <Code2 className="text-orange-500 w-5 h-5" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Engineering",
    index: "02",
    icon: <Server className="text-orange-500 w-5 h-5" />,
    skills: ["Node.js", "Express", "PHP", "REST & GraphQL APIs"],
  },
  {
    title: "Database & ORM",
    index: "03",
    icon: <Database className="text-orange-500 w-5 h-5" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    title: "Security & Auth",
    index: "04",
    icon: <ShieldCheck className="text-orange-500 w-5 h-5" />,
    skills: ["NextAuth (Auth.js)", "JWT Security", "RBAC Access Control", "OWASP"],
  },
  {
    title: "DevOps & Cloud",
    index: "05",
    icon: <Wrench className="text-orange-500 w-5 h-5" />,
    skills: ["Docker", "AWS", "Git", "GitHub Actions", "Vercel"],
  },
  {
    title: "UI/UX & Design",
    index: "06",
    icon: <Palette className="text-orange-500 w-5 h-5" />,
    skills: ["Figma", "Adobe Illustrator", "Photoshop", "Design Systems"],
  },
];

export default function TechArsenal() {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.25em] block mb-3">
            [ CAPABILITIES &amp; TECH STACK ]
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Tech <span className="text-orange-500">Arsenal</span>
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
            The modern frameworks, languages, and industrial tools powering our high-performance applications.
          </p>
        </div>

        {/* Tech Grid (Sharp Boxy Rectangular Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 bg-card border border-border rounded-none shadow-sm hover:border-foreground/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-border bg-secondary flex items-center justify-center">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-sm text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground font-bold">
                    {cat.index}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-secondary border border-border font-mono text-[11px] text-foreground font-medium rounded-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
