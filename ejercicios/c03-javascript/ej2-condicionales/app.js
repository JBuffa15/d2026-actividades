//Crear una función clasificarNota(nota) que reciba un número y
//retorne:
//○ "Desaprobado" si es menor a 4
//○ "Aprobado" si es entre 4 y 7
//○ "Promocionado" si es 8 o más
// Crear una función diaDeLaSemana(numero) con switch que retorne
//el nombre del día (1=Lunes...7=Domingo). Si es 6 o 7 agregar
//"(fin de semana)". Si no es 1-7, retornar "Día inválido".
// Probar ambas funciones con console.log usando distintos
//valores.


let numero = Number(prompt('Ingrese un numero del 1 al 10'));

function clasificarNota(nota){
if (nota >= 8 ){
    return "Promocionado";
} 
else if ( 4 <=  nota <= 7 ){
    return "aprobado";
}
 else {
    return "desaprobado";   
}
 
}

function DiaDeLaSemana(numero){
switch (numero) {
    case 1 : return "Lunes"; break;
    case 2 : return "Martes"; break;
    case 3 : return "miercoles"; break;
    case 4 : return "Jueves"; break;
    case 5 : return "Viernes "; break;
    case 6 : return "Sabado -> Fin de semana"; break;
    case 7 : return "Domingo -> Fin de semana"; break; 
      default : console.log("Dia Invalido") ; break; 
}


}

// pruebas : 

console.log("Test de notas");
console.log(clasificarNota(9));
console.log(clasificarNota(3));

console.log("Test de dias");
console.log(DiaDeLaSemana(10));
console.log(DiaDeLaSemana(6));
console.log(DiaDeLaSemana(1));


