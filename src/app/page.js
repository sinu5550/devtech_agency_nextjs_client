import React from "react";
import Header from "../components/sections/Header";
import { StatsSection } from "../components/sections/StatsSection";
import CloudflareFeatureSuite from "../components/sections/CloudflareFeatureSuite";
import ServiceLayout from "../components/sections/ServiceLayout";
import TechnicalCapabilities from "../components/sections/TechnicalCapabilities";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import SuccessStories from "../components/sections/SuccessStories";
import ToolSection from "../components/sections/ToolSection";
import Testimonials from "../components/sections/Testimonials";
import CTABanner from "../components/sections/CTABanner";
import About from "../components/sections/About";

export const metadata = {
  title: "DevTech Agency — Engineering Digital Products with Precision & Scale",
  description:
    "DevTech IT Agency engineers high-performance web apps, mobile products, and digital experiences — built for speed, security, and scale.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      {/* Hero */}
      <div id="home">
        <Header />
      </div>

      {/* Stats */}
      <StatsSection />

      {/* Cloudflare Style Features (Why Choose + Tailored To Your Team) */}
      <CloudflareFeatureSuite />

      {/* Services — Bento Grid */}
      <ServiceLayout />

      {/* Technical Capabilities */}
      <TechnicalCapabilities />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Case Studies */}
      <SuccessStories />

      {/* Tech Stack */}
      <div id="expertise">
        <ToolSection />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />

      {/* About / Team */}
      <div id="about">
        <About />
      </div>
    </main>
  );
}
