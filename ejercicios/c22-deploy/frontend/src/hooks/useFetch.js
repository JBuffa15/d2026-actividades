import { useState, useEffect } from 'react';
import { apiFetch } from '../services/api';
export function useFetch(path) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const cargar = async () => {
            try {
                setLoading(true);
                setError(null);
                setData(await apiFetch(path));
            }
            catch (e) {
                setError(e instanceof Error ? e.message : 'Error desconocido');
            }
            finally {
                setLoading(false);
            }
        };
        cargar();
    }, [path]);
    return { data, loading, error };
}
//# sourceMappingURL=useFetch.js.map