import { z } from "zod";

export const libroCreateSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio").max(200),
  anio: z.string().trim().min(1, "El año es obligatorio"),
  imgSrc: z.string().min(1, "La imagen es obligatoria"),
  autorId: z.number().int().positive("El autor es obligatorio"),
});

export const libroUpdateSchema = libroCreateSchema.partial();