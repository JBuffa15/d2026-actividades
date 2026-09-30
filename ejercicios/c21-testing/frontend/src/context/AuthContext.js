import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { apiFetch, EVENTO_SESION_EXPIRADA } from '../services/api';
import { guardarToken, borrarToken, obtenerToken } from '../services/sesion';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        const rehidratar = async () => {
            if (!obtenerToken()) {
                setCargando(false);
                return;
            }
            try {
                const datos = await apiFetch('/api/auth/yo');
                setUsuario(datos);
            }
            catch {
                borrarToken();
                setUsuario(null);
            }
            finally {
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
    async function login(email, password) {
        const { token } = await apiFetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
        guardarToken(token);
        const datos = await apiFetch('/api/auth/yo');
        setUsuario(datos);
    }
    function logout() {
        borrarToken();
        setUsuario(null);
    }
    function estaAutenticado() {
        return usuario !== null;
    }
    function tieneRol(...roles) {
        return usuario !== null && roles.includes(usuario.rol);
    }
    return (_jsx(AuthContext.Provider, { value: { usuario, cargando, login, logout, estaAutenticado, tieneRol }, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    return context;
}
//# sourceMappingURL=AuthContext.js.map