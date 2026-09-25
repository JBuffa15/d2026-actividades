import { Container, Row, Col, InputGroup, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import { useFetch } from '../hooks/useFetch';
import type { Libro } from '../types/libro';

export function Home() {
  const { data: libros, loading, error } = useFetch<Libro[]>('/api/libros');

  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo de libros</h2>
      <InputGroup className="mb-4" style={{ maxWidth: '500px' }}>
        <Form.Control placeholder="Buscar libro..." />
        <Button variant="dark">Buscar</Button>
      </InputGroup>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}

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