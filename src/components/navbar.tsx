"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
	const [showBorder, setShowBorder] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBorder(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 transition-all duration-300 border-b ${
				showBorder ? "border-border" : "border-transparent"
			}`}
		>
			<nav className="w-full flex h-14 items-center justify-center px-4">
				<span className="font-medium mx-auto">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 100 100"
						className="h-10 w-10"
						aria-label="Logo"
					>
						<g>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								fill="currentColor"
								d="M73.232,28.96c-5.631,0-10.194,4.567-10.194,10.197   c0,8.74-4.368,13.108-13.11,13.108c-8.737,0-13.111-4.369-13.111-13.108c0-5.63-4.563-10.197-10.194-10.197   s-10.194,4.567-10.194,10.197c0,5.631,4.563,10.198,10.194,10.198c8.742,0,13.111,4.369,13.111,13.111   c0,5.631,4.563,10.194,10.195,10.194c5.63,0,10.2-4.563,10.2-10.194c0-8.742,4.368-13.111,13.104-13.111   c5.637,0,10.2-4.567,10.2-10.198C83.433,33.527,78.869,28.96,73.232,28.96z"
							/>
						</g>
					</svg>
				</span>
			</nav>
		</header>
	);
}
