// ==========================================
// INTERFACES PARA POST
// ==========================================

export interface PostProductRequest {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface PostProductResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

// ==========================================
// SHARED INTERFACES
// ==========================================

export interface Rating {
    rate:  number;
    count: number;
}

export interface DeleteProductResponse {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;    
}

// ==========================================
// INTERFACES PARA PATCH
// ==========================================

// 1. Request: Usamos Partial porque al editar solo envías los campos que cambian
export type PatchProductRequest = Partial<PostProductRequest>;

// 2. Response: La API devuelve el objeto actualizado con su ID
export interface PatchProductResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}
