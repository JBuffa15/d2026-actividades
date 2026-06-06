import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

export function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#home"> Librería </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"> Inicio </Nav.Link>
            <Nav.Link href="#catalogo" active>Catálogo de libros:</Nav.Link>
            <Nav.Link href="#contacto">Contacto directo</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}