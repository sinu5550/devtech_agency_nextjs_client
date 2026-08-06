"use client";
import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricingData";
import { Check, Zap, ArrowRight } from "lucide-react";

export default function PricingCards({ isYearly }) {
  return (
    <section className="relative mb-24 max-w-6xl mx-auto">
      {/* Outer Dashed Border Container */}
      <div className="relative border border-dashed border-border/80 p-6 md:p-8 bg-card/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div
                  className={`relative p-6 md:p-8 flex flex-col justify-between transition-all duration-200 h-full border ${
                    plan.popular
                      ? "bg-card border-2 border-primary shadow-lg lg:-translate-y-2"
                      : "bg-card border-border hover:border-border/80"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-6 bg-primary text-primary-foreground font-mono text-[11px] font-bold px-3 py-0.5 uppercase tracking-wider border border-primary-foreground/20 shadow-sm">
                      <span>{plan.badge}</span>
                    </div>
                  )}


                  <div>
                    <div className="flex justify-between items-start mb-4 pt-1">
                      <div>
                        <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                          // PLAN 0{pricingPlans.findIndex(p => p.id === plan.id) + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 min-h-8 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Price Calculation */}
                    <div className="my-6 pt-2 border-t border-border">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-extrabold font-mono text-foreground tracking-tight">
                          ${price}
                        </span>
                        <span className="text-muted-foreground text-xs font-mono font-medium uppercase">
                          / month
                        </span>
                      </div>
                      {isYearly && (
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                          Billed annually (${price * 12}/yr)
                        </p>
                      )}
                    </div>

                    <div className="h-px w-full bg-border/80 my-5" />

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-mono font-bold">
                        What's Included:
                      </p>
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-xs md:text-sm text-foreground/90 font-medium leading-normal"
                        >
                          <div className="p-1 rounded-none bg-primary/10 text-primary shrink-0 mt-0.5 border border-primary/20">
                            <Check size={12} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-5 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                        : "bg-background dark:bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground border border-border"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

