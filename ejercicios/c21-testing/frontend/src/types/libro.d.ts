export interface Autor {
    id: number;
    nombre: string;
    nacionalidad: string;
}
export interface Libro {
    id: number;
    titulo: string;
    anio: string;
    imgSrc: string;
    autorId: number;
    autor: Autor;
}
export interface LibroCreateInput {
    titulo: string;
    anio: string;
    imgSrc: string;
    autorId: number;
}
export type BookCardProps = {
    titulo: string;
    autor: string;
    anio: string;
    imgSrc: string;
};
//# sourceMappingURL=libro.d.ts.map