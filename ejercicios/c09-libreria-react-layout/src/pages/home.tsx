import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { BookCard } from '../componentes/bookcard';

export function Home() {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Catálogo de libros</h2>

      <InputGroup className="mb-4" style={{ maxWidth: '500px' }}>
        <Form.Control placeholder="Buscar libro..." />
        <Button variant="dark">Buscar</Button>
      </InputGroup>

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