"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "codeaugs"
    | "electric"
    | "success"
    | "gold"
    | "danger"
    | "outline";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  pulseDot?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      dot = false,
      pulseDot = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center font-medium rounded-full transition-colors shrink-0 select-none";

    const variants = {
      default:
        "bg-[var(--navy-primary)] text-white border border-slate-700/50",
      codeaugs:
        "bg-blue-500/10 text-[var(--blue-codeaugs)] border border-blue-500/20",
      electric:
        "bg-cyan-500/10 text-cyan-600 dark:text-[var(--cyan-electric)] border border-cyan-500/20",
      success:
        "bg-emerald-500/10 text-[var(--green-success)] border border-emerald-500/20",
      gold:
        "bg-amber-500/10 text-amber-600 dark:text-[var(--gold-premium)] border border-amber-500/20",
      danger:
        "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20",
      outline:
        "bg-transparent text-[var(--fg-app)] border border-[var(--border-app)]",
    };

    const sizes = {
      sm: "text-[10px] px-2 py-0.5 gap-1",
      md: "text-xs px-2.5 py-0.5 gap-1.5",
      lg: "text-sm px-3 py-1 gap-2",
    };

    const dotColors = {
      default: "bg-white",
      codeaugs: "bg-[var(--blue-codeaugs)]",
      electric: "bg-[var(--cyan-electric)]",
      success: "bg-[var(--green-success)]",
      gold: "bg-[var(--gold-premium)]",
      danger: "bg-red-500",
      outline: "bg-slate-400",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {(dot || pulseDot) && (
          <span className="relative flex h-2 w-2 items-center justify-center">
            {pulseDot && (
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  dotColors[variant]
                )}
              />
            )}
            <span
              className={cn(
                "relative inline-flex h-1.5 w-1.5 rounded-full",
                dotColors[variant]
              )}
            />
          </span>
        )}
        <span>{children}</span>
      </div>
    );
  }
);

Badge.displayName = "Badge";