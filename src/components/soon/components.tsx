"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Components() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold tracking-tighter text-primary">
            COMING SOON
          </h1>
          <h2 className="text-3xl font-semibold">
            Free Components on the Way!
          </h2>
          <h4 className="font-medium text-muted-foreground">
            You're a bit early — but you're in the right place.
          </h4>
          <p className="text-muted-foreground font-mono">
            {/* Our team is crafting a collection of beautifully designed, free
            components to supercharge your next project. From UI elements to
            functional templates — all coming your way very soon. */}
            I’m currently building a collection of free, reusable components —
            crafted with care, clean code, and modern design. Whether you're a
            developer or designer, these will help speed up your workflow.
          </p>
          <p className="text-sm text-muted-foreground">
            🚀 Built with care. Released with love, and open-source!
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => router.back()}
            variant="secondary"
            className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
