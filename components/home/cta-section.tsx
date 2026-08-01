"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-app)] relative overflow-hidden border-t border-[var(--border-app)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--blue-codeaugs)]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="h-32 w-32 text-[var(--cyan-electric)]" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-[var(--cyan-electric)]">
              <Sparkles className="h-3.5 w-3.5" />
              Start Your Tech Journey Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Shape the Future with <span className="text-[var(--blue-codeaugs)]">CodeAugs</span>?
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Join Africa's premier EdTech ecosystem. Whether you are a student, parent, or school partner, we have a pathway tailored for you.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Verified Certifications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Expert Mentorship</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Hands-on Projects</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/admissions/apply" className="w-full sm:w-auto">
              <Button
                variant="codeaugs"
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto font-bold shadow-lg shadow-blue-500/20"
              >
                Apply for Admission Now
              </Button>
            </Link>
            <Link href="/admissions/consultation" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-semibold border-slate-800 text-white hover:bg-slate-900"
              >
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};