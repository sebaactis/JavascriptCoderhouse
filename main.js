let IngresarNumero = parseInt(prompt("Ingrese un numero del 1 al 10 para ver la tabla de ese numero"));

let mensajeTabla = "La tabla del " + IngresarNumero + " " + "es:"
    alert(mensajeTabla);


for (let i = 1; i <= 10; i++) {
       let tablaNumero = IngresarNumero + " " + "x " + i + " " + "es: " +  (IngresarNumero * i);
       alert(tablaNumero);    
}

