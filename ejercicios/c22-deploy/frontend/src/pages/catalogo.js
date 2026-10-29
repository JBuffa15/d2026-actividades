import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import { useFetch } from '../hooks/useFetch';
export function Catalogo() {
    const { data: libros, loading, error } = useFetch('/api/libros');
    if (loading)
        return (_jsx(Container, { className: "my-5 text-center", children: _jsx(Spinner, { animation: "border" }) }));
    if (error)
        return (_jsx(Container, { className: "my-5", children: _jsx(Alert, { variant: "danger", children: error }) }));
    return (_jsxs(Container, { className: "my-5", children: [_jsx("h2", { className: "mb-4", children: "Cat\u00E1logo completo" }), _jsx(Row, { className: "g-4", children: (libros ?? []).map((libro) => (_jsx(Col, { md: 4, lg: 3, children: _jsx(BookCard, { titulo: libro.titulo, autor: libro.autor.nombre, anio: libro.anio, imgSrc: libro.imgSrc }) }, libro.id))) })] }));
}
//# sourceMappingURL=catalogo.js.map