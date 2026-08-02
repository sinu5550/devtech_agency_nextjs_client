"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Import local images from public folder
import reactImg from "../../../public/assets/tools/react.png";
import nextImg from "../../../public/assets/tools/next.png";
import nodeImg from "../../../public/assets/tools/node.png";
import typescriptImg from "../../../public/assets/tools/typescript.png";
import javascriptImg from "../../../public/assets/tools/javascript.png";
import pythonImg from "../../../public/assets/tools/python.png";
import mongodbImg from "../../../public/assets/tools/mongodb.png";
import firebaseImg from "../../../public/assets/tools/firebase.png";
import flutterImg from "../../../public/assets/tools/flutter.png";
import androidImg from "../../../public/assets/tools/android.png";
import iosImg from "../../../public/assets/tools/ios.svg";
import figmaImg from "../../../public/assets/tools/figma.svg";
import adobexdImg from "../../../public/assets/tools/adobexd.svg";
import premiereImg from "../../../public/assets/tools/premiere.svg";
import aftereffectsImg from "../../../public/assets/tools/aftereffects.svg";
import gitImg from "../../../public/assets/tools/git.png";
import vscodeImg from "../../../public/assets/tools/vscode.png";

import { TbDeviceImacCode, TbDeviceMobileCode } from "react-icons/tb";
import { PiPenNibBold } from "react-icons/pi";
import { MdOutlineVideoSettings } from "react-icons/md";
import { CgArrowBottomRightR } from "react-icons/cg";

const ToolSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      name: "Web & Fullstack",
      icon: <TbDeviceImacCode className="w-5 h-5" />,
      skills: [
        { name: "React", icon: reactImg },
        { name: "Next.js", icon: nextImg },
        { name: "Node.js", icon: nodeImg },
        { name: "TypeScript", icon: typescriptImg },
        { name: "JavaScript", icon: javascriptImg },
        { name: "Python", icon: pythonImg },
        { name: "MongoDB", icon: mongodbImg },
        { name: "Firebase", icon: firebaseImg },
      ],
    },
    {
      name: "Mobility",
      icon: <TbDeviceMobileCode className="w-5 h-5" />,
      skills: [
        { name: "React Native", icon: reactImg },
        { name: "Flutter", icon: flutterImg },
        { name: "Android", icon: androidImg },
        { name: "iOS", icon: iosImg },
      ],
    },
    {
      name: "UI/UX",
      icon: <PiPenNibBold className="w-5 h-5" />,
      skills: [
        { name: "Figma", icon: figmaImg },
        { name: "Adobe XD", icon: adobexdImg },
      ],
    },
    {
      name: "Video Editing",
      icon: <MdOutlineVideoSettings className="w-5 h-5" />,
      skills: [
        { name: "Premiere Pro", icon: premiereImg },
        { name: "After Effects", icon: aftereffectsImg },
      ],
    },
    {
      name: "Others",
      icon: <CgArrowBottomRightR className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: gitImg },
        { name: "VS Code", icon: vscodeImg },
      ],
    },
  ];

  return (
    <div
      id="expertise"
      className="bg-background py-20 md:py-32 px-4 relative overflow-hidden bg-grid-white"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-primary border-primary/30 glow-blue bg-primary/5 uppercase tracking-widest text-[10px] font-black"
          >
            Our Stack
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-6">
            Technologies We{" "}
            <span className="text-primary glow-text-blue">Master</span>
          </h2>
          <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            We use the industry's most advanced technologies to build{" "}
            <br className="hidden sm:block" /> robust and scalable digital
            products.
          </p>
        </div>

        {/* Optimized Segmented Control - Wrapped for Mobile */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-500 cursor-pointer ${
                activeTab === index
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary border border-primary/30 shadow-lg rounded-xl z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`transition-colors duration-500 ${activeTab === index ? "text-white" : "text-muted-foreground"}`}
              >
                {category.icon}
              </span>
              <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Premium Skill Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {categories[activeTab]?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col items-center justify-center p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-card/50 backdrop-blur-2xl border border-border transition-all duration-500 hover:shadow-lg hover:border-primary/30 hover:-translate-y-3 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] md:rounded-[2rem]" />

                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain filter grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <h3 className="relative z-10 text-xs font-black text-foreground uppercase tracking-[0.2em] text-center transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-[8px] font-black text-muted-foreground/30 md:group-hover:text-primary transition-colors uppercase tracking-widest">
                  Expertise
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-primary rounded-full group-hover:w-20 shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolSection;
