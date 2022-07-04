let ingresarNumero = parseInt(prompt("Ingrese un numero para ver la tabla del 1 al 10 de dicho numero"));

let mensajeTabla = "La tabla del " + ingresarNumero + " " + "es:"
    alert(mensajeTabla);


for (let i = 1; i <= 10; i++) {
       let tablaNumero = ingresarNumero + " " + "x " + i + " " + "es: " +  (ingresarNumero * i);
       alert(tablaNumero);  
}