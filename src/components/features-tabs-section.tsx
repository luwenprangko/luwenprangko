"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Code,
	Layers,
	Settings2,
	Blocks,
	Zap,
	LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
	{
		id: "design",
		icon: <Layers className="h-5 w-5" />,
		name: "Design",
		title: "Design with Precision",
		description:
			"Create stunning interfaces with our intuitive design tools. Drag-and-drop components, customize layouts, and bring your vision to life with minimal effort.",
		benefits: [
			{
				icon: <Settings2 className="h-5 w-5 text-primary" />,
				text: "Intuitive drag-and-drop interface for rapid prototyping",
			},
			{
				icon: <Blocks className="h-5 w-5 text-primary" />,
				text: "Extensive component library with customizable options",
			},
			{
				icon: <Zap className="h-5 w-5 text-primary" />,
				text: "Real-time preview and responsive design testing",
			},
		],
	},
	{
		id: "build",
		icon: <Code className="h-5 w-5" />,
		name: "Build",
		title: "Build with Confidence",
		description:
			"Transform designs into production-ready code with our powerful build tools. Optimize performance, ensure accessibility, and deploy with confidence.",
		benefits: [
			{
				icon: <Settings2 className="h-5 w-5 text-primary" />,
				text: "Automated code generation with best practices built-in",
			},
			{
				icon: <Blocks className="h-5 w-5 text-primary" />,
				text: "Performance optimization and bundle size analysis",
			},
			{
				icon: <Zap className="h-5 w-5 text-primary" />,
				text: "Integrated testing and accessibility validation",
			},
		],
	},
	{
		id: "analyze",
		icon: <LineChart className="h-5 w-5" />,
		name: "Analyze",
		title: "Analyze with Insight",
		description:
			"Gain valuable insights into user behavior and application performance. Make data-driven decisions to continuously improve your product.",
		benefits: [
			{
				icon: <Settings2 className="h-5 w-5 text-primary" />,
				text: "Comprehensive analytics dashboard with key metrics",
			},
			{
				icon: <Blocks className="h-5 w-5 text-primary" />,
				text: "User behavior tracking and conversion optimization",
			},
			{
				icon: <Zap className="h-5 w-5 text-primary" />,
				text: "Performance monitoring and automated reporting",
			},
		],
	},
];

export default function FeaturesTabsSection() {
	const [activeTab, setActiveTab] = useState("design");

	return (
		<section
			id="features-tabs"
			className="w-full py-12 md:py-24"
			aria-labelledby="features-tabs-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="flex flex-col items-center space-y-4 text-center mb-12">
					<div className="inline-block">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							Features
						</span>
					</div>
					<h2
						id="features-tabs-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
					>
						Powerful Tools for Every Stage
					</h2>
					<p className="text-muted-foreground max-w-[42rem]">
						Our comprehensive platform provides everything you need to design,
						build, and analyze your digital products.
					</p>
				</div>

				<div className="w-full">
					<div className="flex justify-center mb-10">
						<div className="inline-flex p-1 rounded-lg bg-muted overflow-x-auto max-w-full sm:overflow-visible">
							{features.map((feature) => (
								<Button
									key={feature.id}
									variant={activeTab === feature.id ? "default" : "ghost"}
									className={cn(
										"flex items-center gap-2 px-4 py-2 rounded-md transition-all",
										activeTab === feature.id
											? "shadow-sm"
											: "hover:bg-background/80 text-muted-foreground"
									)}
									onClick={() => setActiveTab(feature.id)}
								>
									<div
										className={cn(
											"flex items-center justify-center h-8 w-8 rounded-full",
											activeTab === feature.id
												? "bg-background text-primary"
												: "bg-transparent"
										)}
									>
										{React.cloneElement(feature.icon, { className: "h-5 w-5" })}
									</div>
									<span className="font-medium hidden sm:inline">
										{feature.name}
									</span>
								</Button>
							))}
						</div>
					</div>

					{features.map((feature) => (
						<div
							key={feature.id}
							className={cn(
								"mt-0 transition-all duration-300",
								activeTab === feature.id ? "opacity-100" : "hidden opacity-0"
							)}
						>
							<div className="grid md:grid-cols-2 gap-10 items-center">
								{/* Content */}
								<div className="space-y-6">
									<h3 className="text-2xl font-bold">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>

									<ul className="space-y-4">
										{feature.benefits.map((benefit, index) => (
											<li key={index} className="flex items-start gap-3">
												<div className="shrink-0 mt-1">{benefit.icon}</div>
												<p>{benefit.text}</p>
											</li>
										))}
									</ul>

									<Button className="mt-4 group">
										Learn more
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</div>

								{/* Visual */}
								<div className="border rounded-lg p-6 shadow-sm">
									<div className="aspect-video w-full flex flex-col items-center justify-center space-y-4">
										<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
											{React.cloneElement(feature.icon, {
												className: "h-8 w-8 text-primary",
											})}
										</div>
										<h4 className="text-xl font-medium">{feature.name}</h4>
										<p className="text-center text-muted-foreground max-w-xs">
											{feature.id === "design"
												? "Create beautiful interfaces with our intuitive design tools"
												: feature.id === "build"
												? "Transform designs into production-ready code"
												: "Gain insights into user behavior and performance"}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
