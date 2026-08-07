"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import Logo from "../shared/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/our-services" },
  { label: "Our Team", href: "/our-team" },
  { label: "Pricing", href: "/pricing" },
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

  const handleNavClick = (link) => {
    setIsMenuOpen(false);
    if (link.href) {
      if (link.href === "/" && pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(link.href);
      }
    } else if (link.id) {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          document
            .getElementById(link.id)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 450);
      } else {
        document
          .getElementById(link.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ── Main Navbar ─────────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* ── Logo ── */}
            <Logo />

            {/* ── Center nav items (desktop) — sharp rectangular ── */}
            <nav
              className="hidden md:flex items-center gap-1 border border-border bg-card/60 backdrop-blur-md px-1 py-1 rounded-none"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = link.href && pathname === link.href;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`
                      px-4 py-1.5 text-xs font-semibold uppercase tracking-wider
                      transition-colors duration-200 rounded-none cursor-pointer
                      ${
                        isActive
                          ? "bg-primary text-white font-bold"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* ── Right actions (desktop) ── */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => handleNavClick({ id: "footer" })}
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

            {/* ── Mobile Actions (ThemeToggle + Hamburger) ── */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors rounded-none"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ────────────────────────────── */}
      <div
        className={`
          fixed inset-0 z-60 bg-foreground/20 backdrop-blur-sm
          md:hidden transition-opacity duration-300
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* ── Mobile side drawer — boxy ── */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-70 w-[80%] max-w-xs
          bg-background border-l border-border shadow-2xl
          md:hidden transition-transform duration-300 ease-in-out rounded-none
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer header */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              DevTech<span className="text-primary">.</span>
            </span>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex flex-col gap-2 py-6">
            {NAV_LINKS.map((link) => {
              const isActive = link.href && pathname === link.href;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className={`
                    w-full text-left px-4 py-3 text-sm font-semibold uppercase tracking-wider
                    border border-transparent transition-all rounded-none
                    ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-border"
                    }
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Drawer footer */}
          <div className="mt-auto pt-4 border-t border-border">
            <button
              onClick={() => handleNavClick({ id: "footer" })}
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
