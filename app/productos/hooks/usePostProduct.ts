import { useState } from 'react'

import { PostProductRequest, PostProductResponse } from '../interfaces/product.interface';
import { postProduct } from '../service/product.service';

export default function usePostProduct() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createProduct = async (
        data: PostProductRequest,
    ): Promise<PostProductResponse> => {
        setLoading(true);
        setError(null);

        try {
            const createProduct = await postProduct(data)
            return createProduct;
        } catch (error) {
            setError("Error al crear producto");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        createProduct,
        loading,
        error
    };
}
