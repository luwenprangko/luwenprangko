import Link from "next/link";
import { Globe, ThumbsDown, Twitch, Twitter } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full border-t py-12">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center">
					{/* Logo */}
					<div className="mb-8">
						<Link href="/" className="flex items-center justify-center">
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
							<span className="ml-2 text-xl font-bold">luwen</span>
						</Link>
					</div>

					{/* Navigation */}
					<nav className="mb-10">
						<ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
							<li>
								<Link
									href="#overview"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Overview
								</Link>
							</li>
							<li>
								<Link
									href="#features"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#pricing"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href="#careers"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#help"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Help
								</Link>
							</li>
							<li>
								<Link
									href="#privacy"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Privacy
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				{/* Divider */}
				<div className="h-px bg-border my-8" />

				{/* Bottom section */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-muted-foreground mb-4 md:mb-0">
						© {currentYear} Shadcn UI Blocks. All rights reserved.
					</p>

					<div className="flex items-center space-x-4">
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Twitter"
						>
							<Twitter className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Website"
						>
							<Globe className="h-5 w-5" />
							<span className="sr-only">Website</span>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Twitch"
						>
							<Twitch className="h-5 w-5" />
							<span className="sr-only">Twitch</span>
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Dislike"
						>
							<ThumbsDown className="h-5 w-5" />
							<span className="sr-only">Dislike</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
