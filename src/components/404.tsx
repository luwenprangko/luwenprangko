"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="max-w-2xl text-center space-y-6">
				<div className="space-y-2">
					<h1 className="text-9xl font-bold tracking-tighter text-primary">
						404
					</h1>
					<h2 className="text-4xl font-semibold">Page Not Found</h2>
					<h4 className="font-semibold">Are you lost my friend?</h4>
					<p className="text-muted-foreground">
						Our quantum hamsters took a wrong turn in the server maze. They
						promise to find your page... eventually.
					</p>
				</div>

				<Button onClick={() => router.push("/")} className="gap-2 mx-auto">
					<ArrowLeft className="h-4 w-4" />
					Return to Safety
				</Button>

				<div className="mt-8 border-t pt-6 space-y-2">
					<p className="text-sm text-muted-foreground">
						While you're here, why not:
					</p>
					<div className="flex justify-center gap-4">
						<Button variant="outline" onClick={() => router.refresh()}>
							Refresh Page
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
