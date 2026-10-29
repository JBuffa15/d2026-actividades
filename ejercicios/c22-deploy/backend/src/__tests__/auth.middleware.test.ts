import { describe, it, expect, vi } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { authorize } from '../middlewares/auth.middleware';

function crearReq(rol?: 'ADMIN' | 'CLIENTE') {
  return {
    usuario: rol ? { id: 1, email: 'test@test.com', rol } : undefined,
  } as unknown as Request;
}

function crearRes() {
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };
  return res as unknown as Response & typeof res;
}

describe('authorize', () => {
  it('llama a next() si el rol está permitido', () => {
    const next = vi.fn() as unknown as NextFunction;
    const res = crearRes();

    authorize('ADMIN')(crearReq('ADMIN'), res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('responde 403 si el rol no está permitido', () => {
    const next = vi.fn() as unknown as NextFunction;
    const res = crearRes();

    authorize('ADMIN')(crearReq('CLIENTE'), res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });

  it('responde 403 si no hay usuario en la request', () => {
    const next = vi.fn() as unknown as NextFunction;
    const res = crearRes();

    authorize('ADMIN')(crearReq(), res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });
});