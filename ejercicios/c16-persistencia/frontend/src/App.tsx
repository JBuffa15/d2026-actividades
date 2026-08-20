import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Layout } from './componentes/layout/layout';
import { Home } from './pages/home';
import { Catalogo } from './pages/catalogo';
import { LibroDetalle } from './pages/libroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';
import type { BookCardProps } from './types/libro';
import './App.css';

const librosIniciales: BookCardProps[] = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967", imgSrc: "https://covers.openlibrary.org/b/id/8739161-M.jpg" },
  { titulo: "1984", autor: "George Orwell", anio: "1949", imgSrc: "https://covers.openlibrary.org/b/id/153158-M.jpg" },
  { titulo: "El Aleph", autor: "Jorge Luis Borges", anio: "1949", imgSrc: "https://covers.openlibrary.org/b/id/7361730-M.jpg" },
];

function App() {
  const [libros, setLibros] = useState<BookCardProps[]>(librosIniciales);

  function agregarLibro(nuevo: BookCardProps) {
    setLibros([...libros, nuevo]);
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home libros={libros} />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path="/libros/nuevo" element={<LibroNuevo agregarLibro={agregarLibro} />} />
      </Routes>
    </Layout>
  );
}

export default App;