import { apiFetch } from "@/service/api";
import { 
  PostSerieRequest, 
  PostSerieResponse, 
  DeleteSerieResponse,
  PatchSerieResponse, 
} from "../interfaces/serie.interface";
//import { series } from "@/data/series";

/*
export async function getSeries() {
  return apiFetch("/series");
}
*/

/*
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSeries() {
  const response = await fetch(`${API_URL}/series`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  return response.json();
}*/

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getSeries() {
  // 1. Diagnóstico: Verificar si la variable de entorno está cargando
  if (!API_URL) {
    console.error("⚠️ La variable NEXT_PUBLIC_API_URL no está definida en tu archivo .env.local");
  }

  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });

  // 2. Validación: Verificar que el servidor devolvió una respuesta OK (200-299)
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Error HTTP ${response.status} llamando a ${API_URL}/products:`, errorText);
    throw new Error(`Error en el servidor (${response.status})`);
  }

  // 3. Solo si fue exitoso convertimos a JSON
  return response.json();
}

/*
export function postProduct(
  data: PostProductRequest,
): Promise<PostProductResponse> {
  return apiFetch("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
*/

export function postSerie(
  data: PostSerieRequest,
): Promise<PostSerieResponse> {
  return apiFetch("/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  });
}
/*
export function deleteSerie(id: number): Promise<DeleteSerieResponse> {
  return apiFetch(`/series/${id}`, {
    method: "DELETE",
  });
}*/

export function deleteSerie(id: number | string): Promise<DeleteSerieResponse> {
  return apiFetch(`/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
}


export function patchSerie(
  id: number,
  data: Partial<PostSerieRequest>,
): Promise<PatchSerieResponse> {
  return apiFetch(`/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
