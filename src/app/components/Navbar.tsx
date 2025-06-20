"use client"
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
      <nav className="bg-slate-800/70 backdrop-blur-sm text-white px-2 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:px-8 md:gap-6 md:text-lg max-w-3xl w-full justify-center">
        <Link href="/" className="transition-colors">Home</Link>
        <Link href="/about" className="transition-colors">About</Link>
        <Link href="/docs" className="transition-colors">Documentation</Link>
        <Link href="/boards" className="transition-colors">Boards</Link>
        <Link href="/contact" className="transition-colors">Contact</Link>
        <Link href="/sponsers" className="transition-colors">Sponsors</Link>
      </nav>
    </header>
  );
} 