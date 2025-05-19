"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "purple" | "blue" | "green";
}

export function RainbowButton({
	children,
	className,
	variant = "default",
	...props
}: RainbowButtonProps) {
	// Define color variables based on variant
	const colorVariables = React.useMemo(() => {
		switch (variant) {
			case "purple":
				return {
					"--color-1": "270 100% 63%",
					"--color-2": "300 100% 63%",
					"--color-3": "250 100% 63%",
					"--color-4": "280 100% 63%",
					"--color-5": "260 100% 63%",
				};
			case "blue":
				return {
					"--color-1": "210 100% 63%",
					"--color-2": "230 100% 63%",
					"--color-3": "195 100% 63%",
					"--color-4": "220 100% 63%",
					"--color-5": "200 100% 63%",
				};
			case "green":
				return {
					"--color-1": "120 100% 63%",
					"--color-2": "150 100% 63%",
					"--color-3": "90 100% 63%",
					"--color-4": "140 100% 63%",
					"--color-5": "110 100% 63%",
				};
			default:
				return {
					"--color-1": "0 100% 63%",
					"--color-2": "270 100% 63%",
					"--color-3": "210 100% 63%",
					"--color-4": "195 100% 63%",
					"--color-5": "90 100% 63%",
				};
		}
	}, [variant]);

	// Define animation speed
	const animationStyle = {
		"--speed": "2s",
		...colorVariables,
	} as React.CSSProperties;

	return (
		<>
			<style jsx global>{`
				@keyframes rainbow {
					0% {
						background-position: 0%;
					}
					100% {
						background-position: 200%;
					}
				}

				.animate-rainbow {
					animation: rainbow var(--speed, 2s) infinite linear;
				}
			`}</style>

			<button
				className={cn(
					"group relative inline-flex h-10 animate-rainbow cursor-pointer items-center justify-center rounded-md border-0 bg-[length:200%] px-8 py-2 font-medium transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

					// Text color
					"text-white dark:text-black",

					// before styles (glow effect)
					"before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
					"before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

					// light mode colors
					"bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

					// dark mode colors
					"dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

					className
				)}
				style={animationStyle}
				{...props}
			>
				{children}
			</button>
		</>
	);
}
