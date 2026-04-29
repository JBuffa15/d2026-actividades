// Definición de la interfaz según los requerimientos
interface Usuario {
    id: number;
    name: string;
    email: string;
    celular: string;
  }
  
  async function obtenerUsuarios(): Promise<Usuario[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
  
    try {
      const respuesta = await fetch(url);
  
      // verifico la respuesta , exitosa entre 200 a 299
      if (!respuesta.ok) {
        throw new Error(`Error en la petición: ${respuesta.status}`);
      }
  
      // conversión a JSON
      const datos: Usuario[] = await respuesta.json();
      return datos;
  
    } catch (error) {
      console.error("Hubo un problema al obtener los usuarios:", error);
      // devuelvo un array vacio 
      return [];
    }
  }
  
  // Llamada a la función y salida por consola
  obtenerUsuarios().then((usuarios) => {
    console.log("--- Lista de Usuarios ---");
    usuarios.forEach((u) => {
      console.log(`Nombre: ${u.name} | Email: ${u.email}`);
    });
  });