"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="h-10 w-10 rounded-xl bg-[var(--blue-codeaugs)] text-white flex items-center justify-center font-bold text-xl shadow-md">
                C<span className="text-[var(--cyan-electric)]">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-tight">
                  CodeAugs <span className="text-[var(--blue-codeaugs)] font-bold">edTech</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                  Empowering Minds
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Africa's premier EdTech ecosystem empowering students, schools, and professionals with world-class tech, engineering, and computer science education.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--cyan-electric)] shrink-0" />
                <span>Accra & Cape Coast, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[var(--cyan-electric)] shrink-0" />
                <span>admissions@codeaugs.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[var(--cyan-electric)] shrink-0" />
                <span>+233 (0) 20 000 0000</span>
              </div>
            </div>
          </div>

          {/* Column 2: Educational Programmes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Programmes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/programmes/kids" className="hover:text-white transition-colors">
                  Coding for Kids
                </Link>
              </li>
              <li>
                <Link href="/programmes/teens" className="hover:text-white transition-colors">
                  Coding for Teens
                </Link>
              </li>
              <li>
                <Link href="/programmes/software-engineering" className="hover:text-white transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/programmes/ai-data-science" className="hover:text-white transition-colors">
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/programmes/cybersecurity" className="hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/programmes/robotics" className="hover:text-white transition-colors">
                  Robotics & Hardware
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portals & Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Portals & Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/portal/student" className="hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link href="/portal/parent" className="hover:text-white transition-colors">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link href="/portal/teacher" className="hover:text-white transition-colors">
                  Teacher Portal
                </Link>
              </li>
              <li>
                <Link href="/portal/admin" className="hover:text-white transition-colors">
                  Admin Portal
                </Link>
              </li>
              <li>
                <Link href="/certificates/verify" className="hover:text-white transition-colors">
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions & Institutional */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Institutional Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/programmes/schools-partnership" className="hover:text-white transition-colors">
                  Schools Partnership
                </Link>
              </li>
              <li>
                <Link href="/programmes/corporate-training" className="hover:text-white transition-colors">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="/admissions/scholarships" className="hover:text-white transition-colors">
                  Scholarships & Grants
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CodeAugs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CodeAugs edTech. All rights reserved.</span>
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-slate-400 transition-colors">
              Security
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Github">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};