//Ejercicio 5 - DOM: input y botón
// Crear un HTML con un <input type="number"> y un <button>
//"Generar"
// Al hacer click, leer el número del input y generar un "medio-
//árbol" de asteriscos de esa altura.
//Ejemplo para altura 4:
//*
//**
//***
//****
//● Mostrar el resultado en un <pre> en la página (no en consola)
//● Validar: si el input está vacío o es menor a 1, mostrar un
//mensaje de error en la página

const btn = document.getElementById("buttonGenerar");  // boton
const input = document.getElementById("idalta");   // el input para ingresar 
const Pantalla_resultado = document.getElementById("resultado");   // display del resultado


btn.addEventListener('click', () => {

   const altura=Number(input.value);
   Pantalla_resultado.innerText= "";
    if (input.value === "" | altura < 1 ){ 
        Pantalla_resultado.innerText = " No se ha ingresado input , invalido "
        Pantalla_resultado.style.color = "red";
    }
    

    Pantalla_resultado.style.color = "black";
    let arbol = "";

    
    for (let i = 1; i <= altura; i++) {
        // En cada  i, agregamos esa cantidad de asteriscos y un salto de línea
        arbol += "*".repeat(i) + "\n";
    }

});

