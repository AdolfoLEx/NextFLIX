import { useState } from 'react'

import { PostSerieRequest, PostSerieResponse } from '../interfaces/serie.interface';
import { postSerie } from '../service/serie.service';

export default function usePostSerie() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createSerie = async (
        data: PostSerieRequest,
    ): Promise<PostSerieResponse> => {
        setLoading(true);
        setError(null);

        try {
            const createSerie = await postSerie(data)
            return createSerie;
        } catch (error) {
            setError("Error al crear serie");
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return {
        createSerie,
        loading,
        error
    };
}
