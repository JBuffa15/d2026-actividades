//Agregar un <input type="text"> para nombre de producto y un
//<button> "Agregar"
// Al hacer click, agregar el producto como un <li> dentro de un
//<ul> en la página
//Cada item debe tener un botón "Eliminar" que al clickearlo
//borre ese item de la lista
//Validar que el input no esté vacío 
//Agregar un contador que muestre "X productos en la lista"

  const boton = document.getElementById('BotonAgregar');   // objetos creados
  const ingresar = document.getElementById('Nomproducto');
  const contador  = document.getElementById('contador');
  const lista = documents.getElementById('ListaProductos');

function actualizar_contador(){
    const cantidad = lista.children.length; // la cantidad la obtenemos por los "hijos" li de ul
    contador.innerText = "${cantidad} productos listados";
}

boton.addEventListener('click', () => { 
 const nombre = ingresar.value.trim(); // trim para los espacios 

// validamos 
if ( nombre = ""){
    alert("no se ingreso nada , intente de nuevo");
    return;
}

//creamos elemento li
const nuevoproducto = document.createElement('li');
nuevoproducto.innerText= nombre + "";

// creamos el boton para cada li
const botoneliminar = document.createElement('button');
botoneliminar.innerText = "Eliminar producto?"

// programo el boton :

botoneliminar.onclick = function (){ 
 nuevoproducto.remove();
 actualizar_contador();
}

nuevoproducto.appendChild(botoneliminar);  // agrego el boton al objeto li 
lista.appendchild(nuevoproducto); // agrego el nuevo producto a la lista 

ingresar.value=""; // actualizamos
actualizar_contador();

 
});