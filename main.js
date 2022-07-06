function valorPesos(pesos) {
    return pesos + pesos * 0.3 + pesos * 0.35;
}

alert('Bienvenido, en este simulador vas a poder ver como afectan los impuestos a las compras en moneda extranjera');
alert('Todos los valores son representados en ARS, por favor, tengalo en cuenta a la hora de ingresar datos');
alert('El impuesto pais es un 30% del valor original');
alert('El impuesto ganancias es un 35% del valor original');
alert('Para empezar, debes ingresar 5 numeros mayores a 0, y veras como aumenta el valor a raiz de los impuestos agregados');


for (let i = 1; i < 5; i++) {

    let resultado = valorPesos(parseInt(prompt('Ingrese un precio en pesos')))

    if (resultado > 0) {

        alert('Valor del producto + impuesto pais + impuesto ganancias: ' + '$' + resultado);
    } else {

        alert('No ingreso un numero valido, por favor, intente de nuevo');
    }

}

alert('Muchas gracias por participar');