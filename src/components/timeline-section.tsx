import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
	{
		title: "Frontend Developer (Intern)",
		company: "STEER Hub",
		period: "2025",
		description:
			"Developed a Learning Management System (LMS) using React, NextJS, TypeScript, Shadcn UI, and TailwindCSS for the Trioe Playbook quiz app. Additionally, I created a quiz app for MR. Med project using React, NextJS, TypeScript, Shadcn UI, and TailwindCSS also.",
		technologies: ["React", "NextJS", "TypeScript", "Shadcn UI", "TailwindCSS"],
	},
];

export default function Timeline() {
	return (
		<section
			className="w-full py-12 md:py-24"
			id="experience"
			aria-labelledby="experience-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="flex flex-col items-center space-y-4 text-center mb-12">
					<div className="inline-block">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							Experience
						</span>
					</div>
					<h2
						id="experience-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
					>
						Professional Journey
					</h2>
				</div>

				<div className="max-w-screen-sm mx-auto">
					<div className="relative ml-3">
						{/* Timeline line */}
						<div
							className="absolute left-0 top-4 bottom-0 border-l-2"
							aria-hidden="true"
						/>

						{experiences.map(
							(
								{ company, description, period, technologies, title },
								index
							) => (
								<div key={index} className="relative pl-8 pb-12 last:pb-0">
									{/* Timeline dot */}
									<div
										className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background"
										aria-hidden="true"
									/>

									{/* Content */}
									<div className="space-y-3">
										<div className="flex items-center gap-3">
											<div
												className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center"
												aria-hidden="true"
											>
												<Building2 className="h-5 w-5 text-muted-foreground" />
											</div>
											<span className="text-base sm:text-lg font-semibold">
												{company}
											</span>
										</div>
										<div>
											<h3 className="text-lg sm:text-xl font-medium">
												{title}
											</h3>
											<div className="flex items-center gap-2 mt-1 text-sm">
												<Calendar className="h-4 w-4" aria-hidden="true" />
												<span>{period}</span>
											</div>
										</div>
										<p className="text-sm sm:text-base text-muted-foreground">
											{description}
										</p>
										<div
											className="flex flex-wrap gap-2"
											aria-label={`Technologies used at ${company}`}
										>
											{technologies.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="rounded-full"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
