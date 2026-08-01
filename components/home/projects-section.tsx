"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Web Application",
    student: "Josephine Addae",
    category: "Full-Stack Web",
    description: "A fully responsive e-commerce platform built with React, Tailwind CSS, and Supabase featuring cart management and secure checkout.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    title: "Autonomous Obstacle Avoiding Rover",
    student: "Fiifi Mensah",
    category: "Robotics & Hardware",
    description: "An Arduino-powered robotic vehicle equipped with ultrasonic sensors to navigate and avoid obstacles dynamically in real time.",
    tags: ["Arduino", "C++", "Sensors", "Hardware"],
  },
  {
    title: "Interactive Python Quiz Game",
    student: "Demi Alexis",
    category: "Coding for Kids",
    description: "A fun, browser-based trivia game built with JavaScript and modern CSS, testing players on general science and basic math.",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM"],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg-app)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[var(--blue-codeaugs)] uppercase">
              Student Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--fg-app)]">
              Built by CodeAugs Students
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted-fg)] leading-relaxed">
              Explore real-world software applications, websites, and hardware projects built by our talented students during their training.
            </p>
          </div>
          <div>
            <Link href="/content/student-projects">
              <Button variant="outline" rightIcon={<Layers className="h-4 w-4" />}>
                View Project Gallery
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-[var(--border-app)] hover:border-[var(--blue-codeaugs)]/60 shadow-sm transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="codeaugs" className="text-[10px]">
                    {project.category}
                  </Badge>
                  <span className="text-xs font-medium text-[var(--muted-fg)]">
                    By {project.student}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--fg-app)]">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted-fg)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--border-app)]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-[10px] font-mono text-[var(--fg-app)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};