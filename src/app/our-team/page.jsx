import React from "react";
import TeamHero from "./sections/TeamHero";
import DesignPhilosophy from "./sections/DesignPhilosophy";
import TechArsenal from "./sections/TechArsenal";

export const metadata = {
  title: "Our Team | DevTech",
  description:
    "Meet the DevTech team. We architect digital experiences with clean code and high-end design.",
};

export default function TeamPage() {
  return (
    <main className="mt-20 min-h-screen bg-background text-foreground flex flex-col w-full overflow-hidden">
      <TeamHero />
      <DesignPhilosophy />
      <TechArsenal />
    </main>
  );
}
