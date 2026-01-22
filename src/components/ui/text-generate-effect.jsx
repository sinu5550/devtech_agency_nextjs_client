"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const wordsArray = words.split(" ");
  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                key={word + idx}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
