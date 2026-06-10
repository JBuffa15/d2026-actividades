import { Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';
import type { BookCardProps } from '../types/libro';

interface CatalogoProps {
  libros: BookCardProps[];
}

export function Catalogo({ libros }: CatalogoProps) {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo completo</h2>
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