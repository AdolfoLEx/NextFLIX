import DialogComponent from "@/ui/components/Dialog";
import { useState } from "react";
import { PostProductRequest } from "../interfaces/product.interface";

//import { Product } from "@/data/products";
import { Product } from "../interfaces/getproduct.interface";
import usePostProduct from "../hooks/usePostProduct";
import usePatchProduct from "../hooks/usePatchProduct";

import { safeParse } from "valibot";
import { productSchema } from "../validations/product.schema";


type Props = {
  trigger: React.ReactNode;
  //product?: PostProductRequest;
  product?: Product;
  onSuccess?: () => void;
};
export default function ProductFormModal({ trigger, product }: Props) {
  const { createProduct, loading, error } = usePostProduct();

  //const { updateProduct} = usePatchProduct();
  const { updateProduct, loading: loadingUpdate, error: errorUpdate } = usePatchProduct();

  // Determinar si hay alguna carga o error activo
  //const loading = loadingCreate || loadingUpdate;
  //const error = errorCreate || errorUpdate;

  const [title, setTitle] = useState(product?.title || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || 0);

  const [category, setCategory] = useState(product?.category || "");
  const [image, setImage] = useState(product?.image || "");
  const [rate, setRate] = useState(product?.rating?.rate || 0);
  const [count, setCount] = useState(product?.rating?.count || 0);

  const handleSubmit = async () => {
    const payload: PostProductRequest = {
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

    const result = safeParse(productSchema, payload);
    if (!result.success) {
      const firstError = result.issues[0]?.message;
      alert(firstError);
      return;
    }

    try {

      if (product?.id) {
        // Modo Edición
        await updateProduct(product.id, payload);
      } else {
        // Modo Creación
        await createProduct(payload);
      }

      //await createProduct(payload); // ORIGINAL

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
      title={product ? "Editar Producto" : "Agregar Producto"}
      description="Completa la información del producto"
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
