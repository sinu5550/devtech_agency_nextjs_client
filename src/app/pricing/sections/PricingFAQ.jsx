"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqList } from "@/data/pricingData";
import { ChevronDown, Sparkles } from "lucide-react";

export default function PricingFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 relative">
      {/* Background Micro Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mb-4">
          <Sparkles size={14} />
          <span>FREQUENTLY ASKED</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Got Questions?{" "}
          <span className="glow-text-blue text-primary">
            We’ve Got Answers.
          </span>
        </h2>

        <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
          Everything you need to know about our web development process,
          pricing, and post-launch support.
        </p>
      </div>

      {/* Dynamic Accordion List */}
      <div className="space-y-4">
        {faqList.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                isOpen
                  ? "bg-secondary/40 border-primary/50 glow-blue shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                  : "bg-secondary/20 hover:bg-secondary/30 border-border/50 hover:border-border"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left font-semibold text-foreground flex justify-between items-center gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-base md:text-lg transition-colors ${isOpen ? "text-primary font-bold" : "group-hover:text-foreground"}`}
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`p-2 rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "bg-primary text-primary-foreground rotate-180 shadow-md"
                      : "bg-secondary text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 pt-2 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/30 ml-12">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
