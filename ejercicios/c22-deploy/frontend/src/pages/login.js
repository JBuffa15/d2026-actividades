import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../schemas/loginSchema';
import { useAuth } from '../context/AuthContext';
export function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [errorApi, setErrorApi] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });
    async function onSubmit(data) {
        setErrorApi(null);
        try {
            await login(data.email, data.password);
            navigate('/catalogo');
        }
        catch (e) {
            setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
        }
    }
    return (_jsxs(Container, { className: "my-5", style: { maxWidth: '400px' }, children: [_jsx("h2", { className: "mb-4", children: "Iniciar sesi\u00F3n" }), errorApi && _jsx(Alert, { variant: "danger", children: errorApi }), _jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Label, { children: "Email" }), _jsx(Form.Control, { ...register('email'), placeholder: "tu@email.com", isInvalid: !!errors.email }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.email?.message })] }), _jsxs(Form.Group, { className: "mb-4", children: [_jsx(Form.Label, { children: "Contrase\u00F1a" }), _jsx(Form.Control, { type: "password", ...register('password'), isInvalid: !!errors.password }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.password?.message })] }), _jsx(Button, { variant: "dark", onClick: handleSubmit(onSubmit), children: "Ingresar" })] }));
}
//# sourceMappingURL=login.js.map