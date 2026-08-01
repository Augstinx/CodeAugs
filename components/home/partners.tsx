"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, Shield, Globe, Award, Landmark, Cpu } from "lucide-react";

const partners = [
  { name: "FOTS International School", icon: Building, role: "Primary CS & Robotics Partner" },
  { name: "Accra Tech Hub", icon: Globe, role: "Innovation & Incubation Partner" },
  { name: "Ghana Code Guild", icon: Cpu, role: "Curriculum & Assessment Collaborator" },
  { name: "EdTech Africa Network", icon: Landmark, role: "Regional Educational Alliance" },
  { name: "Silicon Cape Alliance", icon: Shield, role: "Tech Ecosystem Partner" },
  { name: "Future Minds Foundation", icon: Award, role: "Grant & Scholarship Sponsor" },
];

export const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-[var(--bg-app)] border-b border-[var(--border-app)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
            Institutional Collaboration
          </span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--fg-app)]">
            Trusted by Leading Schools & Organizations
          </h2>
          <p className="text-sm text-[var(--muted-fg)] max-w-xl mx-auto">
            We partner with premier educational institutions to deliver robust computer science integration and hands-on technical training.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/50 transition-all text-center group space-y-3"
              >
                <div className="p-3 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[var(--fg-app)] leading-snug">
                    {partner.name}
                  </h4>
                  <p className="text-[10px] text-[var(--muted-fg)]">
                    {partner.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};