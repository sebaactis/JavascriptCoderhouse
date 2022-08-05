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
        document.getElementById("seccion-carrito").innerHTML +=
            `<div class="card">
        <h4>${producto.titulo}</h4>
        <img src="${producto.img}" style="width: 15rem">
        <h5>$${producto.precio}</h5>
        <button class="botonAgregar" id="${idButtonAgregar}"  data-id="${producto.id}"> Añadir al carrito </button>
        </div>`
    });

};

function filtroPorCategoria(categoria) {
    document.getElementById("seccion-carrito").innerHTML = ""
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
    productosFiltrados.forEach((producto) => {
        const idButtonAgregar = `add-card${producto.id}`
        document.getElementById("seccion-carrito").innerHTML +=
            `<div class="card">
        <h4>${producto.titulo}</h4>
        <img src="${producto.img}" style="width: 15rem">
        <h5>$${producto.precio}</h5>
        <button class="botonAgregar" id="${idButtonAgregar}"  data-id="${producto.id}"> Añadir al carrito </button>
        </div>`
    });
    agregarProductoCarrito();

}

function accionFiltrado() {
    for (const listado of document.querySelectorAll(".filtrar-categoria")) {
        listado.addEventListener('click', (eventoFiltrado) => {
            const categoria = eventoFiltrado.target.getAttribute('data-categoria');
            filtroPorCategoria(categoria)
        })
    }

}

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


function eliminarDelCarrito(productoId) {

    const prod = carrito.find((producto) => producto.id == productoId)
    let i = carrito.indexOf(prod)
    if (i != -1) { carrito.splice(i, 1) }
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0)

    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("botonCarrito").innerHTML = `${carrito.length}  - $${total}`;
    generarCardsCarrito();
}

function generarCardsCarrito() {
    document.getElementById("carritoVista").innerHTML = ""
    carrito.forEach((producto) => {
        document.getElementById("carritoVista").innerHTML +=
            `<tr> 
        <td>${producto.titulo}</td>
        <td>$${producto.precio}</td>
        <td> <img src=${producto.img} class="imagenesCarrito"> </td>
        <td><button type="button" class="btn btn-secondary borrar-producto" onclick="eliminarDelCarrito(${producto.id})" info-borrar="${producto.id}">Eliminar</button></td>
    </tr>`
    })
};

generarCards();
eliminarDelCarrito();
agregarProductoCarrito();
accionFiltrado();














