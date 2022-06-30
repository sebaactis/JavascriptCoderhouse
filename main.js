/* const edadPersona = 18;     CONDICIONALES
const dineroEnElBolsillo = 10000;
const dineroDeLaEntrada = 1000; */

/*if (edadPersona >= 18 && dineroEnElBolsillo >= dineroDeLaEntrada) {
    console.log ("Bienvenido a nuestro bar");

    if(edadPersona != 18) {
        console.log ("Sos mayor de 18 pero no tenes 18")
    }

} else {
    console.log ("No podes entrar");
}

*/

/* if (edadPersona >= 18 || (dineroEnElBolsillo >= dineroDeLaEntrada)) {
    console.log ("Bienvenido a nuestro bar");

    if(edadPersona != 18) {
        console.log ("Sos mayor de 18 pero no tenes 18")
    }

} else {
    console.log ("No podes entrar");
} */




/* const cantidadProductoCliente = prompt("ingrese cuanto quiere del producto");


if (cantidadProductoCliente <= 5) {
    let colorProducto = prompt("Que color queres") 
    if (colorProducto != "rojo" || colorProducto != "Rojo") {
        alert("No tenemos ese color, solo tenemos Rojo");
    }

} else {
    alert ("No contamos con stock suficiente");
}

 */






const listadoNotas = [5, 7, 3];

const posicion = 1;

/* listadoNotas[2]; // 3
listadoNotas[posicion]; // 7
listadoNotas[0]; // 5 */

let sumadorDeNotas = 0;

for (let i = 0; i < 3; i++) {

    sumadorDeNotas = sumadorDeNotas + listadoNotas[i]; // ACUMULADOR
    // sumadorDeNotas +- listadoNotas[i]; // ACUMULADOR RESUMIDO
}

console.log(sumadorDeNotas/3)

