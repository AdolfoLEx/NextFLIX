import { useState } from 'react';
import { DeleteSerieResponse } from '../interfaces/serie.interface';
import { deleteSerie } from '../service/serie.service';

export default function useDeleteSerie() {
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);

        const removeSerie = async(id:number): Promise<DeleteSerieResponse> => {
            setLoading(true);
            setError(null);

            try {
                const deletedSerie = await deleteSerie(id);
                return deletedSerie;
            } catch(error) {
                setError("Error al eliminar serie.");
                throw error;
            } finally {
                setLoading(false);
            }
        };
  return {
    removeSerie,
    loading,
    error,
  };
}
