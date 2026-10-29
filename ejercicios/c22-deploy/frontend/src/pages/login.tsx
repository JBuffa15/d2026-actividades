import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginValidado } from '../schemas/loginSchema';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errorApi, setErrorApi] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginValidado>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginValidado) {
    setErrorApi(null);
    try {
      await login(data.email, data.password);
      navigate('/catalogo');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    }
  }

  return (
    <Container className="my-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">Iniciar sesión</h2>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...register('email')}
          placeholder="tu@email.com"
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          {...register('password')}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="dark" onClick={handleSubmit(onSubmit)}>
        Ingresar
      </Button>
    </Container>
  );
}