"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFirebase, 
  SiFigma, 
  SiMongodb, 
  SiDjango, 
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript
} from "react-icons/si";

const techLogos = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
];

const LogoTicker = () => {
  return (
    <div className="relative py-16 overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[120px] bg-primary/10 blur-[100px] pointer-events-none" />
      
      {/* Container with subtle glass line */}
      <div className="relative border-y border-white/10 bg-white/[0.03] backdrop-blur-md px-4 overflow-hidden">
        <Marquee 
          gradient={true} 
          gradientColor={[3, 6, 23]} // Matches bg-[#030617]
          gradientWidth={150}
          speed={50}
          className="pb-16 pt-12" // Adjusted padding to ensure marquee content doesn't trigger scroll
          style={{ overflow: 'hidden' }}
        >
          {techLogos.map((logo, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-20 flex items-center justify-center group cursor-pointer h-20"
            >
              <div 
                className="text-4xl md:text-6xl transition-all duration-500 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                style={{ color: "white" }} 
                onMouseEnter={(e) => e.currentTarget.style.color = logo.color}
                onMouseLeave={(e) => e.currentTarget.style.color = "white"}
              >
                {logo.icon}
              </div>
              <span className="ml-6 text-white text-lg md:text-xl font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100 group-hover:glow-text-blue transition-all duration-500">
                {logo.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoTicker;
