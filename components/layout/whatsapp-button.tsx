"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Default CodeAugs edTech admissions contact line
  const whatsappNumber = "+233200000000"; 
  const message = encodeURIComponent(
    "Hello CodeAugs edTech! I would like to inquire about your programmes and admissions."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Interactive Tooltip Callout */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2.5 bg-[var(--card-bg)] border border-[var(--border-app)] text-[var(--fg-app)] px-3.5 py-2 rounded-xl shadow-lg text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Talk to Admissions on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[var(--muted-fg)] hover:text-[var(--fg-app)] p-0.5 rounded-md transition-colors"
              aria-label="Close tooltip"
            >
              <X className="h-3 w-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Action Launcher */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-colors focus-ring"
      >
        <MessageSquare className="h-5 w-5 fill-current" />
      </motion.a>
    </div>
  );
};