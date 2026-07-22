import { useState, useEffect } from "react";
import { Product } from "../interfaces/getproduct.interface";
import { getProducts } from "../service/product.service";

export function useGetProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      // ✅ Esto te dirá exactamente qué pasó
      .catch((err) => {
        console.error("Detalle del error:", err); // <-- Revisa la consola de tu navegador
        setError(err.message || "Error al cargar productos");
        setLoading(false);
      });
    /*  .catch (() => {
      setError("Error al cargar productos");
      setLoading(false);
    });*/
}, []);
return {
  products,
  loading,
  error,
};
}
