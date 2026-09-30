import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './navbar';
import { useAuth } from '../context/AuthContext';

vi.mock('../context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

function renderConRol(rol: string | null) {
  vi.mocked(useAuth).mockReturnValue({
    usuario: rol ? { id: 1, email: 'ana@test.com', nombre: 'Ana', rol } : null,
    cargando: false,
    login: vi.fn(),
    logout: vi.fn(),
    estaAutenticado: () => rol !== null,
    tieneRol: (...roles: string[]) => rol !== null && roles.includes(rol),
  });

  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('Navbar según el rol', () => {
  it('ADMIN ve el link "+ Nuevo libro" y su saludo', () => {
    renderConRol('ADMIN');
    expect(screen.getByText('+ Nuevo libro')).toBeInTheDocument();
    expect(screen.getByText('Hola, Ana')).toBeInTheDocument();
  });

  it('CLIENTE NO ve el link "+ Nuevo libro"', () => {
    renderConRol('CLIENTE');
    expect(screen.queryByText('+ Nuevo libro')).not.toBeInTheDocument();
    expect(screen.getByText('Salir')).toBeInTheDocument();
  });

  it('sin sesión muestra "Ingresar" y no muestra "Salir"', () => {
    renderConRol(null);
    expect(screen.getByText('Ingresar')).toBeInTheDocument();
    expect(screen.queryByText('Salir')).not.toBeInTheDocument();
  });
});