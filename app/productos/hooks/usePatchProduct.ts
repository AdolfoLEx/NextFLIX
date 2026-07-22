import { useState } from 'react';
import { PostProductRequest, PostProductResponse } from '../interfaces/product.interface';
import { patchProduct } from '../service/product.service';

export default function usePatchProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateProduct = async (
    id: number,
    data: Partial<PostProductRequest>,
  ): Promise<PostProductResponse> => {
    setLoading(true);
    setError(null);

    try {
      const updatedProduct = await patchProduct(id, data);
      return updatedProduct;
    } catch (err) {
      setError("Error al actualizar producto.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    updateProduct,
    loading,
    error,
  };
}
