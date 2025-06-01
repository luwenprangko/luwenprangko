"use client";
import { useState } from "react";

const myFramework = [
  {
    id: "nextjs",
    name: "NextJS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
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
            <stop offset="0%" stop-color="#fff" />
            <stop offset="100%" stop-color="#fff" stop-opacity="0" />
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
    codeSnippet: `// app/page.tsx (or app/page.jsx for JS)
export default function Home() {
  return (
    <main>
      <h1>Hello World 🌍</h1>
    </main>
  );
}
`,
  },
];

export default function CodeShowcase() {
  const [activeTab] = useState("nextjs");

  return (
    <div className="container px-4 md:px-6 mx-auto max-w-6xl">
      {myFramework.map((tech) => (
        <div key={tech.id}>
          {/* Center the block using flex and justify-center */}
          <div className="flex justify-center">
            <div className="border rounded-lg shadow-sm overflow-hidden w-full max-w-2xl">
              <div className="bg-muted px-4 py-2 border-b flex items-center justify-between">
                <div className="flex items-center space-x-3 w-24">
                  {tech.icon}
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
                <div className="flex space-x-1">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
              <pre className="bg-zinc-950 text-zinc-100 p-4 overflow-y-auto min-h-[230px] text-sm relative">
                <div className="absolute left-4 select-none text-zinc-600 pr-2 border-r border-zinc-800">
                  {tech.codeSnippet.split("\n").map((_, i) => (
                    <div key={i} className="text-right">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <code className="pl-8 block whitespace-pre">
                  {tech.codeSnippet}
                </code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
