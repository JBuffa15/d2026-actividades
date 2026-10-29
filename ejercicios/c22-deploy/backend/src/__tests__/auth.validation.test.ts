import { describe, it, expect } from 'vitest';
import { loginSchema, registroSchema } from '../validations/auth.validation';

describe('loginSchema', () => {
  it('acepta email y password válidos', () => {
    const resultado = loginSchema.safeParse({
      email: 'ana@test.com',
      password: 'cualquiera',
    });
    expect(resultado.success).toBe(true);
  });

  it('rechaza un email mal formado', () => {
    const resultado = loginSchema.safeParse({
      email: 'no-es-un-mail',
      password: 'cualquiera',
    });
    expect(resultado.success).toBe(false);
  });

  it('rechaza si falta la password', () => {
    const resultado = loginSchema.safeParse({ email: 'ana@test.com' });
    expect(resultado.success).toBe(false);
  });
});

describe('registroSchema', () => {
  it('acepta datos de registro válidos', () => {
    const resultado = registroSchema.safeParse({
      nombre: 'Ana',
      email: 'ana@test.com',
      password: 'Password123!',
    });
    expect(resultado.success).toBe(true);
  });

  it('rechaza un email inválido', () => {
    const resultado = registroSchema.safeParse({
      nombre: 'Ana',
      email: 'ana',
      password: 'Password123!',
    });
    expect(resultado.success).toBe(false);
  });
});