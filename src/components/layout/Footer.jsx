"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Design & Development", href: "/our-services" },
    { label: "Mobile App Development", href: "/our-services" },
    { label: "Branding & Identity", href: "/our-services" },
    { label: "SEO & Digital Growth", href: "/our-services" },
    { label: "Maintenance & Support", href: "/our-services" },
  ],
  company: [
    { label: "Our Team", href: "/our-team" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/" },
    { label: "Contact", href: "#footer" },
  ],
};

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/sinu5550", label: "GitHub" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                DevTech<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              Engineering digital products with precision and scale. Your trusted partner for web, mobile, and cloud solutions.
            </p>

            {/* System status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              All Systems Operational
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact & Socials */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">
              Get in Touch
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <a href="mailto:hello@devtech.agency" className="hover:text-foreground transition-colors">
                  hello@devtech.agency
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} DevTech Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
