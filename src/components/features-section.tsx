import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Settings2 } from "lucide-react";

const FeaturesSection = () => {
	return (
		<section
			id="features"
			className="w-full py-12 md:py-24"
			aria-labelledby="features-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="mb-10 md:mb-16">
					<div className="inline-block mb-4">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							Features
						</span>
					</div>
					<h2
						id="features-heading"
						className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-[3.25rem] font-bold tracking-tight"
					>
						Design and Engage: <br className="hidden sm:inline" />
						Build Smarter Spaces and Strategies
					</h2>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
					{/* Card 1 */}
					<div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
						{/* Media 1 Mobile */}
						<div
							className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"
							aria-hidden="true"
						></div>

						<h3 className="text-2xl font-semibold tracking-tight">
							Plan Smarter
						</h3>

						<ul className="mt-6 space-y-4" aria-label="Planning features">
							<li>
								<div className="flex items-start gap-3">
									<Settings2
										className="shrink-0 h-5 w-5 mt-0.5 text-primary"
										aria-hidden="true"
									/>
									<p className="-mt-0.5">
										Design your space with drag-and-drop simplicity—create
										grids, lists, or galleries in seconds.
									</p>
								</div>
							</li>
							<li>
								<div className="flex items-start gap-3">
									<Blocks
										className="shrink-0 h-5 w-5 mt-0.5 text-primary"
										aria-hidden="true"
									/>
									<p className="-mt-0.5">
										Embed polls, quizzes, or forms to keep your audience
										engaged.
									</p>
								</div>
							</li>
						</ul>

						<Button className="mt-12 w-full group">
							Build your strategy
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</div>

					{/* Media 1 Desktop */}
					<div
						className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"
						aria-hidden="true"
					></div>

					{/* Media 2 Desktop */}
					<div
						className="hidden md:block border border-border/80 bg-muted rounded-xl col-span-1 md:col-span-3 lg:col-span-2"
						aria-hidden="true"
					></div>

					{/* Card 2 */}
					<div className="bg-muted rounded-xl pt-6 md:pt-8 pb-6 px-6 col-span-1 md:col-span-2 lg:col-span-1">
						{/* Media 2 Mobile */}
						<div
							className="md:hidden mb-6 aspect-video w-full bg-background border rounded-xl"
							aria-hidden="true"
						></div>

						<h3 className="text-2xl font-semibold tracking-tight">
							Engage Effectively
						</h3>

						<ul className="mt-6 space-y-4" aria-label="Engagement features">
							<li>
								<div className="flex items-start gap-3">
									<Settings2
										className="shrink-0 h-5 w-5 mt-0.5 text-primary"
										aria-hidden="true"
									/>
									<p className="-mt-0.5">
										Customize interactions with intuitive tools—create
										personalized experiences for your audience.
									</p>
								</div>
							</li>
							<li>
								<div className="flex items-start gap-3">
									<Blocks
										className="shrink-0 h-5 w-5 mt-0.5 text-primary"
										aria-hidden="true"
									/>
									<p className="-mt-0.5">
										Track engagement metrics in real-time to optimize your
										content strategy.
									</p>
								</div>
							</li>
						</ul>

						<Button className="mt-12 w-full group">
							Explore engagement tools
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
