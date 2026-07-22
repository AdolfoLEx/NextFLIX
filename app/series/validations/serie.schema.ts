import { object, string, minLength, pipe, description } from "valibot";

export const serieSchema = object(
    {
        title: pipe(
            string(),
            minLength(3, "El título debe tener al menos 3 caracteres"),
        ),

        description: pipe(
            string(),
        minLength(10, "La descripción debe tener al menos 10 caracteres"),
        ),  
    }
);