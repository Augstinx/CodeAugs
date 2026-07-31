"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showLabel?: boolean;
}

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleProps
>(({ className, showLabel = false, ...props }, ref) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const hasDarkClass = document.documentElement.classList.contains("dark");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("codeaugs-theme");

    if (storedTheme === "dark" || (!storedTheme && (hasDarkClass || prefersDark))) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("codeaugs-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("codeaugs-theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "h-10 w-10 rounded-lg border border-[var(--border-app)] bg-[var(--card-bg)] flex items-center justify-center opacity-0",
          className
        )}
        aria-label="Toggle Theme"
      />
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={cn(
        "h-10 px-3 rounded-lg border border-[var(--border-app)] bg-[var(--card-bg)] text-[var(--fg-app)] flex items-center justify-center gap-2 focus-ring transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
        className
      )}
      {...props}
    >
      <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          <Sun className="h-5 w-5 text-amber-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          <Moon className="h-5 w-5 text-blue-400" />
        </motion.div>
      </div>
      {showLabel && (
        <span className="text-xs font-medium select-none">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </motion.button>
  );
});

ThemeToggle.displayName = "ThemeToggle";