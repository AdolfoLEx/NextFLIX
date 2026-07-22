"use client";

import { useState } from "react";
import { Eye, Pencil, PlusIcon, Trash2 } from "lucide-react";
import ProductCard from "@/app/series/components/SerieCard";
import { useGetProduct } from "./hooks/useGetSerie";
import ProductFormModal from "./components/SerieFormModal";
import DeleteProductModal from "./components/DeleteSerieDialog";
import ProductDetailModal from "./components/SerieDetailModal";

export default function Productos() {
  const { products, loading, error } = useGetProduct();
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (loading) {
    return <div className="p-10">Cargando productos...</div>;
  }

  if (error) {
    return <div className="p-10 text-red-500">{error}</div>;
  }

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <div className="mb-6 pl-6 flex justify-end">
        <ProductFormModal
          trigger={
            <button className="flex flex-row gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              <PlusIcon />
              Agregar Producto
            </button>
          }
        />
      </div>
      <div className="flex gap-2.5 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`group relative px-5 py-2.5 rounded-full text-sm font-semibold 
        transition-all duration-300 ease-out
        ${
          selectedCategory === category
            ? "text-white shadow-lg shadow-indigo-500/30 -translate-y-0.5"
            : "text-gray-500 bg-white/60 backdrop-blur-sm border border-gray-200/80 hover:text-gray-900 hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300"
        }`}
          >
            {selectedCategory === category && (
              <span className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 animate-in fade-in zoom-in-95 duration-300" />
            )}
            <span className="relative flex items-center gap-1.5">
              {category}
              {selectedCategory === category && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating?.rate}
            category={product.category}
            actions={
              <div className="flex w-full items-center justify-between gap-3">
                <ProductDetailModal
                  product={product}
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
                  <ProductFormModal
                    product={product}
                    trigger={
                      <button
                        type="button"
                        aria-label="Editar producto"
                        title="Editar"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-b from-indigo-50 to-indigo-100/80 text-indigo-600 shadow-md ring-1 ring-indigo-900/5 transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-100 hover:to-indigo-200/80 hover:text-indigo-700 hover:shadow-lg"
                      >
                        <Pencil size={17} strokeWidth={2} />
                      </button>
                    }
                  />

                  <DeleteProductModal
                    productId={product.id}
                    onDelete={() =>
                      console.log(`Producto con ID ${product.id} eliminado`)
                    }
                    trigger={
                      <button
                        type="button"
                        aria-label="Eliminar producto"
                        title="Eliminar"
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
