import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/api/libros');

  if (loading) return (
    <Container className="my-5 text-center">
      <Spinner animation="border" />
    </Container>
  );

  if (error) return (
    <Container className="my-5">
      <Alert variant="danger">{error}</Alert>
    </Container>
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo completo</h2>
      <Row className="g-4">
        {(libros ?? []).map((libro) => (
          <Col key={libro.id} md={4} lg={3}>
            <BookCard titulo={libro.titulo} autor={libro.autor.nombre} anio={libro.anio} imgSrc={libro.imgSrc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}