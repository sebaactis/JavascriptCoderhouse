
// FUNCIONES

class Producto {
    constructor(idProducto, nombreProducto, precio) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    };

}

function agregarProductoCarrito(producto) {

    let validarStock = prompt("Ingrese cuantas unidades desea de su producto");

    if (validarStock <= 3) {
        carrito.push(producto);
        console.log(carrito);
        alert("Su producto fue agregado al carrito");
    }

    else {
        alert("No contamos con el stock ingresado. Por favor, ingrese una cantidad menor");
    }

}

function eliminarProductoCarrito(variableProducto) {
    const index = carrito.indexOf(variableProducto);

    if (index !== -1) {
        carrito.splice(index, 1);
        console.log(carrito)
    }

    else {
        console.log("El producto informado no esta actualmente en el carrito o no existe");
    }
}



function busquedaNombre() {
    const resultadoBusquedaNombre = carrito.find((el) => el.nombreProducto === "Xbox Series S");
    console.log(resultadoBusquedaNombre);
}


function busquedaPrecio() {
    const resultadoBusquedaPrecio = carrito.filter((el) => el.precio > 100000)
    console.log(resultadoBusquedaPrecio);
}


// INTERACCIONES

const producto1 = new Producto(1, "Jostick Xbox Series", 15999);
const producto2 = new Producto(2, "Bateria Xbox Series", 9999);
const producto3 = new Producto(3, "Xbox Series S", 90000);
const producto4 = new Producto(4, "Xbox Series X", 179999);
const producto5 = new Producto(5, "Jostick PS5", 14999);
const producto6 = new Producto(6, "Base Cargadora PS5", 6999);
const producto7 = new Producto(7, "PS5 Digital", 179999);
const producto8 = new Producto(8, "PS5", 219999);


const carrito = [];


agregarProductoCarrito(producto1);
agregarProductoCarrito(producto2);
agregarProductoCarrito(producto3);
agregarProductoCarrito(producto4);




eliminarProductoCarrito(producto1);
eliminarProductoCarrito(producto2);
eliminarProductoCarrito(producto5);



busquedaNombre();
busquedaPrecio();










