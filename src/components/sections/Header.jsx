"use client";

import React, { useRef, useLayoutEffect } from "react";
import Hero from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoTicker from "./LogoTicker";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const logoEl = logoRef.current;
      const text = logoEl.textContent;
      logoEl.textContent = "";

      const letters = text.split("");
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.opacity = 0;
        logoEl.appendChild(span);
      });

      const typingTl = gsap.timeline();
      typingTl.to(logoEl.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.15,
        ease: "power1.inOut",
        onStart: function () {
          gsap.set(logoEl.querySelectorAll("span"), { y: 20 });
        },
      });

      gsap.to(logoRef.current, {
        y: -30,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "bottom 450px",
          end: "bottom top",
          scrub: true,
        },
        scale: -1,
        yPercent: -150,
        xPercent: -150,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="bg-gradient-to-b from-primary/10 to-transparent">
        <div className="h-[90px]"></div>
        <h1
          ref={logoRef}
          className="logo-main font-bold tracking-wider text-[80px] md:text-[200px] hidden md:flex justify-center mt-12 mb-12 relative z-10 select-none pointer-events-none text-foreground glow-text-blue"
        >
          DevTech.
        </h1>
      </div>
      
      <Hero />
      <LogoTicker />
    </div>
  );
};

export default Header;
