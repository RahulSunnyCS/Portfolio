"use client";
import { useCursorGlow } from "@/hooks/useCursorGlow";
import { useActiveSection } from "@/hooks/useActiveSection";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const activeSection = useActiveSection(["about", "experience", "skills", "projects", "contact"]);
  useCursorGlow();

  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
