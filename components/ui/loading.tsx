"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "overlay";
  color?: "codeaugs" | "electric" | "gold" | "white";
  text?: string;
  fullScreen?: boolean;
}

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      className,
      size = "md",
      variant = "spinner",
      color = "codeaugs",
      text,
      fullScreen = false,
      ...props
    },
    ref
  ) => {
    const iconSizes = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-14 w-14",
    };

    const colorVariants = {
      codeaugs: "text-[var(--blue-codeaugs)]",
      electric: "text-[var(--cyan-electric)]",
      gold: "text-[var(--gold-premium)]",
      white: "text-white",
    };

    const spinnerContent = (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn("flex flex-col items-center justify-center gap-3", className)}
        {...props}
      >
        <Loader2 className={cn("animate-spin", iconSizes[size], colorVariants[color])} />
        {text && (
          <p className="text-xs sm:text-sm font-medium text-[var(--muted-fg)] animate-pulse">
            {text}
          </p>
        )}
        <span className="sr-only">Loading...</span>
      </div>
    );

    if (variant === "overlay") {
      return (
        <div
          className={cn(
            "z-50 flex items-center justify-center glass-panel bg-slate-950/40 backdrop-blur-md",
            fullScreen ? "fixed inset-0 w-screen h-screen" : "absolute inset-0 w-full h-full rounded-xl"
          )}
        >
          {spinnerContent}
        </div>
      );
    }

    return spinnerContent;
  }
);

Loading.displayName = "Loading";