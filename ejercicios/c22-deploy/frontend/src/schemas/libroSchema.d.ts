import { z } from 'zod';
export declare const libroSchema: z.ZodObject<{
    titulo: z.ZodString;
    anio: z.ZodString;
    imgSrc: z.ZodString;
    autorId: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type LibroInput = z.input<typeof libroSchema>;
export type LibroValidado = z.output<typeof libroSchema>;
//# sourceMappingURL=libroSchema.d.ts.map