"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, GitMerge } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Academic Foundation",
    icon: <GraduationCap className="w-5 h-5 text-primary-foreground" />,
    date: "Current",
    description:
      "Pursuing BSc in Computer Science and Engineering (CSE) at East West University, building upon a strong academic foundation from Dhaka College.",
  },
  {
    id: 2,
    title: "Hackathon & Innovation",
    icon: <Trophy className="w-5 h-5 text-primary-foreground" />,
    date: "2026",
    description:
      "Competed in the National RoboFest (NRF26) hackathon with project EcoBin as part of team 'Plasma Programmers'. Continuously collaborating on dynamic team projects.",
  },
  {
    id: 3,
    title: "Tech Evolution",
    icon: <GitMerge className="w-5 h-5 text-primary-foreground" />,
    date: "Ongoing",
    description:
      "Transitioning architecture patterns from NoSQL (MongoDB) ecosystems to robust relational databases utilizing PostgreSQL and Prisma for scalable, industry-grade applications.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -ml-20" />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 glow-text-blue">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones that shaped our development lifecycle.
          </p>
        </div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0 md:border-none">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`mb-12 flex flex-col md:flex-row items-center justify-between w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Empty space for alternative side */}
                <div className="hidden md:block w-5/12" />

                {/* Timeline Icon */}
                <div className="absolute left-[-9px] md:relative md:left-auto flex items-center justify-center w-10 h-10 rounded-full bg-primary border-4 border-background shadow-lg z-10 glow-blue">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 ml-8 md:ml-0">
                  <div className="glass-dark p-6 rounded-2xl card-shadow hover:scale-[1.02] transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary text-primary font-semibold text-xs rounded-full mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
