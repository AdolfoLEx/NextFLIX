import Link from "next/link";
import React from "react";

const sections = [
  {
    title: "Navegación",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/series", label: "Series" },
      { href: "/about", label: "Sobre Nosotros" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidad", label: "Privacidad" },
      { href: "/terminos", label: "Términos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "mailto:hola@misitio.com", label: "hola@misitio.com" },
      { href: "/soporte", label: "Soporte" },
    ],
  },
];

const social = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span className="h-7 w-7 rounded-lg bg-linear-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
                M
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Mi Sitio Web
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Construyendo experiencias digitales simples y efectivas.
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-violet-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-5">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-500 hover:text-violet-700 transition-colors"
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
