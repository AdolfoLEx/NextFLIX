import { useState } from 'react';
import { DeleteProductResponse } from '../interfaces/product.interface';
import { deleteProduct } from '../service/product.service';

export default function useDeleteProduct() {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);

        const removeProduct = async(id:number): Promise<DeleteProductResponse> => {
            setLoading(true);
            setError(null);

            try {
                const deletedProduct = await deleteProduct(id);
                return deletedProduct;
            } catch(error) {
                setError("Error al eliminar producto.");
                throw error;
            } finally {
                setLoading(false);
            }
        };
  return {
    removeProduct,
    loading,
    error,
  };
}
