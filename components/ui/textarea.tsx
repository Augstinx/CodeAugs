"use client";

import React, { useId } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      resize = "vertical",
      id,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

    const resizeStyles = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-[var(--fg-app)] select-none"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full px-3.5 py-2 text-sm rounded-lg bg-[var(--bg-app)] border text-[var(--fg-app)] placeholder:text-[var(--muted-fg)] focus-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
            resizeStyles[resize],
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-[var(--border-app)] hover:border-slate-400 dark:hover:border-slate-600 focus:border-[var(--blue-codeaugs)]",
            className
          )}
          {...props}
        />
        {error ? (
          <p id={errorId} className="text-xs text-red-500 font-medium">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-[var(--muted-fg)]">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";