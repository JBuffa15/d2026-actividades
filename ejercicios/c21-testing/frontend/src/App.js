import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/layout';
import { Home } from './pages/home';
import { Catalogo } from './pages/catalogo';
import { LibroDetalle } from './pages/libroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';
import { Login } from './pages/login';
import { SinPermiso } from './pages/sinPermiso';
import { PrivateRoute } from './componentes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';
function App() {
    return (_jsx(AuthProvider, { children: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/catalogo", element: _jsx(Catalogo, {}) }), _jsx(Route, { path: "/libros/:id", element: _jsx(LibroDetalle, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/sin-permiso", element: _jsx(SinPermiso, {}) }), _jsx(Route, { element: _jsx(PrivateRoute, { rol: "ADMIN" }), children: _jsx(Route, { path: "/libros/nuevo", element: _jsx(LibroNuevo, {}) }) })] }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map