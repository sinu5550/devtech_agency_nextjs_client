"use client";
import React from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricingData";
import { Check, Zap, ArrowRight } from "lucide-react";

export default function PricingCards({ isYearly }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
      {pricingPlans.map((plan) => {
        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

        return (
          <motion.div
            key={plan.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                plan.popular
                  ? "glass-dark border-2 border-primary glow-blue shadow-[0_0_40px_rgba(59,130,246,0.3)] lg:-translate-y-2"
                  : "glass-dark border border-border/50 hover:border-primary/40"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-mono font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                  <Zap size={12} />
                  <span>{plan.badge}</span>
                </div>
              )}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Price Calculation */}
                <div className="my-6">
                  <span className="text-4xl md:text-5xl font-black text-foreground">
                    ${price}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {" "}
                    / month
                  </span>
                  {isYearly && (
                    <p className="text-[11px] text-emerald-400 font-mono mt-1">
                      Billed annually (${price * 12}/yr)
                    </p>
                  )}
                </div>

                <div className="h-[1px] w-full bg-border/40 my-6" />

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    What's Included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-foreground/90 font-medium"
                    >
                      <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0">
                        <Check size={14} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-blue"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
