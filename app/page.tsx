import React from "react";
import { Hero } from "@/components/home/hero";
import { Statistics } from "@/components/home/statistics";
import { Partners } from "@/components/home/partners";
import { WhyCodeAugs } from "@/components/home/why-codeaugs";
import { ProgrammesSection } from "@/components/home/programmes-section";
import { LearningJourney } from "@/components/home/learning-journey";
import { StudentSuccess } from "@/components/home/student-success";
import { ProjectsSection } from "@/components/home/projects-section";
import { Testimonials } from "@/components/home/testimonials";
import { GallerySection } from "@/components/home/gallery-section";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-app)]">
      <Hero />
      <Statistics />
      <Partners />
      <WhyCodeAugs />
      <ProgrammesSection />
      <LearningJourney />
      <StudentSuccess />
      <ProjectsSection />
      <Testimonials />
      <GallerySection />
      <CTASection />
    </div>
  );
}