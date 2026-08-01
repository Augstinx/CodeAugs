"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Cpu,
  Shield,
  Bot,
  Terminal,
  Brain,
  GraduationCap,
  Building2,
  Globe,
  Award,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

const PROGRAMMES_MEGA_MENU = [
  {
    title: "K-12 & Youth Tech",
    items: [
      {
        name: "Coding for Kids",
        desc: "Interactive block & Python coding for young minds.",
        href: "/programmes/kids",
        icon: <Code2 className="h-4 w-4 text-[var(--blue-codeaugs)]" />,
      },
      {
        name: "Coding for Teens",
        desc: "Web development, JavaScript & project foundations.",
        href: "/programmes/teens",
        icon: <Terminal className="h-4 w-4 text-[var(--cyan-electric)]" />,
      },
      {
        name: "Robotics & Hardware",
        desc: "Hands-on microcontrollers and robotics engineering.",
        href: "/programmes/robotics",
        icon: <Bot className="h-4 w-4 text-emerald-500" />,
      },
    ],
  },
  {
    title: "Advanced Engineering",
    items: [
      {
        name: "Software Engineering",
        desc: "Full-stack web & mobile production applications.",
        href: "/programmes/software-engineering",
        icon: <Cpu className="h-4 w-4 text-purple-500" />,
      },
      {
        name: "Artificial Intelligence & Data Science",
        desc: "Machine learning models and neural data processing.",
        href: "/programmes/ai-data-science",
        icon: <Brain className="h-4 w-4 text-pink-500" />,
      },
      {
        name: "Cybersecurity",
        desc: "Ethical hacking, network security & defense systems.",
        href: "/programmes/cybersecurity",
        icon: <Shield className="h-4 w-4 text-amber-500" />,
      },
    ],
  },
];

const INSTITUTIONAL_SOLUTIONS = [
  {
    name: "Schools Partnership",
    desc: "Curriculum integration for international and primary schools.",
    href: "/programmes/schools-partnership",
    icon: <GraduationCap className="h-4 w-4 text-blue-500" />,
  },
  {
    name: "Corporate Training",
    desc: "Up-skill technology engineering teams.",
    href: "/programmes/corporate-training",
    icon: <Building2 className="h-4 w-4 text-indigo-500" />,
  },
  {
    name: "Online Learning Platform",
    desc: "Self-paced remote education platform access.",
    href: "/programmes/online-learning",
    icon: <Globe className="h-4 w-4 text-emerald-500" />,
  },
];

export const NavMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-1 font-medium text-sm">
      {/* Home Link */}
      <Link
        href="/"
        className="px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
      >
        Home
      </Link>

      {/* Programmes Mega Menu Trigger */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("programmes")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
        >
          <span>Programmes</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </button>

        <AnimatePresence>
          {activeMenu === "programmes" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-app)] shadow-2xl z-50 grid grid-cols-2 gap-6"
            >
              {PROGRAMMES_MEGA_MENU.map((col, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)]">
                    {col.title}
                  </h4>
                  <div className="space-y-1">
                    {col.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--fg-app)] group-hover:text-[var(--blue-codeaugs)] transition-colors">
                            {item.name}
                          </p>
                          <p className="text-xs text-[var(--muted-fg)] line-clamp-1">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Solutions Dropdown Trigger */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("solutions")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
        >
          <span>Solutions</span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </button>

        <AnimatePresence>
          {activeMenu === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full mt-2 w-80 p-3 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-app)] shadow-2xl z-50 space-y-1"
            >
              {INSTITUTIONAL_SOLUTIONS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg-app)] group-hover:text-[var(--blue-codeaugs)] transition-colors">
                      {item.name}
                    </p>
                    <p className="text-xs text-[var(--muted-fg)] line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* About Link */}
      <Link
        href="/about"
        className="px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
      >
        About
      </Link>

      {/* Admissions Link */}
      <Link
        href="/admissions"
        className="px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
      >
        Admissions
      </Link>

      {/* Blog & Content Link */}
      <Link
        href="/blog"
        className="px-3 py-2 rounded-lg text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
      >
        Blog
      </Link>
    </nav>
  );
};