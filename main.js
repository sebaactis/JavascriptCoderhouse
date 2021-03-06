const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;


const productos = [
    {
        id: 1,
        titulo: "Jostick Xbox Series",
        img: "imagenes/jostickxbox1.jpg",
        precio: 15999,
        categoria: "XBOX"

    },

    {
        id: 2,
        titulo: "Bateria Xbox Series",
        img: "imagenes/bateriaxbox.jpg",
        precio: 9999,
        categoria: "XBOX"

    },

    {
        id: 3,
        titulo: "Xbox Series S",
        img: "imagenes/xboxseriess.jpg",
        precio: 99999,
        categoria: "XBOX"

    },

    {
        id: 4,
        titulo: "Xbox Series X",
        img: "imagenes/xboxseriesx.jpg",
        precio: 199999,
        categoria: "XBOX"

    },

    {
        id: 5,
        titulo: "Jostick PS5",
        img: "imagenes/jostickps5.jpg",
        precio: 16999,
        categoria: "PS5"

    },

    {
        id: 6,
        titulo: "Base Cargadora PS5",
        img: "imagenes/basecargaps5.jpg",
        precio: 8999,
        categoria: "PS5"

    },

    {
        id: 7,
        titulo: "PS5 Digital",
        img: "imagenes/ps5digital.jpg",
        precio: 169999,
        categoria: "PS5"

    },

    {
        id: 8,
        titulo: "PS5",
        img: "imagenes/ps5.jpg",
        precio: 239999,
        categoria: "PS5"

    },

];


// FUNCIONES

function generarCards() {
    productos.forEach((producto) => {
        const idButtonAgregar = `add-card${producto.id}`
        const idButtonEliminar = `delete-card${producto.id}`
        document.getElementById("seccion-carrito").innerHTML +=
            `<div class="card">
        <h4>${producto.titulo}</h4>
        <img src="${producto.img}" style="width: 15rem">
        <h5>$${producto.precio}</h5>
        <button class="botonAgregar" id="${idButtonAgregar}"  data-id="${producto.id}"> Añadir al carrito </button>
        <button class="botonEliminar" id="${idButtonEliminar}" data-id="${producto.id}"> Eliminar del carrito </button>
        </div>`

    });

};


function agregarProductoCarrito() {
    productos.forEach((producto) => {
        const idButtonAgregar = `add-card${producto.id}`
        document.getElementById(idButtonAgregar).onclick = () => {
            carrito.push(producto);
            const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
            document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            document.getElementById("carritoVista").innerHTML = ""
            carrito.forEach((producto) => {
                document.getElementById("carritoVista").innerHTML +=
                    `<tr> 
                    <th scope="row">${producto.id}</th>
                    <td>${producto.titulo}</td>
                    <td>${producto.precio}</td>
                </tr>`
            })
            console.log(carrito);
        }
    })

};

function eliminarProductoCarrito() {
    productos.forEach((producto) => {
        const idButtonEliminar = `delete-card${producto.id}`
        document.getElementById(idButtonEliminar).onclick = () => {

            validacionCarrito = carrito.includes(producto);

            if (validacionCarrito == true) {

                carrito.splice(producto, 1);
                const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)
                document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                console.log(carrito);

            } else {
                alert("Este producto no esta en el carrito")
            }
        }
    })


}

function generarCardsCarrito() {
    document.getElementById("carritoVista").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("carritoVista").innerHTML +=
            `<tr> 
            <th scope="row">${producto.id}</th>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td> <img src=${producto.img} class="imagenesCarrito"> </td>
            <button > <img src="./imagenes/cerrar.png"></button>
            <br>
        </tr>`
    })
};

function consultarNombre() {
    let nombreUsuario = prompt("Escriba su nombre")

    let agregado = document.createElement("p");
    agregado.innerHTML = "¡Hola " + nombreUsuario + "!";

    const contenedorPrincipal = document.getElementById("contenedorPrincipal");

    contenedorPrincipal.insertBefore(agregado, contenedorPrincipal.children[1]);

}

generarCards();
agregarProductoCarrito();
eliminarProductoCarrito();
consultarNombre();
















