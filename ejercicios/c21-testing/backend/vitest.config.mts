import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    env: {
      JWT_SECRET: 'secreto-solo-para-tests',
      FRONTEND_URL: 'http://localhost:5173',
      // Copiá usuario, password, puerto y nombre de tu backend/.env,
      // pero con host "localhost" (los tests corren en tu Mac, no dentro de Docker)
      DATABASE_URL: 'postgresql://USUARIO:PASSWORD@localhost:5432/NOMBRE_DB',
    },
  },
});