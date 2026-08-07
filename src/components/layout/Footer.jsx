"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";
import Logo from "../shared/Logo";

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
    <footer
      id="footer"
      className="bg-background border-t border-border select-none"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Logo />
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering digital products with precision and scale. Your
              trusted partner for web, mobile, and cloud solutions.
            </p>

            {/* System status tag — boxy rounded-none */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-card font-mono text-xs text-muted-foreground rounded-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p className="font-mono text-xs font-bold text-orange-500 uppercase tracking-wider mb-5">
              [ SERVICES ]
            </p>
            <ul className="space-y-2.5 font-mono text-xs">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p className="font-mono text-xs font-bold text-orange-500 uppercase tracking-wider mb-5">
              [ COMPANY ]
            </p>
            <ul className="space-y-2.5 font-mono text-xs">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact & Socials */}
          <div>
            <p className="font-mono text-xs font-bold text-orange-500 uppercase tracking-wider mb-5">
              [ GET IN TOUCH ]
            </p>
            <ul className="space-y-2.5 mb-6 font-mono text-xs text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:hello@devtech.agency"
                  className="hover:text-foreground transition-colors"
                >
                  hello@devtech.agency
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>

            {/* Socials — Boxy Buttons */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-none flex items-center justify-center border border-border bg-card text-muted-foreground hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 font-mono text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DevTech Agency. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <span>·</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
