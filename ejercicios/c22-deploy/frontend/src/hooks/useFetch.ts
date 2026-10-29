import { useState, useEffect } from 'react';
import { apiFetch } from '../services/api';

export function useFetch<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        setLoading(true);
        setError(null);
        setData(await apiFetch<T>(path));
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    cargar();
  }, [path]);

  return { data, loading, error };
}