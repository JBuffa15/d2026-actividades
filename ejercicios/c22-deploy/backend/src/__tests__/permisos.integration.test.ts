
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from '../app';

function tokenPara(rol: 'ADMIN' | 'CLIENTE') {
  return jwt.sign(
    { id: 1, email: `${rol.toLowerCase()}@test.com`, rol },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' },
  );
}

describe('Matriz de permisos: /api/libros', () => {
  it('GET /api/libros es público y responde 200 (usa la DB)', async () => {
    const res = await request(app).get('/api/libros');
    expect(res.status).toBe(200);
  });

  it('POST /api/libros sin token responde 401', async () => {
    const res = await request(app).post('/api/libros').send({});
    expect(res.status).toBe(401);
  });

  it('POST /api/libros con rol CLIENTE responde 403', async () => {
    const res = await request(app)
      .post('/api/libros')
      .set('Authorization', `Bearer ${tokenPara('CLIENTE')}`)
      .send({});
    expect(res.status).toBe(403);
  });
});