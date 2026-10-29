import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
export function PrivateRoute({ rol }) {
    const { cargando, estaAutenticado, tieneRol } = useAuth();
    if (cargando) {
        return (_jsx(Container, { className: "my-5 text-center", children: _jsx(Spinner, { animation: "border" }) }));
    }
    if (!estaAutenticado()) {
        return _jsx(Navigate, { to: "/login", replace: true });
    }
    if (rol && !tieneRol(rol)) {
        return _jsx(Navigate, { to: "/sin-permiso", replace: true });
    }
    return _jsx(Outlet, {});
}
//# sourceMappingURL=PrivateRoute.js.map