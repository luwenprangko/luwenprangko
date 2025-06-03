import Components from "@/components/soon/components";
import { notFound } from "next/navigation";

export default function Home() {
  // Test 404 by uncommenting:
  // notFound();
  return (
    <>
      {/* fixed topbar here */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Components />
      </main>
    </>
  );
}
