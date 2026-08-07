"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Layers, DollarSign, ArrowRight } from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

const pillars = [
  {
    id: "01",
    title: "All-in-One Tech Integration",
    headline: "Unified architecture replacing fragmented agency vendors",
    description:
      "Instead of juggling separate UI designers, backend devs, and SEO agencies, DevTech provides a single cohesive engineering team. One partner, end-to-end execution, and continuous alignment.",
    metric: "100%",
    metricLabel: "Unified Team Ownership",
    icon: Layers,
    highlights: [
      "Single point of communication & accountability",
      "Full-stack alignment from UI design to cloud DevOps",
      "Seamless API integrations and microservice setups",
    ],
  },
  {
    id: "02",
    title: "Unmatched Speed & Performance",
    headline: "Sub-second load times & optimal Core Web Vitals",
    description:
      "We build with Next.js App Router, SSR caching, and global edge delivery to ensure lightning-fast page transitions and top Google Lighthouse scores across all devices.",
    metric: "<300ms",
    metricLabel: "Average Page Load Time",
    icon: Zap,
    highlights: [
      "Target 95+ Lighthouse performance scores",
      "Edge-cached static and server-rendered assets",
      "Optimized bundle sizes and image compression",
    ],
  },
  {
    id: "03",
    title: "Zero-Trust Security Standard",
    headline: "Built-in protection for your data and customers",
    description:
      "Security isn't an afterthought. Every line of code adheres to OWASP security guidelines with JWT authentication, encrypted environment variables, and automated vulnerability scanning.",
    metric: "99.99%",
    metricLabel: "System Reliability & Uptime",
    icon: ShieldCheck,
    highlights: [
      "OWASP top-10 security compliance",
      "Automated rate-limiting and DDoS mitigation",
      "Encrypted data storage and secure API gateways",
    ],
  },
  {
    id: "04",
    title: "Reduced Complexity & Cost",
    headline: "Predictable engineering costs without technical debt",
    description:
      "Clean, self-documenting code built with modular React components and TypeScript ensures your internal team can easily maintain or extend the system in the future.",
    metric: "40%",
    metricLabel: "Cost Reduction in Maintenance",
    icon: DollarSign,
    highlights: [
      "TypeScript type-safety reducing runtime bugs by 80%",
      "Modular, reusable UI design system components",
      "Transparent sprint pricing without hidden fees",
    ],
  },
];

const teamFeatures = [
  {
    title: "Dedicated Lead Engineers",
    detail: "Direct access to senior developers via Slack/Teams",
    status: "Active",
  },
  {
    title: "Custom SLA & 99.9% Uptime",
    detail: "Guaranteed incident response times under 15 minutes",
    status: "Verified",
  },
  {
    title: "Continuous Delivery Sprints",
    detail: "Bi-weekly production deployments with automated testing",
    status: "Active",
  },
];

