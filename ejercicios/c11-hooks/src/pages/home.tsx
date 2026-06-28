import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import type { BookCardProps } from '../types/libro';

interface HomeProps {
  libros: BookCardProps[];
}

export function Home({ libros }: HomeProps) {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo de libros</h2>
      <InputGroup className="mb-4" style={{ maxWidth: '500px' }}>
        <Form.Control placeholder="Buscar libro..." />
        <Button variant="dark">Buscar</Button>
      </InputGroup>
      <Row className="g-4">
        {libros.map((libro, index) => (
          <Col key={index} md={4} lg={3}>
            <BookCard {...libro} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}