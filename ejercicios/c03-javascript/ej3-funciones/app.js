//Crear función calcularPrecioFinal(monto, medioPago) donde
//medioPago es "E" (efectivo), "D" (débito) o "C" (crédito):
//○ Monto menor a $200: sin descuento
//○ Entre $200 y $400: 30% off en efectivo, 20% débito, 10%
//crédito
//○ Mayor a $400: 40% off para todos
//○ Retornar el monto final
// Probar con al menos 5 combinaciones diferentes de monto y
//medio de pago. Mostrar cada resultado en consola con template
//literals: "Monto: $X | Pago: Y | Final: $Z"

function calcularPrecioFinal (monto,medioPago){
    let monto_final;
    if (monto < 200 ){
        return monto;
      }
    
      if (monto >= 200 && monto <= 400) {
        if (medioPago === "E" ){
            monto_final= monto * 0.70;
            return monto_final;
        }
        else if (medioPago === "D" ){
            monto_final= monto * 0.80;
            return monto_final;
        } else if (medioPago === "C" ){
            monto_final= monto * 0.90;
            return monto_final;
        }
      }
      if ( monto > 400){
        monto_final= monto * 0.60;
        return monto_final;
      }
}

// 5 resultados distintos 
const monto1 = 150, medio1 = "E";
console.log(`Monto: $${monto1} | Pago: ${medio1} | Final: $${calcularPrecioFinal(monto1, medio1)}`);

const monto2 = 500, medio2 = "E";
console.log(`Monto: $${monto2} | Pago: ${medio2} | Final: $${calcularPrecioFinal(monto2, medio2)}`);

const monto3 = 300, medio3 = "D";
console.log(`Monto: $${monto3} | Pago: ${medio3} | Final: $${calcularPrecioFinal(monto3, medio3)}`);

const monto4 = 300, medio4 = "C";
console.log(`Monto: $${monto4} | Pago: ${medio4} | Final: $${calcularPrecioFinal(monto4, medio4)}`);

const monto5 = 600 , medio5 = "D";
console.log(`Monto: ${monto5}$ | Medio de Pago:${medio5} | Final : ${calcularPrecioFinal(monto5, medio5)}`);