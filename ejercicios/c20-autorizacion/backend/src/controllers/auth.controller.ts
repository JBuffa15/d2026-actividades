import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { prisma } from '../prisma';
import '../types/express';

export async function yo(req: Request, res: Response) {
  const usuario = await prisma.usuario.findUnique({
    where: { id: req.usuario!.id },
    select: { id: true, email: true, nombre: true, rol: true },
  });
  res.json(usuario);
}

export async function registro(req: Request, res: Response) {
  const nuevo = await authService.registrar(req.body);
  res.status(201).json(nuevo);
}

export async function login(req: Request, res: Response) {
  const token = await authService.login(req.body);
  res.status(200).json({ token });
}

