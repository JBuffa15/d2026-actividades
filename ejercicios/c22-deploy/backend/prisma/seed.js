"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connectionString = process.env.DATABASE_URL;
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
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
const usuarios = [
    { email: "admin@libreria.com", password: "Admin1234!", nombre: "Administrador", rol: "ADMIN" },
    { email: "cliente@libreria.com", password: "Cliente1234!", nombre: "Cliente Uno", rol: "CLIENTE" },
];
async function main() {
    for (const autor of autores) {
        await prisma.autor.upsert({ where: { nombre: autor.nombre }, update: {}, create: autor });
    }
    for (const categoria of categorias) {
        await prisma.categoria.upsert({ where: { nombre: categoria.nombre }, update: {}, create: categoria });
    }
    for (const { autor, cats, ...datos } of libros) {
        const existente = await prisma.libro.findFirst({ where: { titulo: datos.titulo } });
        if (!existente) {
            await prisma.libro.create({
                data: {
                    ...datos,
                    autor: { connect: { nombre: autor } },
                    categorias: { connect: cats.map((nombre) => ({ nombre })) },
                },
            });
        }
    }
    for (const { password, ...datos } of usuarios) {
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        await prisma.usuario.upsert({
            where: { email: datos.email },
            update: {},
            create: { ...datos, passwordHash },
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
//# sourceMappingURL=seed.js.map