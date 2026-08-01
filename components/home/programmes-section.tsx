"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Shield, Smartphone, Terminal, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programmes = [
  {
    icon: Code,
    title: "Coding for Kids & Teens",
    category: "Young Learners",
    description: "Fun, interactive block coding, Python fundamentals, and game development designed for children ages 6 to 17.",
    href: "/programmes/kids",
    badge: "Most Popular",
  },
  {
    icon: Terminal,
    title: "Full-Stack Software Engineering",
    category: "Professional",
    description: "Master modern web development with TypeScript, React, Node.js, databases, and cloud deployment pipelines.",
    href: "/programmes/software-engineering",
    badge: "Career Track",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Data Science",
    category: "Advanced Tech",
    description: "Explore machine learning algorithms, data analysis, neural networks, and Python-based AI model training.",
    href: "/programmes/ai-data-science",
    badge: "Cutting-Edge",
  },
  {
    icon: Cpu,
    title: "Robotics & Hardware Engineering",
    category: "Hands-on Tech",
    description: "Build physical circuits, program microcontrollers like Arduino, and assemble autonomous robotics systems.",
    href: "/programmes/robotics",
    badge: "Practical",
  },
  {
    icon: Shield,
    title: "Cybersecurity Essentials",
    category: "Security",
    description: "Learn network defense, ethical hacking principles, cryptography, and digital security best practices.",
    href: "/programmes/cybersecurity",
    badge: "High Demand",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    category: "Development",
    description: "Design and code cross-platform mobile applications for iOS and Android using modern frameworks.",
    href: "/programmes/mobile-development",
    badge: "Practical",
  },
];

export const ProgrammesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-[var(--border-app)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
              Educational Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
              Transformative Tech Programmes
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
              Explore our structured learning pathways built for every stage of a student's educational and professional journey.
            </p>
          </div>
          <div>
            <Link href="/programmes">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View All Programmes
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/60 shadow-sm transition-all group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="codeaugs" className="text-[10px]">
                      {prog.badge}
                    </Badge>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-widest text-[var(--muted-fg)] uppercase">
                      {prog.category}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--fg-app)] group-hover:text-[var(--blue-codeaugs)] transition-colors">
                      {prog.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted-fg)] leading-relaxed">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-app)]">
                  <Link href={prog.href} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--blue-codeaugs)] hover:underline">
                    <span>Explore Curriculum</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};