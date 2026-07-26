"use client";
import { useEffect, useState } from "react";
import SerieCard from "./series/components/SerieCard";
import Banner from "@/ui/components/Banner";
import { getSeries } from "./series/service/serie.service";
import { Serie } from "./series/interfaces/serie.interface";

export default function Home() {
  const [serieAleatoria, setSerieAleatoria] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeries()
      .then((data: Serie[]) => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setSerieAleatoria(data[randomIndex]);
        }
      })
      .catch((err) => console.error("Error al obtener series:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Banner Principal */}
      <Banner />

      {/* Sección del Contenido Destacado con contraste sutil */}
      <main className="relative py-16 px-6 sm:px-12">
        {/* Adorno visual sutil en el fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          {/* Encabezado de la sección */}
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-950/40 rounded-full border border-red-800/30">
              Recomendación del día
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Serie destacada
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto font-light">
              ¿No sabes qué ver? Te sugerimos un título randómico especial para hoy.
            </p>
          </div>

          {/* Contenedor de la Card / Estado de Carga */}
          <div className="mt-12 flex justify-center items-center min-h-[320px]">
            {loading ? (
              /* Skeleton loader animado mientras carga */
              <div className="w-full max-w-sm bg-slate-950/60 border border-slate-800 rounded-2xl p-6 shadow-xl animate-pulse flex flex-col items-center space-y-4">
                <div className="w-full h-64 bg-slate-800/60 rounded-xl" />
                <div className="h-6 bg-slate-800/80 rounded w-3/4" />
                <div className="h-4 bg-slate-800/50 rounded w-1/2" />
              </div>
            ) : serieAleatoria ? (
              /* Card de la Serie Destacada con resplandor suave */
              <div className="w-full max-w-sm relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 to-slate-700/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative">
                  <SerieCard serie={serieAleatoria} />
                </div>
              </div>
            ) : (
              /* Estado vacío */
              <div className="text-center bg-slate-950/40 border border-slate-800/80 rounded-2xl p-8 max-w-md">
                <p className="text-slate-400 text-lg">
                  No hay series disponibles por el momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}