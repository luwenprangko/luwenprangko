"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridLinesProps {
	className?: string;
	color?: string;
	spacing?: number;
	opacity?: number;
	showCircles?: boolean;
	circleSize?: number;
	circlePositions?: Array<{ x: number; y: number }>;
	zIndex?: number;
}

export const GridLines = ({
	className,
	color = "var(--grid-lines-color)",
	spacing = 50,
	opacity = 0.3,
	showCircles = true,
	circleSize = 100,
	circlePositions = [
		{ x: 0, y: 0 },
		{ x: 100, y: 100 },
	],
	zIndex = -1,
}: GridLinesProps) => {
	const [dimensions, setDimensions] = React.useState({
		width: 0,
		height: 0,
	});

	React.useEffect(() => {
		const updateDimensions = () => {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		updateDimensions();
		window.addEventListener("resize", updateDimensions);

		return () => {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);

	const horizontalLines = React.useMemo(() => {
		if (!dimensions.height) return [];
		return Array.from(
			{ length: Math.ceil(dimensions.height / spacing) + 1 },
			(_, i) => i * spacing
		);
	}, [dimensions.height, spacing]);

	const verticalLines = React.useMemo(() => {
		if (!dimensions.width) return [];
		return Array.from(
			{ length: Math.ceil(dimensions.width / spacing) + 1 },
			(_, i) => i * spacing
		);
	}, [dimensions.width, spacing]);

	return (
		<div
			className={cn(
				"absolute inset-0 pointer-events-none [--grid-lines-color:theme(colors.gray.200)] dark:[--grid-lines-color:theme(colors.gray.800)]",
				className
			)}
			style={{ zIndex }}
			aria-hidden="true"
		>
			{/* Horizontal lines */}
			{horizontalLines.map((y) => (
				<div
					key={`h-${y}`}
					className="absolute w-full border-t border-dashed"
					style={{
						top: `${y}px`,
						borderColor: color,
						opacity,
					}}
				/>
			))}

			{/* Vertical lines */}
			{verticalLines.map((x) => (
				<div
					key={`v-${x}`}
					className="absolute h-full border-l border-dashed"
					style={{
						left: `${x}px`,
						borderColor: color,
						opacity,
					}}
				/>
			))}

			{/* Circles */}
			{showCircles &&
				circlePositions.map((pos, index) => (
					<div
						key={`circle-${index}`}
						className="absolute rounded-full border border-dashed"
						style={{
							left: `${pos.x}px`,
							top: `${pos.y}px`,
							width: `${circleSize}px`,
							height: `${circleSize}px`,
							transform: "translate(-50%, -50%)",
							borderColor: color,
							opacity,
						}}
					/>
				))}
		</div>
	);
};
