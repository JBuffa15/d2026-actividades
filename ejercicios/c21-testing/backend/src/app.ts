import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import libroRoutes from './routes/libro.routes';
import autorRoutes from './routes/autor.routes';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/error.middleware';

dotenv.config();

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL as string],
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/libros', libroRoutes);
app.use('/api/autores', autorRoutes);

app.use((req, res) => {
  res.status(404).json({ error: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
});

app.use(errorHandler);

export default app;