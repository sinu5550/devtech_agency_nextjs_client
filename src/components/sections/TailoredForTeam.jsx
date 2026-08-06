"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Shield, Terminal, Zap } from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

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

const TailoredForTeam = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-4 border-b border-border relative overflow-hidden">
      {/* ── Micro-Dot Grid Background ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* ── Outer Container with Continuous Vertical Side Guide Lines ── */}
      <div className="max-w-6xl mx-auto relative z-10 border-x border-dashed border-border/80 p-6 md:p-8">
        
        {/* Section Intersection Joint Nodes ONLY on Main Side Guide Lines */}
        <GridJoint position="top-left" />
        <GridJoint position="top-right" />
        <GridJoint position="bottom-left" />
        <GridJoint position="bottom-right" />

        {/* ── Section Header ── */}
        <div className="mb-14 text-center border-b border-dashed border-border/80 pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            Tailored to your team
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Custom engineering workflows, dedicated senior leads, and flexible integration built around your organization.
          </p>
        </div>

        {/* ── Top Row: Split Table + High-Visibility Highlight Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-8">

          {/* Left Table Panel */}
          <div className="bg-card border border-border p-6 md:p-8">
            <span className="font-mono text-xs font-bold text-primary block mb-4 uppercase tracking-wider">
              [ TEAM WORKFLOW INTEGRATION ]
            </span>

            <div className="divide-y divide-border border border-border bg-secondary/20">
              {teamFeatures.map((f, i) => (
                <div key={i} className="p-4 flex items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="font-bold text-foreground block text-sm font-sans mb-0.5">
                      {f.title}
                    </span>
                    <span className="text-muted-foreground text-xs">{f.detail}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{f.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-6 leading-relaxed font-mono">
              Flexibility to scale up or down based on your roadmap milestones. No long-term lock-in.
            </p>
          </div>

          {/* Right Solid High-Visibility Highlight Card */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            {/* Background grid texture inside primary card */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-xs uppercase tracking-wider opacity-80 block mb-3">
                // ENTERPRISE CO-ENGINEERING
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-snug">
                Your engineering goals, delivered with dedicated precision.
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                We integrate directly with your tools (Jira, GitHub, Slack) to act as an extension of your core team.
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-primary-foreground/20">
              <button
                onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider hover:underline underline-offset-4"
              >
                Schedule Team Alignment Call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Row: 3-Column Dashed Border Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed border-border bg-card divide-y md:divide-y-0 md:divide-x divide-dashed divide-border">

          {/* Column 1: Security SLA */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 border border-border flex items-center justify-center bg-secondary/50 mb-4 font-mono text-xs">
                01
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">Dedicated Security &amp; SLA</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                OWASP compliance, SOC2-ready architecture, and 15-minute emergency response windows.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 font-mono text-[11px] text-primary">
              <span>● SOC2 Compliant</span>
            </div>
          </div>

          {/* Column 2: Analytics & Monitoring */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 border border-border flex items-center justify-center bg-secondary/50 mb-4 font-mono text-xs">
                02
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">Real-time Telemetry</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full observability setup with Sentry error tracking, Datadog performance metrics, and uptime logs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 font-mono text-[11px] text-primary">
              <span>● 99.99% Telemetry</span>
            </div>
          </div>

          {/* Column 3: Terminal Code Snippet */}
          <div className="p-6 md:p-8 flex flex-col justify-between bg-zinc-950 text-zinc-100 font-mono text-xs">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
                <span className="text-[10px] text-zinc-400">// devtech-cli v2.4</span>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                </div>
              </div>
              <p className="text-zinc-400">$ devtech deploy --env=production</p>
              <p className="text-emerald-400 mt-1">✓ Build passed (4.2s)</p>
              <p className="text-emerald-400">✓ Security scan: 0 vulnerabilities</p>
              <p className="text-indigo-400 mt-1">🚀 Live at api.devtech.agency</p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 text-[10px] text-zinc-400 flex items-center justify-between">
              <span>Status: DEPLOYED</span>
              <span className="text-emerald-400">● ONLINE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TailoredForTeam;
