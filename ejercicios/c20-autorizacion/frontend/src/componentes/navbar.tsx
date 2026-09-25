import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const navigate = useNavigate();
  const { usuario, logout, tieneRol } = useAuth();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Librería</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo de libros</Nav.Link>
            {tieneRol('ADMIN') && (
              <Nav.Link as={Link} to="/libros/nuevo">+ Nuevo libro</Nav.Link>
            )}
            {usuario ? (
              <div className="d-flex align-items-center gap-2 ms-lg-2">
                <span className="text-white-50">Hola, {usuario.nombre}</span>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                  Salir
                </Button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}