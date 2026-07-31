"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "alt" | "navy" | "glass";
  containerSize?: "sm" | "md" | "lg" | "full";
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = "default",
      containerSize = "lg",
      eyebrow,
      title,
      description,
      children,
      ...props
    },
    ref
  ) => {
    const backgroundVariants = {
      default: "bg-transparent text-[var(--fg-app)]",
      alt: "bg-slate-100/60 dark:bg-slate-900/40 text-[var(--fg-app)] border-y border-[var(--border-app)]",
      navy: "bg-[var(--navy-primary)] text-white",
      glass: "glass-panel text-[var(--fg-app)]",
    };

    const containerSizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      full: "max-w-none",
    };

    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24 px-4 sm:px-6 lg:px-8", backgroundVariants[variant], className)}
        {...props}
      >
        <div className={cn("mx-auto w-full", containerSizes[containerSize])}>
          {(eyebrow || title || description) && (
            <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto space-y-3">
              {eyebrow && (
                <span className="text-xs font-semibold tracking-widest text-[var(--blue-codeaugs)] uppercase">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-base sm:text-lg text-[var(--muted-fg)] leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";