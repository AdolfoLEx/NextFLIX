// ==========================================
// INTERFACES PARA POST
// ==========================================

export interface PostSerieRequest {
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}

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

export interface Serie {
    id:           number;
    titulo:       string;
    genero:       string;
    sinopsis:     string;
    urlPortada:   string;
    estreno:      number;
    calificacion: number;
    plataforma:   string;
}