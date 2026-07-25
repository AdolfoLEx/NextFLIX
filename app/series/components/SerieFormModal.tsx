import DialogComponent from "@/ui/components/Dialog";
import { useState } from "react";
import { PostSerieRequest } from "../interfaces/serie.interface";

//import { Serie } from "../interfaces/serie.interface";
import usePostSerie from "../hooks/usePostSerie";
import usePatchSerie from "../hooks/usePatchSerie";

import { safeParse } from "valibot";
import { serieSchema } from "../validations/serie.schema";

import * as DialogPrimitive from "@radix-ui/react-dialog";


type Props = {
  trigger: React.ReactNode;
  //serie?: PostSerieRequest;
  //serie?: Serie;
  onSuccess?: () => void;
};
export default function SerieFormModal({ trigger, serie }: Props) {
  const { createSerie, loading, error } = usePostSerie();

  //const { updateSerie} = usePatchSerie();
  const { updateSerie, loading: loadingUpdate, error: errorUpdate } = usePatchSerie();

  // Determinar si hay alguna carga o error activo
  //const loading = loadingCreate || loadingUpdate;
  //const error = errorCreate || errorUpdate;

  const [titulo, setTitulo] = useState(serie?.titulo || "");
  const [genero, setGenero] = useState(serie?.genero || "");
  const [sinopsis, setSinopsis] = useState(serie?.sinopsis || "");
  const [urlPortada, setUrlPortada] = useState(serie?.urlPortada || "");
  const [estreno, setEstreno] = useState(serie?.estreno || 0);
  const [calificacion, setCalificacion] = useState(serie?.calificacion || 0);
  const [plataforma, setPlataforma] = useState(serie?.plataforma || "");

  const handleSubmit = async () => {
    /*
    const payload: PostSerieRequest = {
      title,
      description,
      price,
      category,
      image,
      rating: {
        rate,
        count,
      },
    };
    */
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
        // Modo Edición
        await updateSerie(serie.id, payload);
      } else {
        // Modo Creación
        await createSerie(payload);
      }

      //await createSerie(payload); // ORIGINAL

      // 🟢 6. EJECUTAR CALLBACK PARA NOTIFICAR AL PADRE
      /*
      if (onSuccess) {
          onSuccess();
        }
      */

    } catch {
      // El estado de error se maneja desde el Hook
    }
  };

  return (
    <DialogComponent
      trigger={trigger}
      titulo={serie ? "Editar Serie" : "Agregando series"}
      sinopsis="Información de la serie"
      size="lg"
      footer={
        <div className="flex gap-3">

          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 text-green-600 font-bold border rounded  hover:bg-green-200 transition">Cancelar</button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            
            className=" px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      }
    >
      <div className="m-2 space-y-5 ">
        {
          error && (
            <p className="col-span-1 md:col-span-2 text-red-600">{error}</p>
          )
        }

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
