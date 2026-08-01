"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("codeaugs_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = (type: "all" | "essential") => {
    localStorage.setItem("codeaugs_cookie_consent", type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-app)] shadow-2xl text-[var(--fg-app)] backdrop-blur-md"
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] shrink-0">
              <Cookie className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold flex items-center gap-1.5">
                Privacy & Data Preferences
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
              </h4>
              <p className="text-xs text-[var(--muted-fg)] leading-relaxed">
                We use cookies and essential analytics to optimize your learning experience and secure session state across the CodeAugs platform.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[var(--border-app)] flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => acceptCookies("essential")}
              className="text-xs"
            >
              Essential Only
            </Button>
            <Button
              variant="codeaugs"
              size="sm"
              onClick={() => acceptCookies("all")}
              className="text-xs font-medium"
            >
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};