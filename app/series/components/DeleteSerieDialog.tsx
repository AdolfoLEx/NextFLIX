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
        <>
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 transition font-bold border rounded">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            className="px-4 py-2 bg-red-500 text-white hover:bg-red-700 transition rounded"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </button>
        </>
      }
    >
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p>Esta acción no se puede deshacer.</p>
    </DialogComponent>
  );
}