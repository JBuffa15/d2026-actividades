import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './componentes/layout/layout';
import { Home } from './pages/home';
import { Catalogo } from './pages/catalogo';
import { LibroDetalle } from './pages/libroDetalle';
import { LibroNuevo } from './pages/LibroNuevo';
import { Login } from './pages/login';
import { SinPermiso } from './pages/sinPermiso';
import { PrivateRoute } from './componentes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/libros/:id" element={<LibroDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sin-permiso" element={<SinPermiso />} />
          <Route element={<PrivateRoute rol="ADMIN" />}>
            <Route path="/libros/nuevo" element={<LibroNuevo />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;