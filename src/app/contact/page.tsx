import Contact from "@/components/contact-section";
import Footer from "@/components/footer";
import { notFound } from "next/navigation";

export default function Home() {
  // Test 404 by uncommenting:
  // notFound();
  return (
    <>
      {/* fixed topbar here */}
      <main>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
