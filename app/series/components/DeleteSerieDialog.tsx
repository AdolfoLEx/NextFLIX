"use client";

import { useState } from "react";
import DialogComponent from "@/ui/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useDeleteSerie from "../hooks/useDeleteSerie";

type Props = {
  trigger: React.ReactNode;
  serieId: number;
  onDelete: (id: number) => void;
};

export default function DeleteSerieModal({
  trigger,
  serieId,
  onDelete,
}: Props) {
  const [open, setOpen] = useState(false);
  
  // Usamos únicamente la función exportada por tu hook
  const { removeSerie, loading, error } = useDeleteSerie();

  const handleDelete = async () => {
    try {
      await removeSerie(serieId);
      setOpen(false); // Cierra la modal
      onDelete(serieId); // Notifica al padre para actualizar la lista
    } catch {
      console.error("Error al eliminar serie", error);
    }
  };

  return (
    <DialogComponent
      open={open}
      onOpenChange={setOpen}
      trigger={trigger}
      titulo="Eliminar Serie"
      sinopsis="¿Estás seguro de que quieres eliminar esta serie?"
      size="sm"
      footer={
        <div className="flex gap-3 justify-end w-full pt-4 border-t border-slate-800/80">
          <DialogPrimitive.Close asChild>
            {/* Botón Verde Oscuro con contraste alto al Hover */}
            <button className="px-5 py-2.5 rounded-xl bg-emerald-950/80 text-white border border-emerald-800/60 font-medium text-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          {/* Botón Rojo Oscuro con contraste alto al Hover */}
          <button
            className="px-6 py-2.5 rounded-xl bg-red-950/80 text-white border border-red-800/60 font-semibold text-sm hover:bg-red-600 hover:text-white hover:border-red-500 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-200 disabled:opacity-50"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </button>
        </div>
      }
    >
      {error && <p className="text-sm text-red-400 mb-2">{error}</p>}
      <p className="text-slate-300">Esta acción no se puede deshacer.</p>
    </DialogComponent>
  );
}