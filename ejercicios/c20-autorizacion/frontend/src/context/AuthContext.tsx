import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { apiFetch, EVENTO_SESION_EXPIRADA } from '../services/api';
import { guardarToken, borrarToken, obtenerToken } from '../services/sesion';

export interface Usuario {
  id: number;
  email: string;
  nombre: string;
  rol: string;
}

interface AuthContextValue {
  usuario: Usuario | null;
  cargando: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  estaAutenticado: () => boolean;
  tieneRol: (...roles: string[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const rehidratar = async () => {
      if (!obtenerToken()) {
        setCargando(false);
        return;
      }
      try {
        const datos = await apiFetch<Usuario>('/api/auth/yo');
        setUsuario(datos);
      } catch {
        borrarToken();
        setUsuario(null);
      } finally {
        setCargando(false);
      }
    };
    rehidratar();
  }, []);

  useEffect(() => {
    const handleSesionExpirada = () => {
      borrarToken();
      setUsuario(null);
    };
    window.addEventListener(EVENTO_SESION_EXPIRADA, handleSesionExpirada);
    return () => window.removeEventListener(EVENTO_SESION_EXPIRADA, handleSesionExpirada);
  }, []);

  async function login(email: string, password: string) {
    const { token } = await apiFetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    guardarToken(token);
    const datos = await apiFetch<Usuario>('/api/auth/yo');
    setUsuario(datos);
  }

  function logout() {
    borrarToken();
    setUsuario(null);
  }

  function estaAutenticado() {
    return usuario !== null;
  }

  function tieneRol(...roles: string[]) {
    return usuario !== null && roles.includes(usuario.rol);
  }

  return (
    <AuthContext.Provider value={{ usuario, cargando, login, logout, estaAutenticado, tieneRol }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de un AuthProvider');
  return context;
}