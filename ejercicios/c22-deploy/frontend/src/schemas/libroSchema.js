import { z } from 'zod';
export const libroSchema = z.object({
    titulo: z.string().trim().min(1, 'El título es obligatorio').max(200),
    anio: z.string().trim().min(1, 'El año es obligatorio'),
    imgSrc: z.string().min(1, 'La imagen es obligatoria'),
    autorId: z.coerce.number().int().positive('Elegí un autor'),
});
//# sourceMappingURL=libroSchema.js.map