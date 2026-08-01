"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        message: "Please enter a valid email address.",
        variant: "error",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      toast({
        title: "Subscribed Successfully",
        message: "Thank you for joining the CodeAugs edTech newsletter!",
        variant: "codeaugs",
      });
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--blue-codeaugs)]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[var(--cyan-electric)]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[var(--cyan-electric)] text-xs font-semibold uppercase tracking-wider">
          <Mail className="h-3.5 w-3.5" />
          <span>Stay Informed</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Join Africa's Tech Innovation Community
        </h3>

        <p className="text-sm text-slate-400 leading-relaxed">
          Subscribe to get key insights, curriculum updates, scholarship announcements, and tech industry reports directly to your inbox.
        </p>

        {isSubscribed ? (
          <div className="mt-6 inline-flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="h-5 w-5" />
            <span>You are subscribed! Check your email for updates.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full h-12 px-4 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[var(--blue-codeaugs)] transition-colors"
                required
              />
            </div>
            <Button
              type="submit"
              variant="codeaugs"
              size="lg"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto shrink-0 font-semibold"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};