import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { libroSchema, type LibroInput, type LibroValidado } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';
import { useFetch } from '../hooks/useFetch';
import type { Autor, Libro } from '../types/libro';

export function LibroNuevo() {
  const navigate = useNavigate();
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const { data: autores } = useFetch<Autor[]>('/api/autores');

  const { register, handleSubmit, formState: { errors } } = useForm<LibroInput, unknown, LibroValidado>({
    resolver: zodResolver(libroSchema),
  });

  async function onSubmit(data: LibroValidado) {
    setErrorApi(null);
    try {
      await apiFetch<Libro>('/api/libros', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      navigate('/catalogo');
    } catch (e) {
      setErrorApi(e instanceof Error ? e.message : 'Error desconocido');
    }
  }

  return (
    <Container className="my-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Agregar nuevo libro</h2>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control
          {...register('titulo')}
          placeholder="Título del libro"
          isInvalid={!!errors.titulo}
        />
        <Form.Control.Feedback type="invalid">{errors.titulo?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Select {...register('autorId')} isInvalid={!!errors.autorId}>
          <option value="">Seleccioná un autor</option>
          {(autores ?? []).map((autor) => (
            <option key={autor.id} value={autor.id}>{autor.nombre}</option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{errors.autorId?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Año</Form.Label>
        <Form.Control
          {...register('anio')}
          placeholder="Año de publicación"
          isInvalid={!!errors.anio}
        />
        <Form.Control.Feedback type="invalid">{errors.anio?.message}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>URL de imagen</Form.Label>
        <Form.Control
          {...register('imgSrc')}
          placeholder="https://..."
          isInvalid={!!errors.imgSrc}
        />
        <Form.Control.Feedback type="invalid">{errors.imgSrc?.message}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="dark" onClick={handleSubmit(onSubmit)}>
        Agregar libro
      </Button>
    </Container>
  );
}