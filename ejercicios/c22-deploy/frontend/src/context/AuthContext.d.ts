import { type ReactNode } from 'react';
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
export declare function AuthProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAuth(): AuthContextValue;
export {};
//# sourceMappingURL=AuthContext.d.ts.map