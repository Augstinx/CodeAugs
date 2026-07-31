"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryText?: string;
}

export const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      className,
      title = "Something went wrong",
      description = "An error occurred while loading this content. Please try again.",
      onRetry,
      retryText = "Try Again",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-xl border border-red-500/20 bg-red-500/5 text-[var(--fg-app)]",
          className
        )}
        {...props}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-500 mb-4">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-[var(--muted-fg)] max-w-md mb-6 leading-relaxed">
          {description}
        </p>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
          >
            {retryText}
          </Button>
        )}
      </div>
    );
  }
);

ErrorState.displayName = "ErrorState";