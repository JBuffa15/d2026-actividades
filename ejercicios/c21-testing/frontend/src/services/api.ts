import { obtenerToken } from './sesion';

const API_URL = import.meta.env.VITE_API_URL;

export const EVENTO_SESION_EXPIRADA = 'sesion-expirada';

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = obtenerToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const mensaje = body?.error ?? 'Error en la solicitud';

    if (res.status === 401 && token) {
      window.dispatchEvent(new Event(EVENTO_SESION_EXPIRADA));
    }

    throw new ApiError(mensaje, res.status);
  }

  if (res.status === 204) return undefined as T;

  return res.json();
}