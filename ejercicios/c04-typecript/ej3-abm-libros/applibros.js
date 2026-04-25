"use strict";
// Estado inicial en memoria
let catalogo = [
    { isbn: "101", titulo: "Fundación", autor: "Asimov", precio: 4500, disponible: true },
    { isbn: "102", titulo: "I, Robot", autor: "Asimov", precio: 3800, disponible: false }
];
// DOM
const listadoUl = document.getElementById("listado");
const statsP = document.getElementById("stats");
const errorDiv = document.getElementById("errorForm");
// Inputs 
const inTitulo = document.getElementById("titulo");
const inAutor = document.getElementById("autor");
const inPrecio = document.getElementById("precio");
const inDisp = document.getElementById("disponible");
const btnAgregar = document.getElementById("btnAgregar");
function eliminarLibro(isbn) {
    // Filtramos el array: nos quedamos con todos MENOS el que tiene ese ISBN
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
}
function renderizar(libros) {
    listadoUl.innerHTML = "";
    libros.forEach(l => {
        const li = document.createElement("li");
        // Usamos Backticks para el template
        li.innerHTML = `
            <strong>${l.titulo}</strong> - ${l.autor} ($${l.precio}) 
            <button onclick="eliminarDelListado('${l.isbn}')">Eliminar</button>
        `;
        listadoUl.appendChild(li);
    });
    const total = libros.reduce((acc, l) => acc + l.precio, 0);
    statsP.innerText = `Libros: ${libros.length} | Total: $${total}`;
}
// Función global para que el onclick del HTML la encuentre
window.eliminarDelListado = (isbn) => {
    eliminarLibro(isbn);
};
function validarFormulario() {
    errorDiv.innerText = "";
    if (inTitulo.value === "" || inAutor.value === "" || Number(inPrecio.value) <= 0) {
        errorDiv.innerText = "Todos los campos son obligatorios y precio > 0";
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo: inTitulo.value,
        autor: inAutor.value,
        precio: Number(inPrecio.value),
        disponible: inDisp.checked
    };
}
btnAgregar.onclick = () => {
    const nuevoLibro = validarFormulario();
    if (nuevoLibro) {
        catalogo.push(nuevoLibro);
        renderizar(catalogo);
        // Limpiar form
        inTitulo.value = "";
        inAutor.value = "";
        inPrecio.value = "";
        inDisp.checked = false;
    }
};
// Carga inicial
renderizar(catalogo);
