"use client";

import React from "react";
import { Serie } from "../interfaces/serie.interface";

type SerieCardProps = {
  serie: Serie;
  actions?: React.ReactNode;
};

export default function SerieCard({ serie, actions }: SerieCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="relative h-64 w-full overflow-hidden bg-slate-200">
          <img
            src={serie.urlPortada || "/placeholder.jpg"}
            alt={serie.titulo}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              {serie.genero}
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              {serie.estreno}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
            {serie.titulo}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">
            {serie.sinopsis}
          </p>
        </div>
      </div>

      {actions && (
        <div className="p-4 pt-0 border-t border-slate-100 mt-2">
          {actions}
        </div>
      )}
    </div>
  );
}