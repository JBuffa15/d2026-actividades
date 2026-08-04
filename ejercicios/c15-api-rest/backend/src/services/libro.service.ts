import { Libro } from '../types/libro.types';

const libros: Libro[] = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967", imgSrc: "https://placehold.co/300x400" },
  { id: 2, titulo: "Rayuela", autor: "Julio Cortázar", anio: "1963", imgSrc: "https://placehold.co/300x400" },
  { id: 3, titulo: "Ficciones", autor: "Jorge Luis Borges", anio: "1944", imgSrc: "https://placehold.co/300x400" }
];

let proximoId = 4;

export function findAll(): Libro[] {
  return libros;
}

export function findById(id: number): Libro | undefined {
  return libros.find(l => l.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Libro, "id">): Libro | undefined {
  const index = libros.findIndex(l => l.id === id);
  if (index === -1) return undefined;
  libros[index] = { id, ...datos };
  return libros[index];
}

export function remove(id: number): boolean {
  const index = libros.findIndex(l => l.id === id);
  if (index === -1) return false;
  libros.splice(index, 1);
  return true;
}