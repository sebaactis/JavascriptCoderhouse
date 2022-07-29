const carrito = [];


const elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
const productosCarrito = elementosCarrito;
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;




// FUNCIONES

class Producto {
    constructor(idProducto, nombreProducto, precio) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
    };

}

function agregarProductoCarrito(producto) {

    carrito.push(producto);
    localStorage.setItem("carritoTotal", JSON.stringify(carrito));
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
    document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;
}

function eliminarProductoCarrito(variableProducto) {
    const index = carrito.indexOf(variableProducto);

    if (index !== -1) {
        carrito.splice(index, 1);
        localStorage.setItem("carritoTotal", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
        document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;
        console.log(carrito)
        console.log("Producto eliminado con exito");

    }

    else {
        console.log("El producto informado no esta actualmente en el carrito o no existe");
    }
}



/* function busquedaNombre() {
    const resultadoBusquedaNombre = carrito.find((el) => el.nombreProducto === "Xbox Series S");
    console.log(resultadoBusquedaNombre);
}


function busquedaPrecio() {
    const resultadoBusquedaPrecio = carrito.filter((el) => el.precio > 100000)
    console.log(resultadoBusquedaPrecio);
} */


// INTERACCIONES

const producto1 = new Producto(1, "Jostick Xbox Series", 15999);
const producto2 = new Producto(2, "Bateria Xbox Series", 9999);
const producto3 = new Producto(3, "Xbox Series S", 90000);
const producto4 = new Producto(4, "Xbox Series X", 179999);
const producto5 = new Producto(5, "Jostick PS5", 14999);
const producto6 = new Producto(6, "Base Cargadora PS5", 6999);
const producto7 = new Producto(7, "PS5 Digital", 179999);
const producto8 = new Producto(8, "PS5", 219999);



// DOM

let nombreUsuario = prompt("Escriba su nombre")

let agregado = document.createElement("p");
agregado.innerHTML = "¡Hola " + nombreUsuario + "!";

const contenedorPrincipal = document.getElementById("contenedorPrincipal");

contenedorPrincipal.insertBefore(agregado, contenedorPrincipal.children[1]);


/* for (let productos of carrito) {
    let contenedorProductos = document.createElement("div");
    contenedorProductos.innerHTML =
        `<h3>${productos.nombreProducto}</h3>
    <p>${productos.precio}</p>
    
    `;
    let body = document.body
    body.insertBefore(contenedorProductos, body.children[3]);

} */


// EVENTOS

const agregarProducto1 = document.getElementById("btn-agregar-producto1");
agregarProducto1.onclick = () => {
    agregarProductoCarrito(producto1);
}

const borrarProducto1 = document.getElementById("btn-borrar-producto1");
borrarProducto1.onclick = () => {
    eliminarProductoCarrito(producto1);
}

const agregarProducto2 = document.getElementById("btn-agregar-producto2");
agregarProducto2.onclick = () => {
    agregarProductoCarrito(producto2);
}

const borrarProducto2 = document.getElementById("btn-borrar-producto2");
borrarProducto2.onclick = () => {
    eliminarProductoCarrito(producto2);
}

const agregarProducto3 = document.getElementById("btn-agregar-producto3");
agregarProducto3.onclick = () => {
    agregarProductoCarrito(producto3);
}

const borrarProducto3 = document.getElementById("btn-borrar-producto3");
borrarProducto3.onclick = () => {
    eliminarProductoCarrito(producto3);
}

const agregarProducto4 = document.getElementById("btn-agregar-producto4");
agregarProducto4.onclick = () => {
    agregarProductoCarrito(producto4);
}

const borrarProducto4 = document.getElementById("btn-borrar-producto4");
borrarProducto4.onclick = () => {
    eliminarProductoCarrito(producto4);
}

const agregarProducto5 = document.getElementById("btn-agregar-producto5");
agregarProducto5.onclick = () => {
    agregarProductoCarrito(producto5);
}

const borrarProducto5 = document.getElementById("btn-borrar-producto5");
borrarProducto5.onclick = () => {
    eliminarProductoCarrito(producto5);
}

const agregarProducto6 = document.getElementById("btn-agregar-producto6");
agregarProducto6.onclick = () => {
    agregarProductoCarrito(producto6);
}

const borrarProducto6 = document.getElementById("btn-borrar-producto6");
borrarProducto6.onclick = () => {
    eliminarProductoCarrito(producto6);
}

const agregarProducto7 = document.getElementById("btn-agregar-producto7");
agregarProducto7.onclick = () => {
    agregarProductoCarrito(producto7);
}

const borrarProducto7 = document.getElementById("btn-borrar-producto7");
borrarProducto7.onclick = () => {
    eliminarProductoCarrito(producto7);
}

const agregarProducto8 = document.getElementById("btn-agregar-producto8");
agregarProducto8.onclick = () => {
    agregarProductoCarrito(producto8);
}

const borrarProducto8 = document.getElementById("btn-borrar-producto8");
borrarProducto8.onclick = () => {
    eliminarProductoCarrito(producto8);
}




const inputColor = document.getElementById("inputColor");
inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value
})















