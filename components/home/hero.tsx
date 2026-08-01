"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-[var(--bg-app)]">
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--blue-codeaugs)]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[var(--cyan-electric)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Announcement Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-[var(--border-app)] shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-[var(--cyan-electric)]" />
              <span className="text-xs font-semibold text-[var(--fg-app)]">
                Admissions Now Open for Next Cohort
              </span>
              <Badge variant="codeaugs" className="text-[10px] uppercase px-2 py-0.5">
                Apply Today
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--fg-app)] leading-[1.15]"
            >
              Empowering the Next Generation of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue-codeaugs)] via-[var(--cyan-electric)] to-blue-400">
                Tech Leaders
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[var(--muted-fg)] max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              From early coding fundamentals to enterprise full-stack engineering, AI, and cybersecurity—CodeAugs edTech delivers world-class practical tech education across Africa.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link href="/admissions/apply" className="w-full sm:w-auto">
                <Button
                  variant="codeaugs"
                  size="lg"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                  className="w-full sm:w-auto font-bold shadow-lg shadow-blue-500/20"
                >
                  Explore Programmes
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto font-semibold"
                >
                  Our Vision & Story
                </Button>
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs text-[var(--muted-fg)] font-medium"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Certified Curriculum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 className="h-4 w-4 text-[var(--blue-codeaugs)]" />
                <span>Hands-on Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-[var(--cyan-electric)]" />
                <span>Expert Mentorship</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Code Showcase Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl space-y-4">
              {/* IDE Header controls */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  codeaugs-student.ts
                </span>
              </div>

              {/* Mock Terminal Output */}
              <div className="font-mono text-xs space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <p>
                  <span className="text-purple-400">interface</span>{" "}
                  <span className="text-yellow-300">FutureDeveloper</span> {"{"}
                </p>
                <p className="pl-4 text-slate-400">
                  name: <span className="text-green-400">string</span>;
                </p>
                <p className="pl-4 text-slate-400">
                  skills: <span className="text-green-400">string[]</span>;
                </p>
                <p className="pl-4 text-slate-400">
                  readyForFuture: <span className="text-blue-400">boolean</span>;
                </p>
                <p>{"}"}</p>
                <p className="pt-2 text-slate-500">// Initialize CodeAugs student session</p>
                <p>
                  <span className="text-purple-400">const</span> student:{" "}
                  <span className="text-yellow-300">FutureDeveloper</span> = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-300">"Augustine Martey"</span>,
                </p>
                <p className="pl-4">
                  skills: [<span className="text-emerald-300">"Full-Stack"</span>, <span className="text-emerald-300">"AI"</span>, <span className="text-emerald-300">"Robotics"</span>],
                </p>
                <p className="pl-4">
                  readyForFuture: <span className="text-blue-400">true</span>
                </p>
                <p>{"};"}</p>
                <p className="pt-2 text-emerald-400">
                  &gt; Build status: 100% Ready. Empowering future minds!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};