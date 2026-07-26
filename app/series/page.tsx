"use client";

import { useState } from "react";
import { Eye, Pencil, PlusIcon, Trash2 } from "lucide-react";
import SerieCard from "@/app/series/components/SerieCard";
import { useGetSerie } from "./hooks/useGetSerie";
import SerieFormModal from "./components/SerieFormModal";
import DeleteSerieModal from "./components/DeleteSerieDialog";
import SerieDetailModal from "./components/SerieDetailModal";

export default function Series() {
  const { series = [], loading, error } = useGetSerie();
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (loading) {
    return <div className="p-10">Cargando series...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  // Obtener géneros únicos filtrando posibles valores undefined/null
  const categories = [
    "all",
    ...new Set(series.map((serie) => serie?.genero).filter(Boolean)),
  ];

  const filteredSeries =
    selectedCategory === "all"
      ? series
      : series.filter((serie) => serie.genero === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <h1 className="mb-4 text-2xl font-bold text-red-500">
        Series disponibles
      </h1>

      <div className="mb-6 flex justify-end pl-6">
        <SerieFormModal
          trigger={
            <button className="flex flex-row gap-2 rounded bg-green-800 px-4 py-2 text-white transition hover:bg-green-700">
              <PlusIcon />
              Agregar Serie
            </button>
          }
        />
      </div>

      {/* Filtro por categorías */}
      <div className="mb-6 flex flex-wrap gap-2.5">
        {categories.map((genero) => (
          <button
            key={genero}
            onClick={() => setSelectedCategory(genero)}
            className={`group relative rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ease-out ${selectedCategory === genero
                ? "-translate-y-0.5 text-white shadow-lg shadow-indigo-500/30"
                : "border border-gray-200/80 bg-white/60 text-gray-600 backdrop-blur-sm hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900 hover:shadow-md"
              }`}
          >
            {selectedCategory === genero && (
              <span className="animate-in fade-in zoom-in-95 absolute inset-0 rounded-full bg-linear-to-r from-red-900 via-red-600 to-red-800 duration-300" />
            )}
            <span className="relative flex items-center gap-1.5">
              {genero}
              {selectedCategory === genero && (
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              )}
            </span>
          </button>
        ))}
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-20">
        {filteredSeries.map((serie) => (
          <SerieCard
            key={serie.id}
            serie={serie}
            actions={
              <div className="flex w-full items-center justify-between gap-3">
                <SerieDetailModal
                  serie={serie}
                  trigger={
                    <button
                      type="button"
                      aria-label="Ver detalles"
                      title="Ver detalles"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-md ring-1 ring-slate-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:text-slate-800 hover:shadow-lg"
                    >
                      <Eye size={17} strokeWidth={2} />
                    </button>
                  }
                />

                <div className="flex items-center gap-2">
                  <SerieFormModal
                    serie={serie}
                    trigger={
                      <button
                        type="button"
                        aria-label="Editar serie"
                        title="Editar"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-b from-indigo-50 to-indigo-100/80 text-indigo-600 shadow-md ring-1 ring-indigo-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-100 hover:to-indigo-200/80 hover:text-indigo-700 hover:shadow-lg"
                      >
                        <Pencil size={18} strokeWidth={2} />
                      </button>
                    }
                  />

                  <DeleteSerieModal
                    serieId={serie.id}
                    onDelete={() =>
                      console.log(`Serie con ID ${serie.id} eliminada`)
                    }
                    trigger={
                      <button
                        type="button"
                        aria-label="Eliminar serie"
                        title="Eliminar serie"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-b from-rose-50 to-rose-100/80 text-rose-600 shadow-md ring-1 ring-rose-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:from-rose-100 hover:to-rose-200/80 hover:text-rose-700 hover:shadow-lg focus:outline-none"
                      >
                        <Trash2 size={17} strokeWidth={2} />
                      </button>
                    }
                  />
                </div>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}