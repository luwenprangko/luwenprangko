// "use client";

// export default function Navbar() {
// 	return (
// 		<header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-lg z-50">
// 			<nav className="container flex h-14 items-center justify-between px-4">
// 				<span className="font-medium">luwenprangko</span>
// 			</nav>
// 		</header>
// 	);
// }

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
				<span className="font-medium mx-auto">luwenprangko</span>
			</nav>
		</header>
	);
}
