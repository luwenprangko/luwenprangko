"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const myFramework = [
	{
		id: "vue",
		name: "Vue",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 256 221"
			>
				<path
					fill="#41B883"
					d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"
				/>
				<path
					fill="#41B883"
					d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"
				/>
				<path
					fill="#35495E"
					d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"
				/>
			</svg>
		),
		title: "Vue Fundamentals",
		description:
			"I chose Vue as my primary UI framework for its progressive architecture and intuitive design. Learn the core concepts of Vue, from components and props to composition API and reactivity. Build interactive UIs with this elegant and performant framework.",
		tutorials: [
			{
				title: "Composition API Basics",
				description: "Create reusable logic with Vue's Composition API",
				level: "Intermediate",
			},
		],
		codeSnippet: `<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

// Props interface
interface CounterProps {
  initialValue?: number
  persistKey?: string
}

// Define props with defaults
const props = withDefaults(defineProps<CounterProps>(), {
  initialValue: 0,
  persistKey: 'counter'
})

// Initialize state from localStorage or use initial value
const count = ref(() => {
  if (typeof window === 'undefined') return props.initialValue
  
  try {
    const item = window.localStorage.getItem(props.persistKey)
    return item ? JSON.parse(item) : props.initialValue
  } catch (error) {
    console.error('Error reading from localStorage:', error)
    return props.initialValue
  }
})

// Computed property for doubled value
const doubledCount = computed(() => count.value * 2)

// Watch for changes and update localStorage
watch(count, (newValue) => {
  try {
    window.localStorage.setItem(props.persistKey, JSON.stringify(newValue))
  } catch (error) {
    console.error('Error writing to localStorage:', error)
  }
})

// Methods
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = props.initialValue

// Lifecycle hooks
onMounted(() => {
  console.log('Counter component mounted')
})
</script>

<template>
  <div class="counter-container">
    <h2>Counter: {{ count }}</h2>
    <p>Doubled: {{ doubledCount }}</p>
    
    <div class="button-group">
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.counter-container {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: #f0f0f0;
}
</style>`,
	},
	{
		id: "nextjs",
		name: "Next.js",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
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
		),
		title: "Next.js App Router",
		description:
			"Next.js is my framework of choice for production applications due to its server-side rendering capabilities and excellent developer experience. Master the latest Next.js App Router for building full-stack React applications with server components, data fetching, and optimized rendering.",
		tutorials: [
			{
				title: "Server Components",
				description:
					"Leverage server components for improved performance and SEO",
				level: "Intermediate",
			},
		],
		codeSnippet: `// app/products/[category]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ProductGrid from '@/components/product-grid';
import ProductFilters from '@/components/product-filters';
import LoadingProductGrid from '@/components/loading-product-grid';
import { getProductsByCategory } from '@/lib/products';

// Metadata generation for SEO
export async function generateMetadata({ params }) {
  const category = params.category;
  
  // Capitalize first letter for title
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  
  return {
    title: \`\${formattedCategory} Products | My Store\`,
    description: \`Browse our selection of \${category} products. Find the best deals on \${category}.\`,
    openGraph: {
      images: [
        {
          url: \`/api/og?title=\${formattedCategory} Products\`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const categories = ['electronics', 'clothing', 'books', 'home', 'sports'];
  
  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  
  // Validate the category
  const validCategories = ['electronics', 'clothing', 'books', 'home', 'sports'];
  if (!validCategories.includes(category)) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)} Products
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters category={category} />
        </div>
        
        <div className="lg:col-span-3">
          <Suspense fallback={<LoadingProductGrid />}>
            <ProductList category={category} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

// This component is separated to leverage Suspense
async function ProductList({ category }) {
  // Fetch products with a 3-second revalidation
  const products = await getProductsByCategory(category, { next: { revalidate: 3 } });
  
  if (products.length === 0) {
    return <p>No products found in this category.</p>;
  }
  
  return <ProductGrid products={products} />;
}`,
	},
];