export default function CloudflareFeatureSuite() {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = pillars[activeTab];
  const Icon = activePillar.icon;

  return (
    <section className="bg-background py-20 md:py-28 px-4 border-b border-border relative overflow-hidden w-full">
      {/* ── Full-Width Screen Micro-Dot Grid Background ── */}
      <div className="absolute inset-0 w-[200%] h-[200%] -top-1/2 -left-1/2 bg-dot-grid opacity-90 pointer-events-none rotate-90 scale-80" />

      {/* ── Ambient Glow ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.18 54 / 0.12) 0%, transparent 75%)",
          filter: "blur(90px)",
        }}
      />

      {/* ── Continuous Vertical Side Guide Lines & Outer Border ── */}
      <div className="max-w-6xl mx-auto relative z-10 border border-dashed border-border bg-background/50 backdrop-blur-[2px]">
        {/* Top Boundary Joint Boxes */}
        <GridJoint position="top-left" />
        <GridJoint position="top-right" />

        {/* Bottom Boundary Joint Boxes */}
        <GridJoint position="bottom-left" />
        <GridJoint position="bottom-right" />

        {/* ========================================================
            PART 1: WHY CHOOSE DEVTECH
           ======================================================== */}
        <div id="why-choose" className="p-6 md:p-10 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-dashed border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                Why Choose DevTech
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
                Engineering excellence, architectural security, and performance
                built directly into your digital foundation.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-500 hover:underline underline-offset-4"
            >
              Schedule Architecture Review
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Split Showcase Container */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6">
            {/* Left: 4 Pillar Tabs */}
            <div className="flex flex-col border border-border bg-card">
              {pillars.map((pillar, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setActiveTab(index)}
                    className={`
                      p-6 text-left border-b border-border last:border-b-0 transition-all duration-200 cursor-pointer relative rounded-none
                      ${isActive ? "bg-orange-600 text-white border-l-4 border-l-orange-400" : "hover:bg-secondary/60"}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold ${isActive ? "text-orange-200" : "text-foreground"}`}
                      >
                        {pillar.id}
                      </span>
                      <span
                        className={`font-mono text-xs ${isActive ? "text-white/80" : "text-muted-foreground"}`}
                      >
                        {pillar.metric}
                      </span>
                    </div>
                    <h3
                      className={`text-base font-bold tracking-tight mt-1 ${isActive ? "text-white" : "text-foreground"}`}
                    >
                      {pillar.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Pillar Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border p-8 md:p-10 flex flex-col justify-between rounded-none relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-border bg-secondary flex items-center justify-center text-foreground">
                        <Icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-wider">
                        Pillar {activePillar.id}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold font-mono text-foreground block">
                        {activePillar.metric}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase">
                        {activePillar.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-3 leading-snug">
                    {activePillar.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {activePillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border">
                    {activePillar.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 font-medium"
                      >
                        <span className="text-orange-500 font-mono text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border flex justify-end">
                  <button
                    onClick={() =>
                      document
                        .getElementById("footer")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-orange-500 transition-colors"
                  >
                    Learn More About {activePillar.title}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================
            INTERSECTION DIVIDER LINE WITH CONNECTING JOINT BOXES
           ======================================================== */}
        <div className="relative border-b border-dashed border-border">
          <GridJoint position="center-left" />
          <GridJoint position="center-right" />
        </div>

        {/* ========================================================
            PART 2: TAILORED TO YOUR TEAM
           ======================================================== */}
        <div id="tailored-team" className="p-6 md:p-10 relative">
          {/* Header */}
          <div className="mb-14 text-center border-b border-dashed border-border pb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Tailored to your team
            </h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
              Custom engineering workflows, dedicated senior leads, and flexible
              integration built around your organization.
            </p>
          </div>

          {/* Top Row: Split Table + Cloudflare Signature Orange Highlight Box */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-8">
            {/* Left Table Panel */}
            <div className="bg-card border border-border p-6 md:p-8">
              <span className="font-mono text-xs font-bold text-orange-500 block mb-4 uppercase tracking-wider">
                [ TEAM WORKFLOW INTEGRATION ]
              </span>

              <div className="divide-y divide-border border border-border bg-secondary/30">
                {teamFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="p-4 flex items-center justify-between gap-4 font-mono text-xs"
                  >
                    <div>
                      <span className="font-bold text-foreground block text-sm font-sans mb-0.5">
                        {f.title}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {f.detail}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{f.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 leading-relaxed font-mono">
                Flexibility to scale up or down based on your roadmap
                milestones. No long-term lock-in.
              </p>
            </div>

            {/* Right Solid Cloudflare Orange Card */}
            <div className="bg-orange-600 text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-lg">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative z-10">
                <span className="font-mono text-xs uppercase tracking-wider opacity-80 block mb-3 font-semibold text-white/90">
                  // ENTERPRISE CO-ENGINEERING
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-snug text-white">
                  Your engineering goals, delivered with dedicated precision.
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  We integrate directly with your tools (Jira, GitHub, Slack) to
                  act as an extension of your core team.
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/20">
                <button
                  onClick={() =>
                    document
                      .getElementById("footer")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:underline underline-offset-4"
                >
                  Schedule Team Alignment Call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Column Cards (Dark CLI Box restored) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed border-border bg-card divide-y md:divide-y-0 md:divide-x divide-dashed divide-border">
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 border border-border flex items-center justify-center bg-secondary mb-4 font-mono text-xs font-bold text-foreground">
                  01
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">
                  Dedicated Security &amp; SLA
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  OWASP compliance, SOC2-ready architecture, and 15-minute
                  emergency response windows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-mono text-[11px] text-orange-500 font-semibold">
                <span>● SOC2 Compliant</span>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 border border-border flex items-center justify-center bg-secondary mb-4 font-mono text-xs font-bold text-foreground">
                  02
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">
                  Real-time Telemetry
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Full observability setup with Sentry error tracking, Datadog
                  performance metrics, and uptime logs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-mono text-[11px] text-orange-500 font-semibold">
                <span>● 99.99% Telemetry</span>
              </div>
            </div>

            {/* RESTORED DARK CLI TERMINAL BOX */}
            <div className="p-6 md:p-8 flex flex-col justify-between bg-zinc-950 text-zinc-100 font-mono text-xs border border-zinc-800">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
                  <span className="text-[10px] text-zinc-400">
                    // devtech-cli v2.4
                  </span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                </div>
                <p className="text-zinc-400">
                  $ devtech deploy --env=production
                </p>
                <p className="text-emerald-400 mt-1">✓ Build passed (4.2s)</p>
                <p className="text-emerald-400">
                  ✓ Security scan: 0 vulnerabilities
                </p>
                <p className="text-amber-400 mt-1">
                  🚀 Live at api.devtech.agency
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
                <span>Status: DEPLOYED</span>
                <span className="text-emerald-400">● ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
