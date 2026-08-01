"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHome = true,
  className,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs text-[var(--muted-fg)]", className)}
    >
      <ol className="flex items-center space-x-2">
        {showHome && (
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:text-[var(--fg-app)] transition-colors focus-ring rounded p-0.5"
              aria-label="Home"
            >
              <Home className="h-3.5 w-3.5" />
            </Link>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              {(showHome || index > 0) && (
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              )}
              {isLast || !item.href ? (
                <span
                  className="font-semibold text-[var(--fg-app)] truncate max-w-[200px]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[var(--fg-app)] transition-colors focus-ring rounded p-0.5 truncate max-w-[200px]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};