import Link from "next/link";
import React from "react";

const sections = [
  {
    title: "Explorar",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/series", label: "Series" },
      { href: "/about", label: "Sobre Nosotros" },
    ],
  },
  {
    title: "Soporte y Legal",
    links: [
      { href: "mailto:soporte@nextflix.com", label: "Contacto" },
      { href: "/privacidad", label: "Privacidad y Términos" },
    ],
  },
];

const social = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Tiktok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Marca / Identidad */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-red-600/30 group-hover:bg-red-500 transition-colors">
                N
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Next<span className="text-red-600">FLIX</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Tu guía definitiva para descubrir y disfrutar de las mejores series y películas en un solo lugar.
            </p>
          </div>

          {/* Secciones de Enlaces */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-red-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NextFLIX. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-400 hover:text-red-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}