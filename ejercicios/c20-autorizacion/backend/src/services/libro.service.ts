import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';

export type LibroConAutor = Prisma.LibroGetPayload<{ include: { autor: true } }>;
export type LibroDetalle = Prisma.LibroGetPayload<{ include: { autor: true; categorias: true } }>;

export async function findAll(): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({ include: { autor: true } });
}

export async function findById(id: number): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({
    where: { id },
    include: { autor: true, categorias: true },
  });
}

export async function create(datos: { titulo: string; anio: string; imgSrc: string; autorId: number }) {
  return prisma.libro.create({ data: datos, include: { autor: true } });
}

export async function update(id: number, datos: Partial<{ titulo: string; anio: string; imgSrc: string; autorId: number }>) {
  return prisma.libro.update({ where: { id }, data: datos, include: { autor: true } });
}

export async function remove(id: number) {
  await prisma.libro.delete({ where: { id } });
}