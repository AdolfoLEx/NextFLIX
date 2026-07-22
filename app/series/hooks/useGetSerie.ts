import { useState, useEffect } from "react";
import { Serie } from "../interfaces/serie.interface";
import { getSeries } from "../service/serie.service";

export function useGetSerie() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSeries()
      .then((data) => {
        setSeries(data);
        setLoading(false);
      })
      // ✅ Esto te dirá exactamente qué pasó
      .catch((err) => {
        console.error("Detalle del error:", err); // <-- Revisa la consola de tu navegador
        setError(err.message || "Error al cargar series");
        setLoading(false);
      });
    /*  .catch (() => {
      setError("Error al cargar productos");
      setLoading(false);
    });*/
}, []);
return {
  series,
  loading,
  error,
};
}
