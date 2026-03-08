"use client";

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";
import ExperienceSection from "./components/ExperienceSection";
import { useTheme } from "./components/ThemeContext";

export default function Home() {
  const { dark } = useTheme();

  return (
      <main className={`flex min-h-screen flex-col ${dark ? 'bg-[#212529]' : 'bg-[#6290C8]'}`}>
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <FooterSection />
      </main>

    );
  }
