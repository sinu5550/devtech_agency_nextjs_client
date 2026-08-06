"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Architecture",
    description:
      "We deep-dive into your goals, users, and constraints to map out a precise technical architecture before writing a single line of code.",
    details: ["Stakeholder interviews", "System design", "Tech stack selection", "Project roadmap"],
  },
  {
    number: "02",
    title: "Agile Development",
    description:
      "Iterative sprints with transparent progress tracking. You see working software every two weeks — not just status updates.",
    details: ["2-week sprints", "Daily standups", "Demo reviews", "Continuous integration"],
  },
  {
    number: "03",
    title: "Performance & Security",
    description:
      "Every release goes through rigorous performance testing, security auditing, and code review before it touches production.",
    details: ["Load testing", "Security scanning", "Code review", "Lighthouse audits"],
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "Zero-downtime deployments with full monitoring setup. We stay on after launch to ensure everything runs smoothly at scale.",
    details: ["CI/CD pipelines", "Uptime monitoring", "Incident response", "Ongoing support"],
  },
];

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-background py-20 md:py-28 px-4 border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header - no badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-16 border-b border-border pb-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            Our Engineering Process
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg leading-relaxed">
            A transparent, structured approach that delivers predictable results every time.
          </p>
        </motion.div>

        {/* Desktop: Boxy Horizontal timeline */}
        <div className="hidden md:block">
          {/* Step numbers + connector */}
          <div className="grid grid-cols-4 border border-border bg-card mb-6">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`
                  p-6 text-left border-r border-border last:border-r-0 transition-colors duration-200 cursor-pointer
                  ${activeStep === i ? "bg-secondary/80 border-b-2 border-b-primary" : "hover:bg-secondary/30"}
                `}
              >
                <span className="font-mono text-xs font-bold text-primary block mb-1">
                  STEP {step.number}
                </span>
                <span className={`text-sm font-semibold block leading-tight ${activeStep === i ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active step detail box */}
          {steps[activeStep] && (
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border p-8 rounded-none"
            >
              <div className="grid grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <span className="font-mono text-xs font-bold text-primary uppercase block mb-2">
                    Phase {steps[activeStep]?.number}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                    {steps[activeStep]?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {steps[activeStep]?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-w-[200px] border-l border-border pl-6 font-mono text-xs text-muted-foreground">
                  {steps[activeStep]?.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2">
                      <span className="text-primary">■</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Mobile: Boxy Accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-none"
            >
              <button
                onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                className="w-full flex items-center justify-between p-4 text-left font-mono text-xs"
              >
                <span className="font-bold text-primary">{step.number}. {step.title}</span>
                <span>{activeStep === i ? "−" : "+"}</span>
              </button>
              {activeStep === i && (
                <div className="px-4 pb-4 pt-0 border-t border-border mt-2">
                  <p className="text-xs text-muted-foreground leading-relaxed my-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {step.details.map((d) => (
                      <span key={d} className="border border-border px-2 py-0.5 text-muted-foreground">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
