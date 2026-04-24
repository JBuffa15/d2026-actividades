 
interface Libro {
    isbn: number;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
   genero?: string; //  ? lo hace opcional
}

// ejemplo de catalogo
const catalogo: Libro[] = [
    { isbn: 111, titulo: "hola1", autor: "Borges", precio: 5000, disponible: true },
    { isbn: 222, titulo: "hola2", autor: "Cortázar", precio: 4500, disponible: false },
    { isbn: 333, titulo: "hola3", autor: "Borges", precio: 5500, disponible: true },
    { isbn: 444, titulo: "hola4", autor: "Buffa", precio: 3000, disponible: true } ,
    { isbn :345 ,titulo: "hola5" , autor:"jenaro" , precio:2000 , disponible: false  }
];

//  selección de Elementos
const inputAutor = document.getElementById("filtroAutor")! as HTMLInputElement;
const btnFiltrar = document.getElementById("filtrar")! as HTMLButtonElement;
const btnDisponibles = document.getElementById("mostrarDisponibles")! as HTMLButtonElement;
const btnTodos = document.getElementById("mostrarTodos")! as HTMLButtonElement;
const listadoUl = document.getElementById("listado")! as HTMLUListElement;
const statsP = document.getElementById("stats")! as HTMLParagraphElement;

//  funciones 
function buscarPorAutor(autor: string): Libro[] {
    return catalogo.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
}

function librosDisponibles(): Libro[] {
    return catalogo.filter(l => l.disponible);
}

function precioPromedio(libros: Libro[]): number {
    if (libros.length === 0) return 0;
    const suma = libros.reduce((acc, l) => acc + l.precio, 0);
    return suma / libros.length;
}

// renderizado 
function renderizar(libros: Libro[]): void {
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


