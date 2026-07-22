import { object, string, minLength, pipe, description } from "valibot";

export const serieSchema = object(
    {
        titulo: pipe(
            string(),
            minLength(3, "El título debe tener al menos 3 caracteres"),
        ),

        sinopsis: pipe(
            string(),
        minLength(10, "La sinopsis debe tener al menos 10 caracteres"),
        ),  
    }
);