import React from "react";
import AboutHero from "./sections/AboutHero";
import DesignPhilosophy from "./sections/DesignPhilosophy";
import TechArsenal from "./sections/TechArsenal";
import JourneyTimeline from "./sections/JourneyTimeline";

export const metadata = {
  title: "About Us | DevTech",
  description:
    "Meet the DevTech team. We architect digital experiences with clean code and high-end design.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      <AboutHero />
      <DesignPhilosophy />
      <TechArsenal />
      <JourneyTimeline />
    </main>
  );
}
