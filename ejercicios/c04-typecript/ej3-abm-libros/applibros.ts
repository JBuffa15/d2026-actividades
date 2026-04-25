interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
}

// Estado inicial en memoria
let catalogo: Libro[] = [
    { isbn: "101", titulo: "el valle", autor: "jenaro", precio: 4500, disponible: true },
    { isbn: "102", titulo: "humauaca", autor: "buffa", precio: 3800, disponible: false }
];

// DOM
const listadoUl = document.getElementById("listado")! as HTMLUListElement;
const statsP = document.getElementById("stats")! as HTMLParagraphElement;
const errorDiv = document.getElementById("errorForm")! as HTMLDivElement;

// Inputs 
const inTitulo = document.getElementById("titulo")! as HTMLInputElement;
const inAutor = document.getElementById("autor")! as HTMLInputElement;
const inPrecio = document.getElementById("precio")! as HTMLInputElement;
const inDisp = document.getElementById("disponible")! as HTMLInputElement;
const btnAgregar = document.getElementById("btnAgregar")! as HTMLButtonElement;



function eliminarLibro(isbn: string): void {
    // Filtramos el array: nos quedamos con todos MENOS el que tiene ese ISBN
    catalogo = catalogo.filter(l => l.isbn !== isbn);
    renderizar(catalogo);
}

function renderizar(libros: Libro[]): void {
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
(window as any).eliminarDelListado = (isbn: string) => {
    eliminarLibro(isbn);
};

function validarFormulario(): Libro | null {
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