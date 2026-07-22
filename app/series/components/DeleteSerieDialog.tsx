"use client";
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

  const { removeSerie, loading, error } = useDeleteSerie();

  const handleDelete = async () => {
    try {
      await removeSerie(serieId);
      onDelete(serieId);
    } catch {
      console.error("Error al eliminar serie", error);
      // El error se maneja desde el hook
    }
  }
/*
  const handleDelete = async (id: number) => {
    try {
      await removeSerie(id);
      // ⚠️ ¡Importante! Tienes que filtrar el estado actual para quitar la serie eliminada
      setSeries((prevSeries) => prevSeries.filter((serie) => serie.id !== id));
    } catch (error) {
      console.error("Error eliminando serie:", error);
    }
  };
*/
  return (
    <DialogComponent
      trigger={trigger}
      title="Eliminar Serie"
      description="¿Estás seguro de que quieres eliminar esta serie?"
      size="sm"
      footer={
        <>
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 border rounded">Cancelar</button>
          </DialogPrimitive.Close>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            //onClick={() => onDelete(serieId)}
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
