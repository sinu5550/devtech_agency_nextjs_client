"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const fixedNavRef = useRef(null);
  const logoSmallRef = useRef(null);
  const menuItemsRef = useRef(null);
  const extraDiv = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch on mobile first

  const pathname = usePathname();
  const router = useRouter();

  // Handle Resize for GSAP context
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || isMobile) return; // Skip animation on mobile

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(logoSmallRef.current, { y: -50, opacity: 0 });

      // === FIRST ANIMATION (logo + menu shift) ===
      const mainTL = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top+=165 top",
          end: "+=100",
          scrub: true,
        },
      });

      mainTL.to(logoSmallRef.current, { y: 0, opacity: 1, duration: 1 }, 0);
      mainTL.to(menuItemsRef.current, { x: 100, duration: 1 }, 0);

      const nav = fixedNavRef.current;

      // === BACKGROUND APPEARS WHEN ANIMATION STARTS ===
      ScrollTrigger.create({
        trigger: "body",
        start: "top+=180 top",
        // onEnter: () => {
        //   nav.classList.add(
        //     "bg-black/40",
        //     "dark:bg-black/40",
        //     "bg-white/60",
        //     "backdrop-blur-md",
        //     "border-b",
        //     "border-border",
        //     "shadow-lg",
        //   );
        // },
        onLeaveBack: () => {
          nav.classList.remove(
            "bg-black/40",
            "dark:bg-black/40",
            "bg-white/60",
            "backdrop-blur-md",
            "border-b",
            "border-border",
            "shadow-lg",
          );
        },
      });

      const containerAnim = gsap.timeline({ paused: true });

      containerAnim.to(nav, {
        scaleX: 0.8,
        borderRadius: "14px",
        duration: 0.6,
        ease: "power3.out",
        transformOrigin: "center top",
      });

      containerAnim.call(() => {
        nav.classList.add(
          "container",
          "mx-auto",
          "mt-6",
          "bg-white/5",
          "backdrop-blur-xl",
          "border",
          "border-white/10",
          "glow-blue",
        );
        nav.style.transform = ""; // reset transform
      });

      ScrollTrigger.create({
        trigger: "body",
        start: "top+=275 top",
        onEnter: () => containerAnim.play(),
        onLeaveBack: () => {
          nav.classList.remove(
            "container",
            "mx-auto",
            "mt-6",
            "bg-card/80",
            "dark:bg-white/5",
            "backdrop-blur-xl",
            "border",
            "border-border",
            "glow-blue",
          );
          containerAnim.reverse();
        },
      });
    }, fixedNavRef);

    return () => ctx.revert();
  }, [pathname, isMobile]);

  // Scroll handler
  const handleScroll = (id) => {
    setIsMenuOpen(false); // Close menu on click
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Pages without this navbar
  const hiddenRoutes = ["/about-us", "/pricing", "/our-services"];
  const hideNavbar = hiddenRoutes.includes(pathname);
  if (hideNavbar) return;

  return (
    <div ref={extraDiv}>
      <div
        ref={fixedNavRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 w-full ${isMobile ? "bg-white/80 dark:bg-black/40 backdrop-blur-md border-b border-border shadow-lg" : ""}`}
      >
        <div className="flex justify-between items-center w-full py-4 px-2">
          <div className="flex items-center gap-6">
            <p
              ref={logoSmallRef}
              className={`font-bold text-xl md:text-2xl cursor-pointer text-foreground glow-text-blue ${isMobile ? "opacity-100 translate-y-0" : ""}`}
              onClick={() => handleScroll("home")}
            >
              DevTech.
            </p>
            <nav
              ref={menuItemsRef}
              className="ml-[-100px] hidden md:flex items-center w-max py-3 px-8 bg-card/50 dark:bg-white/5 border border-border backdrop-blur-md gap-12 rounded-full font-semibold text-foreground/80"
            >
              <button
                className="cursor-pointer hover:text-foreground hover:glow-text-blue transition-all"
                onClick={() => handleScroll("services")}
              >
                Services
              </button>
              <button
                className="cursor-pointer hover:text-foreground hover:glow-text-blue transition-all"
                onClick={() => handleScroll("expertise")}
              >
                Expertise
              </button>
              <button
                className="cursor-pointer hover:text-foreground hover:glow-text-blue transition-all"
                onClick={() => handleScroll("about")}
              >
                About
              </button>
              <button
                className="cursor-pointer hover:text-foreground hover:glow-text-blue transition-all"
                onClick={() => handleScroll("footer")}
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle - Desktop */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <button
              onClick={() => handleScroll("footer")}
              className="hidden md:flex group py-3 px-6 bg-primary text-white rounded-full font-bold items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-primary/50"
            >
              Get a Quote
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[80%] max-w-sm bg-background border-l border-border shadow-2xl transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-xl text-foreground glow-text-blue">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-bold">
            <button
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => handleScroll("home")}
            >
              Home
            </button>
            <button
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => handleScroll("services")}
            >
              Services
            </button>
            <button
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => handleScroll("expertise")}
            >
              Expertise
            </button>
            <button
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => handleScroll("about")}
            >
              About
            </button>
            <button
              className="text-left text-muted-foreground hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => handleScroll("footer")}
            >
              Contact
            </button>
          </nav>

          <div className="mt-auto space-y-4">
            {/* Theme Toggle - Mobile */}
            <div className="flex items-center justify-between py-3 px-4 bg-secondary/50 rounded-xl border border-border">
              <span className="text-sm font-semibold text-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <button
              onClick={() => handleScroll("footer")}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-primary/50 active:scale-95 transition-transform"
            >
              Get a Quote
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
