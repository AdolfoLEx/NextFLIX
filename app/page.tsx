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
          // Selecciona un índice al azar entre 0 y la longitud del arreglo - 1
          const randomIndex = Math.floor(Math.random() * data.length);
          setSerieAleatoria(data[randomIndex]);
        }
      })
      .catch((err) => console.error("Error al obtener series:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Serie destacada
          </h2>
          <p className="mt-2 text-slate-500 text-center">
            ¿Quieres ver una de nuestras Series?
          </p>

          <div className="mt-10 flex justify-center">
            {loading ? (
              <p className="text-slate-400">Cargando serie destacada...</p>
            ) : serieAleatoria ? (
              <div className="w-full max-w-sm">
                <SerieCard serie={serieAleatoria} />
              </div>
            ) : (
              <p className="text-slate-400">No hay series disponibles por el momento.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}