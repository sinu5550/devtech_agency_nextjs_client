"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Database, ShieldCheck, Wrench } from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="text-primary w-6 h-6" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend Engineering",
    icon: <Server className="text-primary w-6 h-6" />,
    skills: ["Node.js", "Express", "PHP", "REST APIs"],
  },
  {
    title: "Database & ORM",
    icon: <Database className="text-primary w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    title: "Security & Auth",
    icon: <ShieldCheck className="text-primary w-6 h-6" />,
    skills: ["NextAuth (Auth.js)", "BetterAuth", "JWT", "RBAC"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="text-primary w-6 h-6" />,
    skills: ["Docker", "AWS", "Git", "GitHub Actions"],
  },
];

export default function TechArsenal() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 glow-text-blue">
            Tech Arsenal
          </h2>
          <p className="text-lg text-muted-foreground">
            The tools and technologies powering our digital experiences.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-dark p-6 rounded-2xl card-shadow hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <div className="p-3 bg-secondary rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground border border-border rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
