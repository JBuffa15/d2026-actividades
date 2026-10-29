import { Container, Alert } from 'react-bootstrap';

export function SinPermiso() {
  return (
    <Container className="my-5">
      <Alert variant="warning">No tenés permisos para acceder a esta página.</Alert>
    </Container>
  );
}