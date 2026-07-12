import { z } from 'zod';

export const libroSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio'),
  autor: z.string().min(1, 'El autor es obligatorio'),
  anio: z.string().min(1, 'El año es obligatorio'),
  imgSrc: z.string().optional(),
});

export type LibroValidado = z.infer<typeof libroSchema>;