"use client";

//import { useState, useEffect } from "react";
import { useState } from "react";
import DialogComponent from "@/ui/components/Dialog";
import { Serie, PostSerieRequest } from "../interfaces/serie.interface";
import usePostSerie from "../hooks/usePostSerie";
import usePatchSerie from "../hooks/usePatchSerie";
import { safeParse } from "valibot";
import { serieSchema } from "../validations/serie.schema";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Props = {
  trigger: React.ReactNode;
  serie?: Serie;
  onSuccess?: () => void;
};

export default function SerieFormModal({ trigger, serie, onSuccess }: Props) {
  const { createSerie, loading: loadingCreate, error: errorCreate } = usePostSerie();
  const { updateSerie, loading: loadingUpdate, error: errorUpdate } = usePatchSerie();

  const loading = loadingCreate || loadingUpdate;
  const error = errorCreate || errorUpdate;

  // 1. Estados iniciales
  const [prevSerie, setPrevSerie] = useState(serie);
  const [titulo, setTitulo] = useState(serie?.titulo || "");
  const [genero, setGenero] = useState(serie?.genero || "");
  const [sinopsis, setSinopsis] = useState(serie?.sinopsis || "");
  const [urlPortada, setUrlPortada] = useState(serie?.urlPortada || "");
  const [estreno, setEstreno] = useState(serie?.estreno || 2024);
  const [calificacion, setCalificacion] = useState(serie?.calificacion || 0);
  const [plataforma, setPlataforma] = useState(serie?.plataforma || "");

  // 2. Sincronización SÍNCRONA durante el render (¡Sin useEffect!)
  if (serie !== prevSerie) {
    setPrevSerie(serie);
    setTitulo(serie?.titulo || "");
    setGenero(serie?.genero || "");
    setSinopsis(serie?.sinopsis || "");
    setUrlPortada(serie?.urlPortada || "");
    setEstreno(serie?.estreno || 2024);
    setCalificacion(serie?.calificacion || 0);
    setPlataforma(serie?.plataforma || "");
  }

  // 3. Funciones del componente (handleSubmit, etc.)
  // ...

  const handleSubmit = async () => {
    const payload: PostSerieRequest = {
      titulo,
      genero,
      sinopsis,
      urlPortada,
      estreno,
      calificacion,
      plataforma,
    };

    const result = safeParse(serieSchema, payload);
    if (!result.success) {
      const firstError = result.issues[0]?.message;
      alert(firstError);
      return;
    }

    try {
      if (serie?.id) {
        await updateSerie(serie.id, payload);
      } else {
        await createSerie(payload);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch {
      // El estado de error se gestiona mediante los custom hooks
    }
  };

  return (
    <DialogComponent
      trigger={trigger}
      titulo={serie ? "Editar Serie" : "Agregando serie"}
      sinopsis="Información de la serie"
      size="lg"
      footer={
        <div className="flex gap-3">
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 text-green-600 font-bold border rounded hover:bg-green-200 transition">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      }
    >
      <div className="m-2 space-y-5">
        {error && (
          <p className="col-span-1 md:col-span-2 text-red-600 font-medium">{error}</p>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Título
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Género
          </label>
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Sinopsis
          </label>
          <textarea
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
            className="min-h-32 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            URL Portada
          </label>
          <input
            type="text"
            value={urlPortada}
            onChange={(e) => setUrlPortada(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Estreno
          </label>
          <input
            type="number"
            value={estreno}
            onChange={(e) => setEstreno(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Calificación
          </label>
          <input
            type="number"
            value={calificacion}
            onChange={(e) => setCalificacion(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Plataforma
          </label>
          <input
            type="text"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>
      </div>
    </DialogComponent>
  );
}