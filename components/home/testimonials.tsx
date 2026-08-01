"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Enrolling my children in CodeAugs edTech has been one of the best educational decisions. Their problem-solving skills and passion for technology have grown exponentially.",
    author: "Mrs. Evelyn Addae",
    role: "Parent",
  },
  {
    quote: "The curriculum bridges the gap between academic theory and practical software engineering. Our students who participate in CodeAugs programmes consistently excel.",
    author: "Mr. Kwadwo Frimpong",
    role: "School Administrator, FOTS International School",
  },
  {
    quote: "The mentorship and hands-on coding challenges gave me the exact skills I needed to build my own web applications from scratch with absolute confidence.",
    author: "Josephine Addae",
    role: "Full-Stack Development Student",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-[var(--border-app)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
            Testimonials & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
            What Parents, Students & Educators Say
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
            Read authentic feedback from our community members whose lives and careers have been positively impacted by CodeAugs edTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[var(--bg-app)] border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/60 shadow-sm transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[var(--muted-fg)] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-app)] space-y-1">
                <h4 className="text-sm font-bold text-[var(--fg-app)]">
                  {item.author}
                </h4>
                <p className="text-xs text-[var(--muted-fg)]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};