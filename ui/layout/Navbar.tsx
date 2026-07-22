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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-lg bg-linear-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Mi Sitio Web
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-violet-700 bg-violet-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute left-4 right-4 -bottom-px h-0.5 rounded-full bg-linear-to-r from-violet-600 to-indigo-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
