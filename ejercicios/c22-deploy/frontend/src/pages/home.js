import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Row, Col, InputGroup, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import { useFetch } from '../hooks/useFetch';
export function Home() {
    const { data: libros, loading, error } = useFetch('/api/libros');
    return (_jsxs(Container, { className: "my-5", children: [_jsx("h2", { className: "mb-4", children: "Cat\u00E1logo de libros" }), _jsxs(InputGroup, { className: "mb-4", style: { maxWidth: '500px' }, children: [_jsx(Form.Control, { placeholder: "Buscar libro..." }), _jsx(Button, { variant: "dark", children: "Buscar" })] }), loading && _jsx(Spinner, { animation: "border" }), error && _jsx(Alert, { variant: "danger", children: error }), _jsx(Row, { className: "g-4", children: (libros ?? []).map((libro) => (_jsx(Col, { md: 4, lg: 3, children: _jsx(BookCard, { titulo: libro.titulo, autor: libro.autor.nombre, anio: libro.anio, imgSrc: libro.imgSrc }) }, libro.id))) })] }));
}
//# sourceMappingURL=home.js.map