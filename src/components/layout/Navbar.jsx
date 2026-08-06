"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";

const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Expertise", id: "expertise" },
  { label: "About", id: "about" },
  { label: "Contact", id: "footer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll detection for frosted glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleScroll = (id) => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 450);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Pages that have their own navigation
  const hiddenRoutes = ["/about-us", "/pricing", "/our-services"];
  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <>
      {/* ── Main Navbar ─────────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* ── Logo ── */}
            <button
              onClick={() => handleScroll("home")}
              className="flex-shrink-0 text-foreground font-bold text-xl tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="DevTech home"
            >
              DevTech<span className="text-primary">.</span>
            </button>

            {/* ── Center nav items (desktop) — sharp rectangular ── */}
            <nav
              className="hidden md:flex items-center gap-1 border border-border bg-card/60 backdrop-blur-md px-1 py-1 rounded-none"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="
                    px-4 py-1.5 text-xs font-semibold uppercase tracking-wider
                    text-muted-foreground hover:text-foreground
                    transition-colors duration-200 hover:bg-secondary
                    rounded-none cursor-pointer
                  "
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* ── Right actions (desktop) ── */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => handleScroll("footer")}
                className="
                  group flex items-center gap-2
                  px-5 py-2 text-xs font-semibold uppercase tracking-wider
                  bg-foreground text-background
                  hover:bg-foreground/90
                  active:scale-[0.98] transition-all duration-200
                  rounded-none cursor-pointer
                "
              >
                Get a Quote
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* ── Hamburger (mobile) ── */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors rounded-none"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-sm
          md:hidden transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ── Mobile side drawer — boxy ── */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-[70] w-[80%] max-w-xs
          bg-background border-l border-border shadow-2xl
          md:hidden transition-transform duration-300 ease-in-out rounded-none
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
            <span className="font-bold text-lg text-foreground">
              DevTech<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors rounded-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                className="
                  text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider
                  text-muted-foreground hover:text-foreground hover:bg-secondary
                  transition-colors duration-200 rounded-none border-b border-border/50
                "
                onClick={() => handleScroll(id)}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="mt-auto space-y-3 pt-4 border-t border-border">
            <div className="flex items-center justify-between px-4 py-3 bg-secondary border border-border rounded-none">
              <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Theme</span>
              <ThemeToggle />
            </div>
            <button
              onClick={() => handleScroll("footer")}
              className="
                w-full flex items-center justify-center gap-2
                py-3 text-xs font-semibold uppercase tracking-wider
                bg-foreground text-background
                hover:bg-foreground/90 active:scale-[0.98]
                transition-all duration-200 rounded-none
              "
            >
              Get a Quote
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
