import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { AppError } from '../utils/app-error';

export async function registrar(datos: { email: string; password: string; nombre: string }) {
  const existente = await prisma.usuario.findUnique({ where: { email: datos.email } });
  if (existente) throw new AppError('Ya existe un usuario con ese email', 409);

  const passwordHash = await bcrypt.hash(datos.password, 10);
  const usuario = await prisma.usuario.create({
    data: { email: datos.email, passwordHash, nombre: datos.nombre },
  });

  const { passwordHash: _, ...usuarioSinHash } = usuario;
  return usuarioSinHash;
}

export async function login(datos: { email: string; password: string }) {
  const usuario = await prisma.usuario.findUnique({ where: { email: datos.email } });
  if (!usuario) throw new AppError('Credenciales inválidas', 401);

  const passwordValida = await bcrypt.compare(datos.password, usuario.passwordHash);
  if (!passwordValida) throw new AppError('Credenciales inválidas', 401);

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, rol: usuario.rol },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  return token;
}