import { Container, Row, Col } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';

export function Catalogo() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo completo</h2>
      <Row className="g-4">
        <Col md={4} lg={3}>
          <BookCard
            titulo="Cien años de soledad"
            autor="Gabriel García Márquez"
            anio="1967"
            imgSrc="https://covers.openlibrary.org/b/id/8739161-M.jpg"
          />
        </Col>
        <Col md={4} lg={3}>
          <BookCard
            titulo="1984"
            autor="George Orwell"
            anio="1949"
            imgSrc="https://covers.openlibrary.org/b/id/153158-M.jpg"
          />
        </Col>
        <Col md={4} lg={3}>
          <BookCard
            titulo="El Aleph"
            autor="Jorge Luis Borges"
            anio="1949"
            imgSrc="https://covers.openlibrary.org/b/id/7361730-M.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
}