import { jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
export function LibroDetalle() {
    const { id } = useParams();
    return (_jsxs(Container, { className: "my-5", children: [_jsxs("h2", { children: ["Detalle del libro #", id] }), _jsxs("p", { children: ["Ac\u00E1 ir\u00EDa la informaci\u00F3n del libro con id: ", id] })] }));
}
//# sourceMappingURL=libroDetalle.js.map