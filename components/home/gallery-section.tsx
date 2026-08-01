"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const galleryHighlights = [
  {
    title: "Coding Lab Session",
    category: "Practical Training",
    description: "Students actively engaged in web development and programming exercises during weekend coding bootcamps.",
  },
  {
    title: "Robotics & Hardware Workshop",
    category: "Hands-on Tech",
    description: "Building and testing physical microcontroller circuits and autonomous rover prototypes.",
  },
  {
    title: "FOTS International School Visit",
    category: "Institutional Integration",
    description: "Computing and computer science integration sessions with students in the modern computer laboratory.",
  },
  {
    title: "Student Project Presentation",
    category: "Demo Day",
    description: "Young learners showcasing their fully functional web apps and interactive games to peers and mentors.",
  },
];

export const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-app)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
              Visual Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
              Glimpse Into CodeAugs Life
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
              Explore moments from our practical classes, robotics sessions, school collaborations, and student project showcases.
            </p>
          </div>
          <div>
            <Link href="/content/gallery">
              <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/60 shadow-sm transition-all space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-[var(--blue-codeaugs)]/10 text-[var(--blue-codeaugs)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ImageIcon className="h-5 w-5" />
                  </div>
                  <Badge variant="codeaugs" className="text-[10px]">
                    {item.category}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[var(--fg-app)] group-hover:text-[var(--blue-codeaugs)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--muted-fg)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-app)] flex items-center justify-between text-xs font-semibold text-[var(--muted-fg)]">
                <span>CodeAugs Media</span>
                <Sparkles className="h-3.5 w-3.5 text-[var(--cyan-electric)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};