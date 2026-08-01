"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap, ShieldCheck, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Practical, Project-Based Learning",
    description: "Students build real-world applications, websites, and hardware systems from day one rather than just memorising theory.",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors & Mentors",
    description: "Learn directly from experienced full-stack engineers, computer science educators, and industry practitioners.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech Curriculum",
    description: "Comprehensive training spanning coding for kids, modern web development, artificial intelligence, robotics, and cybersecurity.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certifications",
    description: "Earn industry-recognised certificates with verifiable digital IDs and QR codes upon successful programme completion.",
  },
  {
    icon: Users,
    title: "Tailored for All Ages",
    description: "Customized learning pathways designed specifically for kids, teens, school students, and adult professionals.",
  },
  {
    icon: Zap,
    title: "Holistic EdTech Ecosystem",
    description: "Access dedicated student, teacher, and parent portals, tracking tools, and AI learning assistants in one unified platform.",
  },
];

export const WhyCodeAugs: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-app)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
            The CodeAugs Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
            Why Choose CodeAugs edTech?
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
            We combine rigorous computer science standards with modern engineering practices to empower the next generation of technological leaders across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/50 transition-all space-y-4 group"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[var(--fg-app)]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-fg)] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};