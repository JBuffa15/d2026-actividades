import { Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import { useFetch } from '../hooks/useFetch';
import type { BookCardProps } from '../types/libro';

export function Catalogo() {
  const { data: libros, loading, error } = useFetch<BookCardProps[]>('/libros.json');

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
        {(libros ?? []).map((libro, index) => (
          <Col key={index} md={4} lg={3}>
            <BookCard {...libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}