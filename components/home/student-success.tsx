"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const successes = [
  {
    name: "Josephine Addae",
    role: "Full-Stack Web Development Student",
    quote: "Learning web development at CodeAugs edTech transformed my coding abilities. The hands-on project reviews gave me real engineering confidence.",
    achievement: "Built production-ready web apps",
    icon: GraduationCap,
  },
  {
    name: "Fiifi Mensah",
    role: "Robotics & Python Student",
    quote: "The practical hardware sessions and programming challenges helped me understand how physical systems work together seamlessly.",
    achievement: "Completed advanced robotics track",
    icon: TrendingUp,
  },
  {
    name: "Demi Alexis",
    role: "Junior Coding Cohort",
    quote: "Coding is so much fun here! I built my very first interactive game and learned how to think like a real programmer.",
    achievement: "Created interactive JavaScript game",
    icon: Award,
  },
];

export const StudentSuccess: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-[var(--border-app)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
            Impact & Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
            Student Success Stories
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
            Hear from our dedicated students who are building remarkable technical skills and achieving their educational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/60 shadow-sm transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="codeaugs" className="text-[10px]">
                      {item.achievement}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--muted-fg)] italic leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-app)] space-y-1">
                  <h4 className="text-sm font-bold text-[var(--fg-app)]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[var(--muted-fg)]">
                    {item.role}
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