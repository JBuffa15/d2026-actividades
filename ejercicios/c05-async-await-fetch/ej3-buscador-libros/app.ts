
interface LibroOL {
    title: string;
    author_name?: string[]; // la API devuelve un array de nombres
    first_publish_year?: number;
}

// interfaz para la respuesta completa de la API
interface RespuestaOpenLibrary {
    docs: LibroOL[];
}


const inputBusqueda = document.getElementById('busqueda') as HTMLInputElement;
const btnBuscar = document.getElementById('btn-buscar') as HTMLButtonElement;
const contenedorResultados = document.getElementById('resultados') as HTMLDivElement;
const mensajeError = document.getElementById('mensaje-error') as HTMLParagraphElement;
const loading = document.getElementById('loading') as HTMLParagraphElement;

async function buscarLibros(): Promise<void> {
    const texto = inputBusqueda.value.trim();

    //  input vacío
    if (texto === "") {
        mostrarError("Por favor, escribe el nombre de un libro.");
        return;
    }

    // limpio estado previo
    limpiarPantalla();
    loading.style.display = 'block';

    try {
        //  fetch a la API de open library
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}`;
        const respuesta = await fetch(url);

        if (!respuesta.ok) throw new Error("Error al conectar con la API");

        const datos: RespuestaOpenLibrary = await respuesta.json();

        // muestro los primeros 10 resultados
        const primerosDiez = datos.docs.slice(0, 10);
        
        if (primerosDiez.length === 0) {
            mostrarError("No se encontraron libros con ese nombre.");
        } else {
            renderizarLibros(primerosDiez);
        }

    } catch (error) {
        mostrarError("Ocurrió un error inesperado. Inténtalo de nuevo.");
    } finally {
        loading.style.display = 'none';
    }
}

function renderizarLibros(libros: LibroOL[]): void {
    libros.forEach(libro => {
        const divLibro = document.createElement('div');
        divLibro.style.border = "1px solid black";
        divLibro.style.margin = "10px 0";
        divLibro.style.padding = "10px";

        // campos opcionales con operadores ternarios o valores por defecto
        const autor = libro.author_name ? libro.author_name.join(', ') : "Autor desconocido";
        const anio = libro.first_publish_year ? libro.first_publish_year : "Año no disponible";

        divLibro.innerHTML = `
            <h3>${libro.title}</h3>
            <p><strong>Autor:</strong> ${autor}</p>
            <p><strong>Primer año de publicación:</strong> ${anio}</p>
        `;
        contenedorResultados.appendChild(divLibro);
    });
}

function mostrarError(mensaje: string): void {
    mensajeError.textContent = mensaje;
    mensajeError.style.display = 'block';
}

function limpiarPantalla(): void {
    mensajeError.style.display = 'none';
    contenedorResultados.innerHTML = '';
}

// click
btnBuscar.addEventListener('click', buscarLibros);