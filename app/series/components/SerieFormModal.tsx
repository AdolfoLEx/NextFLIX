"use client";

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

  // Estado del modal para controlar si el modal está abierto
  const [open, setOpen] = useState(false);

  // Estados del formulario y sincronización
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

      setOpen(false); // Cierra el modal tras la petición exitosa

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DialogComponent
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      titulo={serie ? "Editar Serie" : "Agregando serie"}
      sinopsis="Información de la serie"
      size="lg"
      footer={
        <div className="flex gap-3 justify-end w-full pt-4 border-t border-slate-800/80">
          <DialogPrimitive.Close asChild>
            {/* Botón Verde Oscuro (Cancelar) */}
            <button className="px-5 py-2.5 rounded-xl bg-emerald-950/80 text-white border border-emerald-800/60 font-medium text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          {/* Botón Rojo Principal NextFLIX (Guardar) */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-semibold text-sm hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/40 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
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