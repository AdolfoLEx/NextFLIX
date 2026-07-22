//import Image from "next/image";
import React from "react";

/*
type SerieCardProps = {
  title: string;
  price: number;
  image: string;
  description: string;
  rating?: number; // Optional property for rating
  category?: string; // Propiedad opcional para la categoría
  actions?: React.ReactNode; // Propiedad opcional para acciones adicionales
};
*/
type SerieCardProps = {
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion?: number; // Opcional la Calificación
  plataforma: string;
};


export default function SerieCard({
  /*
  title,
  price,
  image,
  description,
  rating,
  category,
  actions,
  */
  titulo,
  genero,
  sinopsis,
  urlPortada,
  estreno,
  calificacion,
  plataforma,
}: SerieCardProps) {
  return (
    <div className="flex h-full w-85 flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      {/* 
      <Image
        width={50}
        height={50}
        src={image}
        alt={title}
        className="h-50 w-full object-contain"
      />*/}

      {/* Etiqueta HTML nativa <img> */}
      <img
        src={urlPortada || "/placeholder.png"} // Un fallback opcional por si image viene vacío o null
        alt={titulo}
        className="h-50 w-full object-contain p-2"
        loading="lazy" // Carga diferida nativa del navegador
        onError={(e) => {
          // Si la URL de la imagen falla al cargar o está rota, se reemplaza por un placeholder
          e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
        }}
      />

      <div className="flex flex-1 flex-col p-4">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold leading-snug text-slate-900">
            {titulo}
          </h2>

          {genero && (
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {genero}
            </span>
          )}

          <p className="text-sm leading-6 text-slate-600">
            {sinopsis.slice(0, 80)}...
          </p>

          {calificacion !== undefined && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-500">★</span>
              <span className="text-slate-600">{calificacion.toFixed(1)}</span>
            </div>
          )}

        </div>

        <div className="mt-auto pt-6">
          <p className="text-lg font-bold text-slate-900">{estreno}</p>
        </div>

      </div>

      <div className="flex justify-end gap-2 border-t border-slate-100 px-4 py-4">
        {plataforma}
      </div>

    </div>
  );
}
