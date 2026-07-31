"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "variant" | "size"> {
  variant?:
    | "primary"
    | "codeaugs"
    | "electric"
    | "gold"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer select-none";

    const variants = {
      primary:
        "bg-[var(--navy-primary)] text-[var(--white)] hover:bg-[#0c2a5c] active:bg-[#051329] shadow-sm border border-[rgba(255,255,255,0.1)]",
      codeaugs:
        "bg-[var(--blue-codeaugs)] text-[var(--white)] hover:bg-[#004ada] active:bg-[#003eb8] shadow-md shadow-blue-500/20",
      electric:
        "bg-[var(--cyan-electric)] text-[var(--dark-primary)] font-semibold hover:bg-[#00bbee] active:bg-[#00a8d6] shadow-md shadow-cyan-500/20",
      gold:
        "bg-[var(--gold-premium)] text-[var(--dark-primary)] font-semibold hover:bg-[#ebb038] active:bg-[#d9a029] shadow-md shadow-amber-500/20",
      secondary:
        "bg-slate-200 dark:bg-slate-800 text-[var(--fg-app)] hover:bg-slate-300 dark:hover:bg-slate-700 active:bg-slate-400",
      outline:
        "border border-[var(--border-app)] bg-transparent text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800/60",
      ghost:
        "bg-transparent text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800/60",
      danger:
        "bg-red-600 text-[var(--white)] hover:bg-red-700 active:bg-red-800 shadow-sm",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.015 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";