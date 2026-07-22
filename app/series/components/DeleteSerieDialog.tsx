"use client";
import DialogComponent from "@/ui/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useDeleteProduct from "../hooks/useDeleteSerie";

type Props = {
  trigger: React.ReactNode;
  productId: number;
  onDelete: (id: number) => void;
};

export default function DeleteProductModal({
  trigger,
  productId,
  onDelete,
}: Props) {

  const { removeProduct, loading, error } = useDeleteProduct();

  const handleDelete = async () => {
    try {
      await removeProduct(productId);
      onDelete(productId);
    } catch {
      console.error("Error al eliminar producto", error);
      // El error se maneja desde el hook
    }
  }
/*
  const handleDelete = async (id: number) => {
    try {
      await removeProduct(id);
      // ⚠️ ¡Importante! Tienes que filtrar el estado actual para quitar el producto eliminado
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };
*/
  return (
    <DialogComponent
      trigger={trigger}
      title="Eliminar Producto"
      description="¿Estás seguro de que quieres eliminar este producto?"
      size="sm"
      footer={
        <>
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 border rounded">Cancelar</button>
          </DialogPrimitive.Close>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            //onClick={() => onDelete(productId)}
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
