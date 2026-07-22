// ==========================================
// INTERFACES PARA POST
// ==========================================
/*
export interface PostSerieRequest {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}
*/

export interface PostSerieRequest {
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}

/*
export interface PostSerieResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}*/

export interface PostSerieResponse {
    id:           number;
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}

// ==========================================
// SHARED INTERFACES
// ==========================================
/*
export interface Rating {
    rate:  number;
    count: number;
}
*/
/*
export interface DeleteSerieResponse {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;    
}
*/
export interface DeleteSerieResponse {
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;   
}


// ==========================================
// INTERFACES PARA PATCH
// ==========================================

// 1. Request: Usamos Partial porque al editar solo envías los campos que cambian
export type PatchSerieRequest = Partial<PostSerieRequest>;

// 2. Response: La API devuelve el objeto actualizado con su ID
/*
export interface PatchSerieResponse {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}
*/
export interface PatchSerieResponse {
    id:           number;
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}


// ==========================================
// INTERFACES PARA SERIES
// ==========================================

/*
export interface TopLevel {
    id:           number;
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}
*/
