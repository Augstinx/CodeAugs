"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--card-bg)] shadow-xl border border-[var(--border-app)] text-[var(--fg-app)] hover:text-[var(--blue-codeaugs)] transition-colors focus-ring cursor-pointer group"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute h-full w-full -rotate-90 p-1" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              className="stroke-slate-200 dark:stroke-slate-800"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              className="stroke-[var(--blue-codeaugs)] transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};