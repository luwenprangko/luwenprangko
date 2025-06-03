import Projects from "@/components/projects-section";
import { notFound } from "next/navigation";

export default function Home() {
  // Test 404 by uncommenting:
  // notFound();
  return (
    <>
      {/* fixed topbar here */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Projects />
      </main>
    </>
  );
}
