"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showBorder, setShowBorder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBorder(window.scrollY > 0);
      setIsMenuOpen(false); // Close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Lock background scroll
    } else {
      document.body.style.overflow = ""; // Unlock scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b font-mono
    ${
      showBorder || isMenuOpen
        ? "bg-background/80 backdrop-blur-lg border-border"
        : "bg-transparent backdrop-blur-0 border-transparent"
    }
  `}>
      <nav className="w-full flex h-14 items-center justify-between px-4 sm:px-20 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-10 w-10"
            aria-label="Logo">
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M73.232,28.96c-5.631,0-10.194,4.567-10.194,10.197 c0,8.74-4.368,13.108-13.11,13.108c-8.737,0-13.111-4.369-13.111-13.108c0-5.63-4.563-10.197-10.194-10.197 s-10.194,4.567-10.194,10.197c0,5.631,4.563,10.198,10.194,10.198c8.742,0,13.111,4.369,13.111,13.111 c0,5.631,4.563,10.194,10.195,10.194c5.63,0,10.2-4.563,10.2-10.194c0-8.742,4.368-13.111,13.104-13.111 c5.637,0,10.2-4.567,10.2-10.198C83.433,33.527,78.869,28.96,73.232,28.96z"
            />
          </svg>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link
            href="/components"
            className="text-sm font-medium transition-colors hover:text-primary">
            Components
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Wrapper */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-14 left-0 w-full bg-background/80 backdrop-blur-lg z-40 px-4 pb-4 border-t border-border transition-all duration-300 overflow-y-auto">
          <nav className="flex flex-col items-center h-screen space-y-6 pt-6">
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link
              href="/components"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}>
              Components
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            {/* Add many links here to test scroll */}
            {/* {Array.from({ length: 30 }, (_, i) => (
              <Link
                key={i}
                href={`/section-${i + 1}`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}>
                Section {i + 1}
              </Link>
            ))} */}
          </nav>
        </div>
      )}
    </header>
  );
}
