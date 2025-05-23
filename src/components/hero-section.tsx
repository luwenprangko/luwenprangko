import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import { RainbowButton } from "@/components/buttons/rainbow-button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section
			className="w-full min-h-screen flex flex-col items-center justify-center"
			aria-labelledby="hero-heading"
		>
			<div className="container px-4 md:px-6 space-y-10 md:space-y-16 max-w-5xl mx-auto">
				<div className="flex flex-col items-center text-center space-y-4">
					<div className="inline-block">
						<Link
							href="https://github.com/luwenprangko"
							target="_blank"
							rel="noopener noreferrer"
							className={cn(
								badgeVariants({
									variant: "outline",
								}),
								"rounded-full pl-[3px] py-0.5 px-1 pr-1.5 flex items-center"
							)}
							aria-label="Visit GitHub profile"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
								/>
							</svg>
							luwenprangko
						</Link>
					</div>

					<h1
						id="hero-heading"
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter max-w-3xl"
					>
						Louien Franco
					</h1>

					<p className="text-muted-foreground text-base md:text-xl max-w-[42rem]">
						I build sleek,{" "}
						<span className="text-primary font-medium">
							high-performing front-end
						</span>{" "}
						interfaces that feel just as good as they look. Every line of code
						is written with purpose — speed, style, and seamless UX.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 mt-4">
						<RainbowButton>Know More</RainbowButton>
						<Button size="lg" variant="outline" className="w-full sm:w-auto">
							<span>Tech Stack</span>
						</Button>
					</div>
				</div>

				<div className="space-y-4 text-center">
					<div className="text-sm text-muted-foreground">
						<code className="font-mono">
							$ ~{" "}
							<span>
								git clone https://github.com/luwenprangko/luwenprangko.git
							</span>
						</code>
					</div>
					{/* <p className="text-sm text-muted-foreground font-mono">
						Powering the next generation of digital products
					</p> */}

					{/* <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 256 256"
								className="h-5 w-5 mr-2"
							>
								<rect width="256" height="256" fill="none"></rect>
								<line
									x1="208"
									y1="128"
									x2="128"
									y2="208"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="32"
								></line>
								<line
									x1="192"
									y1="40"
									x2="40"
									y2="192"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="32"
								></line>
							</svg>
							<span className="font-medium">shadcn/ui</span>
						</div>

						<div className="flex items-center">
							<svg
								className="h-5 w-5 mr-2"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path d="M12 2L2 19.5H22L12 2Z" fill="currentColor" />
							</svg>
							<span className="font-medium">Vercel</span>
						</div>

						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 256 228"
							>
								<path
									fill="#00d8ff"
									d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
								/>
							</svg>
							<span className="font-medium">React</span>
						</div>

						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 256 263"
							>
								<defs>
									<linearGradient
										id="logosSupabaseIcon0"
										x1="20.862%"
										x2="63.426%"
										y1="20.687%"
										y2="44.071%"
									>
										<stop offset="0%" stopColor="#249361" />
										<stop offset="100%" stopColor="#3ecf8e" />
									</linearGradient>
									<linearGradient
										id="logosSupabaseIcon1"
										x1="1.991%"
										x2="21.403%"
										y1="-13.158%"
										y2="34.708%"
									>
										<stop offset="0%" />
										<stop offset="100%" stopOpacity="0" />
									</linearGradient>
								</defs>
								<path
									fill="url(#logosSupabaseIcon0)"
									d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
								/>
								<path
									fill="url(#logosSupabaseIcon1)"
									fillOpacity="0.2"
									d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
								/>
								<path
									fill="#3ecf8e"
									d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
								/>
							</svg>
							<span className="font-medium">Supabase</span>
						</div>

						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 256 154"
							>
								<defs>
									<linearGradient
										id="logosTailwindcssIcon0"
										x1="-2.778%"
										x2="100%"
										y1="32%"
										y2="67.556%"
									>
										<stop offset="0%" stopColor="#2298bd" />
										<stop offset="100%" stopColor="#0ed7b5" />
									</linearGradient>
								</defs>
								<path
									fill="url(#logosTailwindcssIcon0)"
									d="M128 0Q76.8 0 64 51.2Q83.2 25.6 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0M64 76.8q-51.2 0-64 51.2q19.2-25.6 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6q51.2 0 64-51.2q-19.2 25.6-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8"
								/>
							</svg>
							<span className="font-medium">Tailwind CSS</span>
						</div>

						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 mr-2"
								viewBox="0 0 256 256"
							>
								<defs>
									<linearGradient
										id="logosNextjsIcon0"
										x1="55.633%"
										x2="83.228%"
										y1="56.385%"
										y2="96.08%"
									>
										<stop offset="0%" stopColor="#fff" />
										<stop offset="100%" stopColor="#fff" stopOpacity="0" />
									</linearGradient>
									<linearGradient
										id="logosNextjsIcon1"
										x1="50%"
										x2="49.953%"
										y1="0%"
										y2="73.438%"
									>
										<stop offset="0%" stopColor="#fff" />
										<stop offset="100%" stopColor="#fff" stopOpacity="0" />
									</linearGradient>
									<circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
								</defs>
								<mask id="logosNextjsIcon3" fill="#fff">
									<use href="#logosNextjsIcon2" />
								</mask>
								<g mask="url(#logosNextjsIcon3)">
									<circle cx="128" cy="128" r="128" />
									<path
										fill="url(#logosNextjsIcon0)"
										d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"
									/>
									<path
										fill="url(#logosNextjsIcon1)"
										d="M163.556 76.8h17.067v102.4h-17.067z"
									/>
								</g>
							</svg>
							<span className="font-medium">NextJS</span>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}
