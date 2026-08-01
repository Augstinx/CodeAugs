"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Building2, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Students Trained",
    description: "Across kids, teens, and professional cohorts",
  },
  {
    icon: Building2,
    value: "35+",
    label: "Partner Schools",
    description: "Integrating our CS & robotics curricula",
  },
  {
    icon: BookOpen,
    value: "15+",
    label: "Specialised Programmes",
    description: "From block coding to full-stack AI engineering",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success & Completion Rate",
    description: "Equipped with verified project portfolios",
  },
];

export const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/50 border-y border-[var(--border-app)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-app)] shadow-sm hover:border-[var(--blue-codeaugs)]/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--fg-app)]">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--fg-app)]">
                    {stat.label}
                  </p>
                  <p className="text-xs text-[var(--muted-fg)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};