import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function StudiesSection() {
	return (
		<section
			className="w-full py-12 md:py-24"
			id="studies"
			aria-labelledby="studies-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="flex flex-col items-center space-y-4 text-center mb-12">
					<div className="inline-block">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							Studies
						</span>
					</div>
					<h2
						id="studies-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
					>
						Welcome to our innovative training platform
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="overflow-hidden border rounded-lg">
						<CardContent className="p-6 flex flex-col h-full justify-between">
							<div className="space-y-6">
								<div className="flex justify-end">
									<Link
										href="#"
										className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										aria-label="Learn more about this topic"
									>
										Learn more{" "}
										<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
									</Link>
								</div>
								<p className="text-base md:text-lg">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Dicta, deserunt.
								</p>
							</div>
							<div className="flex items-center justify-between pt-6">
								<p className="text-sm font-medium">Built with</p>
								<div className="flex items-center">
									<svg
										className="h-5 w-5 mr-2"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M2 8.5L12 2L22 8.5V15.5L12 22L2 15.5V8.5Z"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 22V15.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M22 8.5L12 15.5L2 8.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M2 15.5L12 8.5L22 15.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12 2V8.5"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<span className="font-medium">shadcn/ui</span>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="overflow-hidden border rounded-lg">
						<CardContent className="p-6 flex flex-col h-full justify-between">
							<div className="space-y-6">
								<div className="flex justify-end">
									<Link
										href="#"
										className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
										aria-label="Learn more about this topic"
									>
										Learn more{" "}
										<ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
									</Link>
								</div>
								<p className="text-base md:text-lg">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Dicta, deserunt.
								</p>
							</div>
							<div className="flex items-center justify-between pt-6">
								<p className="text-sm font-medium">Styled with</p>
								<div className="flex items-center">
									<svg
										className="h-5 w-5 mr-2 text-[#38BDF8]"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
									>
										<path
											d="M12 6.5C14.5 4 17.5 3 20 3C20 6 19.5 8.5 17.5 11C15.5 13.5 12 15 8.5 15C7.5 15 6.5 14.5 6 14C7.5 12.5 9.5 10.5 12 6.5Z"
											fill="currentColor"
										/>
										<path
											d="M5.5 15C3 17.5 2 20 2 22C4 22 6.5 21 9 19C11.5 17 13 14.5 13 11C13 10 12.5 9 12 8.5C10.5 10 7.5 12.5 5.5 15Z"
											fill="currentColor"
										/>
									</svg>
									<span className="font-medium">tailwindcss</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
