interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  
  // referencias al DOM
  const userListElement = document.getElementById('user-list') as HTMLUListElement;
  const loadingElement = document.getElementById('loading') as HTMLParagraphElement;
  const errorElement = document.getElementById('error-message') as HTMLParagraphElement;
  
  async function obtenerYMostrarUsuarios(): Promise<void> {
    const url = "https://jsonplaceholder.typicode.com/users";
  
    //  estado de carga y ocultamos errores previos
    loadingElement.classList.remove('hidden');
    errorElement.classList.add('hidden');
    userListElement.innerHTML = '';
  
    try {
      const respuesta = await fetch(url);
      
      if (!respuesta.ok) throw new Error("Error en el servidor");
  
      const usuarios: Usuario[] = await respuesta.json();
      
      // 2. renderizamos los datos
      renderizarUsuarios(usuarios);
  
    } catch (error) {
      
      errorElement.classList.remove('hidden');
      console.error(error);
    } finally {
      // ocultamos el estado de carga siempre 
      loadingElement.classList.add('hidden');
    }
  }
  
  function renderizarUsuarios(usuarios: Usuario[]): void {
    usuarios.forEach(usuario => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${usuario.name}</strong><br>
        <span>Email: ${usuario.email}</span>
      `;
      userListElement.appendChild(li);
    });
  }
  
  // Iniciar la carga al abrir la página
  obtenerYMostrarUsuarios();