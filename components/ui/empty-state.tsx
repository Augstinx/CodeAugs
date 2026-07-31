"use client";

import React from "react";
import { FolderOpen } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      icon = <FolderOpen className="h-8 w-8 text-[var(--muted-fg)]" />,
      title,
      description,
      action,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-xl border border-dashed border-[var(--border-app)] bg-[var(--card-bg)]/50",
          className
        )}
        {...props}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/80 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-[var(--fg-app)] mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--muted-fg)] max-w-sm mb-6 leading-relaxed">
            {description}
          </p>
        )}
        {action && <div className="flex items-center gap-3">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = "EmptyState";