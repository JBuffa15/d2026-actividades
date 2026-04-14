//Ejercicio 4 - Arrays y bucles
// Crear un array con al menos 8 números
//Usando for o for...of, calcular y mostrar en consola:
//La suma total
//El promedio
//El número mayor
//El número menor
//Crear una función generarAsteriscos(n) que reciba un número y
//retorne un string con esa cantidad de asteriscos (ej:
//generarAsteriscos(5) → "*****"). Usar un bucle for.


const numeros=[ 1 , 3 , 5, 8 , 9 , 7 , 10 , 15];
let suma_total =0;

for ( const num of numeros) { // recorremos y sumamos 
suma_total += num;
}

// creamos las variables 
let promedio = suma_total / numeros.length;
let maximo = Math.max(... numeros);
let minimo = Math.min(... numeros);

// mostramos los resulatods :

console.log( `Suma Total : ${suma_total} | Promedio : ${promedio} | Maximo : ${maximo} | Minimo : ${minimo}`);

// funcion de asteriscos 

function generarAsteriscos(n) { 
let asteriscos = "" ;
 for ( let i ; i < n ; i++){
    asteriscos += "*";
 }
 return asteriscos;
}



// console de l0s asteriscos :
console.log(generarAsteriscos(6));