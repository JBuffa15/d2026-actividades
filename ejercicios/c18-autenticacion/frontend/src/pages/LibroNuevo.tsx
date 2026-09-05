import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import type { BookCardProps } from '../types/libro';

interface LibroNuevoProps {
  agregarLibro: (libro: BookCardProps) => void;
}

export function LibroNuevo({ agregarLibro }: LibroNuevoProps) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LibroValidado>({
    resolver: zodResolver(libroSchema),
  });

  function onSubmit(data: LibroValidado) {
    agregarLibro({
      titulo: data.titulo,
      autor: data.autor,
      anio: data.anio,
      imgSrc: data.imgSrc || 'https://via.placeholder.com/150',
    });
    navigate('/catalogo');
  }

  return (
    <Container className="my-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Agregar nuevo libro</h2>

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
        <Form.Control
          {...register('autor')}
          placeholder="Autor del libro"
          isInvalid={!!errors.autor}
        />
        <Form.Control.Feedback type="invalid">{errors.autor?.message}</Form.Control.Feedback>
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
        <Form.Label>URL de imagen (opcional)</Form.Label>
        <Form.Control
          {...register('imgSrc')}
          placeholder="https://..."
        />
      </Form.Group>

      <Button variant="dark" onClick={handleSubmit(onSubmit)}>
        Agregar libro
      </Button>
    </Container>
  );
}