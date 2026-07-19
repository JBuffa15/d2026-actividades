const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Datos hardcodeados — misma forma que usa BookCardProps en el front
const libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: "1967",
    imgSrc: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    id: 2,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    anio: "1963",
    imgSrc: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
  },
  {
    id: 3,
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    anio: "1944",
    imgSrc: "https://covers.openlibrary.org/b/id/8232004-L.jpg"
  }
];

app.get('/', (req, res) => {
  res.send('Backend de la librería funcionando 🚀 (con Docker)');
});

app.get('/libros', (req, res) => {
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});