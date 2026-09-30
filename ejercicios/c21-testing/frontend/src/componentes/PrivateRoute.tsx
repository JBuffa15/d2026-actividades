import { Navigate, Outlet } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  rol?: string;
}

export function PrivateRoute({ rol }: PrivateRouteProps) {
  const { cargando, estaAutenticado, tieneRol } = useAuth();

  if (cargando) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!estaAutenticado()) {
    return <Navigate to="/login" replace />;
  }

  if (rol && !tieneRol(rol)) {
    return <Navigate to="/sin-permiso" replace />;
  }

  return <Outlet />;
}