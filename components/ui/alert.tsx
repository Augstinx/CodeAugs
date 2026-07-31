"use client";

import React from "react";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error" | "electric";
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", onClose, children, ...props }, ref) => {
    const variantStyles = {
      info: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
      success:
        "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
      warning:
        "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      error: "bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20",
      electric:
        "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
    };

    const icons = {
      info: <Info className="h-5 w-5 text-blue-500 shrink-0" />,
      success: <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />,
      warning: <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />,
      error: <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />,
      electric: <Info className="h-5 w-5 text-cyan-500 shrink-0" />,
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative flex items-start gap-3.5 p-4 rounded-xl border text-sm transition-all",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {icons[variant]}
        <div className="flex-1 space-y-1">{children}</div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md opacity-70 hover:opacity-100 transition-opacity focus-ring"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-xs leading-relaxed opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";