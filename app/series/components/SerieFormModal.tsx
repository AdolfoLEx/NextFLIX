import DialogComponent from "@/ui/components/Dialog";
import { useState } from "react";
import { PostSerieRequest } from "../interfaces/serie.interface";

import { Serie } from "../interfaces/serie.interface";
import usePostSerie from "../hooks/usePostSerie";
import usePatchSerie from "../hooks/usePatchSerie";

import { safeParse } from "valibot";
import { serieSchema } from "../validations/serie.schema";


type Props = {
  trigger: React.ReactNode;
  //serie?: PostSerieRequest;
  serie?: Serie;
  onSuccess?: () => void;
};
export default function SerieFormModal({ trigger, serie }: Props) {
  const { createSerie, loading, error } = usePostSerie();

  //const { updateSerie} = usePatchSerie();
  const { updateSerie, loading: loadingUpdate, error: errorUpdate } = usePatchSerie();

  // Determinar si hay alguna carga o error activo
  //const loading = loadingCreate || loadingUpdate;
  //const error = errorCreate || errorUpdate;

  const [title, setTitle] = useState(serie?.title || "");
  const [description, setDescription] = useState(serie?.description || "");
  const [price, setPrice] = useState(serie?.price || 0);

  const [category, setCategory] = useState(serie?.category || "");
  const [image, setImage] = useState(serie?.image || "");
  const [rate, setRate] = useState(serie?.rating?.rate || 0);
  const [count, setCount] = useState(serie?.rating?.count || 0);

  const handleSubmit = async () => {
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
      /*if (onSuccess) {
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
      title={serie ? "Editar Serie" : "Agregar Serie"}
      description="Completa información de la serie"
      size="lg"
      footer={
        <div className="flex gap-3">
          <button className=" px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className=" px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Descripción
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-32 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Precio
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Categoría
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Imagen
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Calificación
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold tracking-wide text-slate-800">
            Número de reseñas
          </label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
        </div>

      </div>
    </DialogComponent>
  );
}
