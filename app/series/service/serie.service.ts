import { apiFetch } from "@/service/api";
import { 
  PostProductRequest, 
  PostProductResponse, 
  DeleteProductResponse,
  PatchProductResponse, 
} from "../interfaces/serie.interface";
//import { products } from "@/data/products";

/*
export async function getProducts() {
  return apiFetch("/products");
}
*/

/*
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  return response.json();
}*/

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
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

export function postProduct(
  data: PostProductRequest,
): Promise<PostProductResponse> {
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
export function deleteProduct(id: number): Promise<DeleteProductResponse> {
  return apiFetch(`/products/${id}`, {
    method: "DELETE",
  });
}*/

export function deleteProduct(id: number | string): Promise<DeleteProductResponse> {
  return apiFetch(`/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
}


export function patchProduct(
  id: number,
  data: Partial<PostProductRequest>,
): Promise<PatchProductResponse> {
  return apiFetch(`/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
