"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/series", label: "Series" },
  { href: "/about", label: "Sobre Nosotros" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Logo NextFLIX */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-200">
            N
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            Next<span className="text-red-600">FLIX</span>
          </span>
        </Link>

        {/* Links de navegación */}
        <div className="flex items-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-white bg-slate-800/80"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-[15px] h-0.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}