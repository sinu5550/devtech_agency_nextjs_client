"use client";

import React from "react";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#030617] border-t border-white/5">
      <footer className="w-full py-20 px-4">
        <div className="mx-auto container max-w-7xl">
          {/* Newsletter Section */}
          <div className="glass-dark rounded-3xl p-10 md:p-14 mb-20 flex justify-between items-center flex-col gap-10 lg:flex-row border border-white/5 glow-blue">
            <div className="block">
              <h3 className="text-3xl md:text-4xl text-white font-black mb-4 text-center lg:text-left tracking-tight">
                Scale Your Success
              </h3>
              <p className="text-slate-400 font-medium text-center lg:text-left text-lg max-w-md">
                Get the latest insights on digital transformation and modern tech solutions.
              </p>
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="text"
                name="email"
                className="w-full sm:w-80 py-4 px-8 h-14 bg-white/5 border border-white/10 shadow-inner rounded-full focus:outline-none focus:border-primary focus:glow-blue text-white font-medium transition-all"
                placeholder="Work email address.."
              />
              <button className="w-full sm:w-auto h-14 py-3.5 px-10 bg-primary shadow-lg rounded-full text-white font-black cursor-pointer hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 min-[690px]:grid-cols-4 lg:grid-cols-6 gap-8 pt-10 pb-16">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link href="/" className="flex justify-center lg:justify-start">
                <h1 className="font-black text-6xl text-white tracking-tighter cursor-pointer glow-text-blue">
                  DevTech.
                </h1>
              </Link>
              <p className="py-8 text-slate-400 font-medium lg:max-w-xs text-center lg:text-left text-lg leading-relaxed">
                <span className="text-white block mb-2 font-bold">The Technology you can trust</span>
                Lead the industry with exceptional Web, Mobile & UI/UX Solutions built for scale.
              </p>

              <button className="flex justify-center items-center gap-3 py-3 px-8 h-12 w-fit bg-white/5 border border-white/10 rounded-full shadow-sm text-md text-white mx-auto transition-all duration-500 hover:bg-primary hover:border-primary hover:glow-blue lg:mx-0 cursor-pointer font-bold">
                <CiMail className="text-xl" /> Contact us
              </button>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">Navigation</h4>
              <ul className="text-sm font-bold transition-all duration-500">
                <li className="mb-6"><Link href="/" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Home</Link></li>
                <li className="mb-6"><Link href="#about" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">About</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Pricing</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Features</Link></li>
                <li className="mb-6"><Link href="#services" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              </ul>
            </div>

            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">Expertise</h4>
              <ul className="text-sm font-bold transition-all duration-500">
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Web Application</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Mobile Apps</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">UI/UX Design</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Video Editing</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Cloud Scaling</Link></li>
              </ul>
            </div>

            {/* Support and Resources similar to standard design but with dark mode text */}
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">Support</h4>
              <ul className="text-sm font-bold transition-all duration-500">
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Help Center</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link></li>
                <li className="mb-6"><Link href="#" className="text-slate-400 hover:text-primary transition-colors cursor-pointer">License</Link></li>
              </ul>
            </div>
            
            <div className="lg:mx-auto text-left">
              <h4 className="text-lg text-white font-black mb-8 uppercase tracking-widest text-xs opacity-50">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:glow-blue transition-all cursor-pointer"><FaTwitter /></Link>
                <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:glow-blue transition-all cursor-pointer"><FaLinkedin /></Link>
                <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:glow-blue transition-all cursor-pointer"><FaGithub /></Link>
              </div>
            </div>
          </div>

          <div className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm font-bold text-slate-500">
              © <Link href="/" className="text-white hover:text-primary transition-colors cursor-pointer">DevTech.</Link> 2026, All rights reserved.
            </span>
            <div className="flex gap-8 text-sm font-bold text-slate-500">
              <Link href="#" className="hover:text-white transition-colors">Term of Service</Link>
              <Link href="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