export default function CodeShowcase() {
	const [activeTab, setActiveTab] = useState("vue");

	return (
		<section
			id="code-showcase"
			className="w-full py-12 md:py-24"
			aria-labelledby="code-showcase-heading"
		>
			<div className="container px-4 md:px-6 mx-auto max-w-6xl">
				<div className="flex flex-col items-center space-y-4 text-center mb-12">
					<div className="inline-block">
						<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-neutral-950 dark:border-neutral-800 dark:text-neutral-50">
							Frameworks
						</span>
					</div>
					<h2
						id="code-showcase-heading"
						className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
					>
						My Personal Choice of Frameworks
					</h2>
					<p className="text-muted-foreground max-w-[42rem]">
						These are the technologies I've chosen for my projects based on
						their performance, developer experience, and community support. I've
						also shared some code snippets to help you familiarize yourself with
						how I use these tools in real-world projects, showcasing practical
						implementations and best practices.
					</p>
				</div>

				<div className="w-full">
					<div className="flex justify-center mb-10">
						<div className="inline-flex p-1 rounded-lg bg-muted overflow-x-auto max-w-full sm:overflow-visible">
							{myFramework.map((tech) => (
								<Button
									key={tech.id}
									variant={activeTab === tech.id ? "default" : "ghost"}
									className={cn(
										"flex items-center gap-2 px-4 py-2 rounded-md transition-all",
										activeTab === tech.id
											? "shadow-sm"
											: "hover:bg-background/80 text-muted-foreground"
									)}
									onClick={() => setActiveTab(tech.id)}
								>
									<div
										className={cn(
											"flex items-center justify-center h-8 w-8 rounded-full",
											activeTab === tech.id
												? "text-primary" // Remove bg-background class
												: "bg-transparent"
										)}
									>
										{tech.icon}
									</div>
									<span className="font-medium hidden sm:inline">
										{tech.name}
									</span>
								</Button>
							))}
						</div>
					</div>

					{myFramework.map((tech) => (
						<div
							key={tech.id}
							className={cn(
								"mt-0 transition-all duration-300",
								activeTab === tech.id ? "opacity-100" : "hidden opacity-0"
							)}
						>
							<div className="grid md:grid-cols-2 gap-10 items-start">
								{/* Content */}
								<div className="space-y-6">
									<h3 className="text-2xl font-bold">{tech.title}</h3>
									<p className="text-muted-foreground">{tech.description}</p>

									<div className="space-y-4">
										<h4 className="font-medium">
											Popular Tutorials I've Created
										</h4>
										<ul className="space-y-4">
											{tech.tutorials.map((tutorial, index) => (
												<li
													key={index}
													className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
												>
													<div className="flex justify-between items-start">
														<h5 className="font-medium">{tutorial.title}</h5>
														<Badge variant="outline" className="ml-2">
															{tutorial.level}
														</Badge>
													</div>
													<p className="text-sm text-muted-foreground mt-1">
														{tutorial.description}
													</p>
												</li>
											))}
										</ul>
									</div>

									<Button className="mt-4 group">
										View all tutorials
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</div>

								{/* Code Example with fixed height and scrolling */}
								<div className="border rounded-lg shadow-sm overflow-hidden">
									<div className="bg-muted px-4 py-2 border-b flex items-center justify-between">
										<div className="flex items-center space-x-2">
											{tech.icon}
											<span className="font-medium text-sm">
												{tech.name} Example
											</span>
										</div>
										<div className="flex space-x-1">
											<div className="h-3 w-3 rounded-full bg-red-500" />
											<div className="h-3 w-3 rounded-full bg-yellow-500" />
											<div className="h-3 w-3 rounded-full bg-green-500" />
										</div>
									</div>
									<pre className="bg-zinc-950 text-zinc-100 p-4 overflow-y-auto h-[350px] text-sm">
										<code>{tech.codeSnippet}</code>
									</pre>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
