import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { libroSchema } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';
import { useFetch } from '../hooks/useFetch';
export function LibroNuevo() {
    const navigate = useNavigate();
    const [errorApi, setErrorApi] = useState(null);
    const { data: autores } = useFetch('/api/autores');
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(libroSchema),
    });
    async function onSubmit(data) {
        setErrorApi(null);
        try {
            await apiFetch('/api/libros', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            navigate('/catalogo');
        }
        catch (e) {
            setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
        }
    }
    return (_jsxs(Container, { className: "my-5", style: { maxWidth: '500px' }, children: [_jsx("h2", { className: "mb-4", children: "Agregar nuevo libro" }), errorApi && _jsx(Alert, { variant: "danger", children: errorApi }), _jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Label, { children: "T\u00EDtulo" }), _jsx(Form.Control, { ...register('titulo'), placeholder: "T\u00EDtulo del libro", isInvalid: !!errors.titulo }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.titulo?.message })] }), _jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Label, { children: "Autor" }), _jsxs(Form.Select, { ...register('autorId'), isInvalid: !!errors.autorId, children: [_jsx("option", { value: "", children: "Seleccion\u00E1 un autor" }), (autores ?? []).map((autor) => (_jsx("option", { value: autor.id, children: autor.nombre }, autor.id)))] }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.autorId?.message })] }), _jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Label, { children: "A\u00F1o" }), _jsx(Form.Control, { ...register('anio'), placeholder: "A\u00F1o de publicaci\u00F3n", isInvalid: !!errors.anio }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.anio?.message })] }), _jsxs(Form.Group, { className: "mb-4", children: [_jsx(Form.Label, { children: "URL de imagen" }), _jsx(Form.Control, { ...register('imgSrc'), placeholder: "https://...", isInvalid: !!errors.imgSrc }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.imgSrc?.message })] }), _jsx(Button, { variant: "dark", onClick: handleSubmit(onSubmit), children: "Agregar libro" })] }));
}
//# sourceMappingURL=LibroNuevo.js.map