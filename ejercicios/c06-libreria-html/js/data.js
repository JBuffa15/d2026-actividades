// Buscador de libros con Open Library API

async function buscarLibros() {
    const input = document.getElementById('busqueda');
    const btnBuscar = document.getElementById('btn-buscar');
    const contenedorResultados = document.getElementById('resultados');
    const mensajeError = document.getElementById('mensaje-error');
    const loading = document.getElementById('loading');
  
    if (!input) return; // solo corre en catalogo.html
  
    const texto = input.value.trim();
  
    if (texto === "") {
      mensajeError.textContent = "Por favor, escribe el nombre de un libro.";
      mensajeError.style.display = 'block';
      return;
    }
  
  
    mensajeError.style.display = 'none';
    contenedorResultados.innerHTML = '';
    loading.style.display = 'block';
  
    try {
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}`;
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error("Error al conectar con la API");
  
      const datos = await respuesta.json();
      const primerosDiez = datos.docs.slice(0, 10);
  
      if (primerosDiez.length === 0) {
        mensajeError.textContent = "No se encontraron libros con ese nombre.";
        mensajeError.style.display = 'block';
      } else {
        renderizarLibros(primerosDiez);
      }
    } catch (error) {
      mensajeError.textContent = "Ocurrió un error inesperado. Inténtalo de nuevo.";
      mensajeError.style.display = 'block';
    } finally {
      loading.style.display = 'none';
    }
  }
  
  function renderizarLibros(libros) {
    const contenedor = document.getElementById('resultados');
  
    libros.forEach(libro => {
      const autor = libro.author_name ? libro.author_name.join(', ') : "Autor desconocido";
      const anio = libro.first_publish_year ? libro.first_publish_year : "Año no disponible";
      const coverId = libro.cover_i;
      const imgSrc = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
        : 'https://via.placeholder.com/150x200?text=Sin+portada';
  
      const col = document.createElement('div');
      col.className = 'col-md-4 col-lg-3';
      col.innerHTML = `
        <div class="card h-100">
          <img src="${imgSrc}" class="card-img-top" alt="${libro.title}" style="height: 220px; object-fit: cover;"/>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title fw-bold">${libro.title}</h6>
            <p class="card-text text-muted small">${autor}</p>
            <p class="card-text text-muted small">Año: ${anio}</p>
            <a href="libro.html" class="btn btn-outline-dark btn-sm mt-auto">Ver más</a>
          </div>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }
  
  //  solo actúa si el botón existe en la página
  const btnBuscar = document.getElementById('btn-buscar');
  if (btnBuscar) {
    btnBuscar.addEventListener('click', buscarLibros);
  }