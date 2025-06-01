import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import About from "@/components/about-section";
import Timeline from "@/components/timeline-section";
import CodeShowcase from "@/components/code-block";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/toggle-mode";
import Projects from "@/components/projects-section";
import { notFound } from "next/navigation";

export default function Home() {
  // Test 404 by uncommenting:
  // notFound();
  return (
    <>
      <Navbar />
      {/* fixed topbar here */}
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <About />
        <Timeline />
        <Projects />
        {/* <CodeShowcase /> */}
        <ContactSection />
        <ModeToggle />
      </main>
      <Footer />
    </>
  );
}
