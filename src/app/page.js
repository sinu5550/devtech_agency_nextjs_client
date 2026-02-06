import React from "react";
import Header from "../components/sections/Header";
import { StatsSection } from "../components/sections/StatsSection";
import ServiceLayout from "../components/sections/ServiceLayout";
import SuccessStories from "../components/sections/SuccessStories";
import ToolSection from "../components/sections/ToolSection";
import About from "../components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-clip">
      <div id="home">
        <Header />
      </div>

      <StatsSection />

      <ServiceLayout />

      <SuccessStories />

      <div id="expertise">
        <ToolSection />
      </div>

      <div id="about">
        <About />
      </div>
    </main>
  );
}
