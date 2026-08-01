"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, GraduationCap, Shield, BookOpen, ArrowRight, X } from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Programmes" | "Portals" | "Resources";
  href: string;
  icon: React.ReactNode;
}

const QUICK_SEARCH_ITEMS: SearchItem[] = [
  {
    id: "1",
    title: "Software Engineering Programme",
    category: "Programmes",
    href: "/programmes/software-engineering",
    icon: <Code2 className="h-4 w-4 text-[var(--blue-codeaugs)]" />,
  },
  {
    id: "2",
    title: "Artificial Intelligence & Data Science",
    category: "Programmes",
    href: "/programmes/ai-data-science",
    icon: <Code2 className="h-4 w-4 text-[var(--cyan-electric)]" />,
  },
  {
    id: "3",
    title: "Student Portal Dashboard",
    category: "Portals",
    href: "/portal/student",
    icon: <GraduationCap className="h-4 w-4 text-emerald-500" />,
  },
  {
    id: "4",
    title: "Parent Portal Reports",
    category: "Portals",
    href: "/portal/parent",
    icon: <Shield className="h-4 w-4 text-amber-500" />,
  },
  {
    id: "5",
    title: "Admissions & Scholarship Application",
    category: "Resources",
    href: "/admissions/apply",
    icon: <BookOpen className="h-4 w-4 text-purple-500" />,
  },
];

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = QUICK_SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-xl rounded-2xl bg-[var(--card-bg)] border border-[var(--border-app)] shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-[var(--border-app)]">
              <Search className="h-5 w-5 text-[var(--muted-fg)] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programmes, portals, admissions..."
                className="w-full bg-transparent px-3 py-4 text-sm text-[var(--fg-app)] placeholder-[var(--muted-fg)] focus:outline-none"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-[var(--muted-fg)] hover:text-[var(--fg-app)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                <div className="space-y-1">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item.href)}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[var(--fg-app)]">
                            {item.title}
                          </p>
                          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted-fg)]">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[var(--muted-fg)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-[var(--muted-fg)]">
                  No matching results found for "{query}"
                </div>
              )}
            </div>

            {/* Keyboard Footer */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border-t border-[var(--border-app)] flex items-center justify-between text-[11px] text-[var(--muted-fg)]">
              <span>Navigation shortcut</span>
              <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-xs font-mono font-semibold">
                ESC to close
              </kbd>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};