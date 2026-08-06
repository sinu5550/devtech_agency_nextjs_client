"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, Code, ChevronRight } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "We implement industry best practices — SSL/TLS encryption, OWASP-compliant APIs, rate limiting, and continuous vulnerability monitoring.",
    visual: (
      <div className="mt-4 border border-border p-4 font-mono text-xs text-muted-foreground leading-relaxed overflow-hidden bg-secondary/30">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-red-400" />
          <span className="w-2 h-2 bg-amber-400" />
          <span className="w-2 h-2 bg-green-400" />
        </div>
        <p className="text-emerald-600 dark:text-emerald-400">{"// OWASP-compliant middleware"}</p>
        <p className="text-foreground/70">{"app.use(helmet())"}</p>
        <p className="text-foreground/70">{"app.use(rateLimit({ max: 100 }))"}</p>
        <p className="text-primary">{"app.use(jwtVerify(secret))"}</p>
      </div>
    ),
    tags: ["OWASP", "JWT Auth", "HTTPS", "Rate Limiting"],
  },
  {
    icon: Cloud,
    title: "Dynamic Cloud Infrastructure",
    description:
      "Scalable architectures on AWS, Vercel, and GCP — auto-scaling, CDN delivery, and 99.9% uptime SLAs for production workloads.",
    visual: (
      <div className="mt-4 border border-border p-4 overflow-hidden bg-secondary/30">
        <div className="flex flex-col gap-2">
          {[
            { label: "API Gateway", status: "Healthy", color: "bg-emerald-400" },
            { label: "Load Balancer", status: "Active", color: "bg-emerald-400" },
            { label: "CDN Edge", status: "Fast", color: "bg-emerald-400" },
            { label: "Auto Scaling", status: "Enabled", color: "bg-blue-400" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{row.label}</span>
              <div className="flex items-center gap-1.5 font-mono">
                <span className={`w-1.5 h-1.5 ${row.color}`} />
                <span className="text-foreground/70">{row.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    tags: ["AWS", "Vercel", "GCP", "CDN", "99.9% Uptime"],
  },
  {
    icon: Code,
    title: "Full-Stack Product Engineering",
    description:
      "From database schema to pixel-perfect UI — we own the full delivery stack using modern TypeScript, REST & GraphQL APIs, and CI/CD pipelines.",
    visual: (
      <div className="mt-4 flex flex-col gap-2 font-mono">
        {[
          { layer: "Frontend", tech: "React, Next.js, TypeScript" },
          { layer: "Backend", tech: "Node.js, Django, REST / GraphQL" },
          { layer: "Database", tech: "MongoDB, PostgreSQL, Prisma" },
          { layer: "DevOps", tech: "Docker, GitHub Actions, Vercel" },
        ].map((item) => (
          <div
            key={item.layer}
            className="flex items-center gap-3 text-xs px-3 py-2 border border-border bg-secondary/30"
          >
            <span className="font-semibold text-muted-foreground w-20 shrink-0">{item.layer}</span>
            <span className="text-foreground/70">{item.tech}</span>
          </div>
        ))}
      </div>
    ),
    tags: ["TypeScript", "GraphQL", "CI/CD", "Docker"],
  },
];

const TechnicalCapabilities = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-4 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

          {/* Left — sticky heading (no badges) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-[1.15] mb-6">
                Built for speed, security, and high performance.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Every system we build is engineered from the ground up for reliability, maintainability, and scalability at every layer of the stack.
              </p>
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-all"
              >
                View Our Process
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right — capability cards (boxy) */}
          <div className="flex flex-col gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-none p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 text-foreground bg-secondary/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground mb-1.5">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                      {cap.visual}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono text-muted-foreground border border-border px-2 py-0.5 bg-secondary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
