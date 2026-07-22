import { useState } from 'react';
import { PostSerieRequest, PostSerieResponse } from '../interfaces/serie.interface';
import { patchSerie } from '../service/serie.service';

export default function usePatchSerie() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSerie = async (
    id: number,
    data: Partial<PostSerieRequest>,
  ): Promise<PostSerieResponse> => {
    setLoading(true);
    setError(null);

    try {
      const updatedSerie = await patchSerie(id, data);
      return updatedSerie;
    } catch (err) {
      setError("Error al actualizar serie.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    updateSerie,
    loading,
    error,
  };
}
