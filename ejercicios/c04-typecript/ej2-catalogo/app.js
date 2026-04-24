"use strict";
// ejemplo de catalogo
const catalogo = [
    { isbn: 111, titulo: "hola1", autor: "Borges", precio: 5000, disponible: true },
    { isbn: 222, titulo: "hola2", autor: "Cortázar", precio: 4500, disponible: false },
    { isbn: 333, titulo: "hola3", autor: "Borges", precio: 5500, disponible: true },
    { isbn: 444, titulo: "hola4", autor: "Buffa", precio: 3000, disponible: true },
    { isbn: 345, titulo: "hola5", autor: "jenaro", precio: 2000, disponible: false }
];
//  selección de Elementos
const inputAutor = document.getElementById("filtroAutor");
const btnFiltrar = document.getElementById("filtrar");
const btnDisponibles = document.getElementById("mostrarDisponibles");
const btnTodos = document.getElementById("mostrarTodos");
const listadoUl = document.getElementById("listado");
const statsP = document.getElementById("stats");
//  funciones 
function buscarPorAutor(autor) {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter(l => l.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const suma = libros.reduce((acc, l) => acc + l.precio, 0);
    return suma / libros.length;
}
// renderizado 
function renderizar(libros) {
    listadoUl.innerHTML = ""; // Limpiar lista
    libros.forEach(l => {
        const li = document.createElement("li");
        li.innerText = `${l.titulo} - ${l.autor} ($${l.precio}) ${l.disponible ? "[✅]" : "[❌]"}`;
        listadoUl.appendChild(li);
    });
    const promedio = precioPromedio(libros);
    statsP.innerText = `Cantidad: ${libros.length} | Precio Promedio: $${promedio.toFixed(2)}`;
}
//  botones
btnFiltrar.onclick = () => renderizar(buscarPorAutor(inputAutor.value));
btnDisponibles.onclick = () => renderizar(librosDisponibles());
btnTodos.onclick = () => renderizar(catalogo);
// carga inicial
renderizar(catalogo);
