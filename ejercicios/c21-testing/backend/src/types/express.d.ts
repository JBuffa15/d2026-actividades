import { Rol } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      usuario?: {
        id: number;
        email: string;
        rol: Rol;
      };
    }
  }
}

export {};