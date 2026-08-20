import { prisma } from '../prisma';

export async function findAll() {
  return prisma.libro.findMany();
}

export async function findById(id: number) {
  return prisma.libro.findUnique({ where: { id } });
}

export async function create(datos: { titulo: string; autor: string; anio: string; imgSrc: string }) {
  return prisma.libro.create({ data: datos });
}

export async function update(id: number, datos: { titulo: string; autor: string; anio: string; imgSrc: string }) {
  try {
    return await prisma.libro.update({ where: { id }, data: datos });
  } catch {
    return undefined;
  }
}

export async function remove(id: number) {
  try {
    await prisma.libro.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}