"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqList } from "@/data/pricingData";
import { ChevronDown } from "lucide-react";
import { GridJoint } from "@/components/ui/GridJoint";

export default function PricingFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-24 bg-background text-foreground overflow-hidden border-t border-border">
      {/* Background Dot Grid — full width background */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" />

      {/* Outer Container with GridJoint Corner Nodes */}
      <div className="max-w-6xl mx-auto relative z-10 border border-dashed border-border/80 p-6 md:p-10 bg-background/50 backdrop-blur-[2px]">

        <GridJoint position="top-left" />
        <GridJoint position="top-right" />
        <GridJoint position="bottom-left" />
        <GridJoint position="bottom-right" />





        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-4">
            [ FREQUENTLY ASKED ]
          </span>


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            Got Questions?{" "}
            <span className="text-primary underline decoration-primary/40 underline-offset-8">
              We've Got Answers.
            </span>
          </h2>

          <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed font-normal">
            Everything you need to know about our web development process,
            pricing, and post-launch support.
          </p>
        </div>

        {/* Dynamic Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {faqList.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? "bg-card border-primary/60 shadow-sm"
                    : "bg-card/70 hover:bg-card border-border"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left font-semibold text-foreground flex justify-between items-center gap-4 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 bg-primary/10 border border-primary/20 shrink-0">
                      0{index + 1}
                    </span>
                    <span
                      className={`text-sm sm:text-base md:text-lg transition-colors ${
                        isOpen ? "text-primary font-bold" : "group-hover:text-foreground text-foreground/90"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 transition-all duration-200 border border-border ${
                      isOpen
                        ? "bg-primary text-primary-foreground rotate-180 border-primary"
                        : "bg-background dark:bg-secondary text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed border-t border-dashed border-border/80 ml-4 sm:ml-12 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

