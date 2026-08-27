import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const autores = [
  { nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
  { nombre: "Julio Cortázar", nacionalidad: "Argentina" },
  { nombre: "Jorge Luis Borges", nacionalidad: "Argentina" },
];

const categorias = [
  { nombre: "Novela" },
  { nombre: "Cuento" },
  { nombre: "Ensayo" },
];

const libros = [
  { titulo: "Cien años de soledad", anio: "1967", imgSrc: "https://placehold.co/300x400", autor: "Gabriel García Márquez", cats: ["Novela"] },
  { titulo: "Rayuela", anio: "1963", imgSrc: "https://placehold.co/300x400", autor: "Julio Cortázar", cats: ["Novela"] },
  { titulo: "Ficciones", anio: "1944", imgSrc: "https://placehold.co/300x400", autor: "Jorge Luis Borges", cats: ["Cuento", "Ensayo"] },
];

async function main() {
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) },
      },
    });
  }
}

main()
  .then(() => console.log("Seed completado"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });