"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavMenu } from "@/components/layout/nav-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { SearchModal } from "@/components/layout/search-modal";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--card-bg)]/85 backdrop-blur-md border-b border-[var(--border-app)] shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2.5 focus-ring rounded-lg">
            <div className="h-10 w-10 rounded-xl bg-[var(--navy-primary)] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-900/20">
              C<span className="text-[var(--cyan-electric)]">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-[var(--fg-app)] leading-tight">
                CodeAugs <span className="text-[var(--blue-codeaugs)] font-bold">edTech</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[var(--muted-fg)] uppercase">
                Empowering Minds
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavMenu />

          {/* Action CTAs & Controls */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border-app)] bg-slate-100/50 dark:bg-slate-800/50 text-[var(--muted-fg)] hover:text-[var(--fg-app)] transition-colors text-xs font-medium"
              aria-label="Search platform"
            >
              <Search className="h-4 w-4" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono font-semibold border border-slate-200 dark:border-slate-600">
                ⌘K
              </kbd>
            </button>

            {/* Theme Switcher */}
            <ThemeToggle />

            {/* Portal Action CTA */}
            <Link href="/portal/student" className="hidden sm:block">
              <Button
                variant="codeaugs"
                size="sm"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                className="font-semibold text-xs"
              >
                Portal Login
              </Button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl lg:hidden text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-[var(--border-app)] bg-[var(--card-bg)] px-6 py-6 space-y-4 shadow-xl"
            >
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Home
                </Link>
                <Link
                  href="/programmes"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Programmes
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  About Us
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Admissions
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl font-medium text-[var(--fg-app)] hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Blog & Insights
                </Link>
              </div>

              <div className="pt-4 border-t border-[var(--border-app)] space-y-2">
                <Link
                  href="/portal/student"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button variant="codeaugs" className="w-full font-semibold">
                    Student & Parent Portal
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Command-K Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};