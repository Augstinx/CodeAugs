"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Laptop, Award } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Assess & Choose",
    description: "Explore our diverse programmes and select the ideal learning track tailored to your age, skill level, and career aspirations.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn & Practice",
    description: "Engage in interactive instructor-led classes, hands-on coding labs, and collaborative team workshops.",
  },
  {
    number: "03",
    icon: Laptop,
    title: "Build Real Projects",
    description: "Apply your knowledge directly by designing and deploying real-world applications, websites, and robotics solutions.",
  },
  {
    number: "04",
    icon: Award,
    title: "Certify & Succeed",
    description: "Graduate with a verified digital certificate, a rich project portfolio, and ongoing career or academic mentorship.",
  },
];

export const LearningJourney: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-app)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
            Step-by-Step Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
            Your Learning Journey With CodeAugs
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
            We guide students seamlessly from absolute beginners to confident tech creators through our structured 4-step pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/50 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-200 dark:text-slate-800 font-mono">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--fg-app)]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted-fg)] leading-relaxed">
                    {step.description}
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