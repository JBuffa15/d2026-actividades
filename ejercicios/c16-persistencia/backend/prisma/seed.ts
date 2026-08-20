import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.libro.createMany({
    data: [
      { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967", imgSrc: "https://placehold.co/300x400" },
      { titulo: "Rayuela", autor: "Julio Cortázar", anio: "1963", imgSrc: "https://placehold.co/300x400" },
      { titulo: "Ficciones", autor: "Jorge Luis Borges", anio: "1944", imgSrc: "https://placehold.co/300x400" }
    ]
  });

  await prisma.autor.createMany({
    data: [
      { nombre: "Gabriel García Márquez", nacionalidad: "Colombia" },
      { nombre: "Julio Cortázar", nacionalidad: "Argentina" },
      { nombre: "Jorge Luis Borges", nacionalidad: "Argentina" }
    ]
  });
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