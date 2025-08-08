"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

export default function Home() {
  useScrollAnimations();

  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>

      <AboutSection />

      <ContactSection />
    </main>
  );
}
