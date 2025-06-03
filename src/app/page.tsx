import HeroSection from "@/components/hero-section";
import About from "@/components/about-section";
import Timeline from "@/components/timeline-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Projects from "@/components/projects-section";
import { CpuArchitecture } from "@/components/designs/cpu-architecture";
import { notFound } from "next/navigation";

export default function Home() {
  // Test 404 by uncommenting:
  // notFound();
  return (
    <>
      {/* fixed topbar here */}
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        {/* <About />
        <Timeline />
        <div className="flex items-center justify-center">
          <CpuArchitecture text="PROJ" maxSize="max-w-2xl" />
        </div>
        <Projects />
        <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
