import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
export function BookCard({ titulo, autor, anio, imgSrc }) {
    //useState 
    const [likes, setLikes] = useState(0);
    return (_jsxs(Card, { className: "h-100", children: [_jsx(Card.Img, { variant: "top", src: imgSrc, style: { height: '220px', objectFit: 'cover' } }), _jsxs(Card.Body, { className: "d-flex flex-column", children: [_jsx(Card.Title, { className: "fw-bold", children: titulo }), _jsx(Card.Text, { className: "text-muted small mb-1", children: autor }), _jsxs(Card.Text, { className: "text-muted small", children: [" A\u00F1o: ", anio] }), _jsxs("div", { className: "mt-auto d-flex justify-content-between align-items-center", children: [_jsx(Button, { variant: "outline-dark", size: "sm", children: "Ver m\u00E1s" }), _jsxs(Button, { variant: "outline-danger", size: "sm", onClick: () => setLikes(likes + 1), children: ["\u2764\uFE0F ", likes] })] })] })] }));
}
//# sourceMappingURL=bookcard.js.map