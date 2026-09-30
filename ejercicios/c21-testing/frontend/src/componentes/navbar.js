import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export function Navbar() {
    const navigate = useNavigate();
    const { usuario, logout, tieneRol } = useAuth();
    function handleLogout() {
        logout();
        navigate('/');
    }
    return (_jsx(BootstrapNavbar, { bg: "dark", variant: "dark", expand: "lg", children: _jsxs(Container, { children: [_jsx(BootstrapNavbar.Brand, { as: Link, to: "/", children: "Librer\u00EDa" }), _jsx(BootstrapNavbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(BootstrapNavbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "ms-auto align-items-lg-center", children: [_jsx(Nav.Link, { as: Link, to: "/", children: "Inicio" }), _jsx(Nav.Link, { as: Link, to: "/catalogo", children: "Cat\u00E1logo de libros" }), tieneRol('ADMIN') && (_jsx(Nav.Link, { as: Link, to: "/libros/nuevo", children: "+ Nuevo libro" })), usuario ? (_jsxs("div", { className: "d-flex align-items-center gap-2 ms-lg-2", children: [_jsxs("span", { className: "text-white-50", children: ["Hola, ", usuario.nombre] }), _jsx(Button, { variant: "outline-light", size: "sm", onClick: handleLogout, children: "Salir" })] })) : (_jsx(Nav.Link, { as: Link, to: "/login", children: "Ingresar" }))] }) })] }) }));
}
//# sourceMappingURL=navbar.js.map