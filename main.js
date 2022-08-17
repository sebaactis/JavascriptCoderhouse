const carrito = JSON.parse(localStorage.getItem("carrito")) || []

// DOM
const contenedorDeProductos = document.getElementById("seccion-carrito")
const botonVaciarCarrito = document.getElementById("botonVaciarCarrito")
const filtro = document.getElementById("filtros")
const contenedorDolar = document.getElementById("dolarBlueSeccion")

// Eventos
contenedorDeProductos?.addEventListener("click", (e) => {
	if (e.target.classList.contains("botonAgregar")) {
		agregarProductoCarrito(e.target.dataset.id) // data-id
	}
})

botonVaciarCarrito?.addEventListener("click", borrarTodoCarrito)

filtro?.addEventListener("click", (e) => {
	if (e.target.classList.contains("filtro")) {
		const categoriaFiltro = e.target.dataset.filter // data-filter
		filtroPorCategoria(categoriaFiltro)
	}
})

// ARRAY - STOCK

const productos = [
	{
		id: 1,
		titulo: "Jostick Xbox Series",
		img: "imagenes/jostickxbox1.jpg",
		precio: 15999,
		categoria: "XBOX",
		cantidad: 1,
	},

	{
		id: 2,
		titulo: "Bateria Xbox Series",
		img: "imagenes/bateriaxbox.jpg",
		precio: 9999,
		categoria: "XBOX",
		cantidad: 1,
	},

	{
		id: 3,
		titulo: "Xbox Series S",
		img: "imagenes/xboxseriess.jpg",
		precio: 99999,
		categoria: "XBOX",
		cantidad: 1,
	},

	{
		id: 4,
		titulo: "Xbox Series X",
		img: "imagenes/xboxseriesx.jpg",
		precio: 199999,
		categoria: "XBOX",
		cantidad: 1,
	},

	{
		id: 5,
		titulo: "Jostick PS5",
		img: "imagenes/jostickps5.jpg",
		precio: 16999,
		categoria: "PS5",
		cantidad: 1,
	},

	{
		id: 6,
		titulo: "Base Cargadora PS5",
		img: "imagenes/basecargaps5.jpg",
		precio: 8999,
		categoria: "PS5",
		cantidad: 1,
	},

	{
		id: 7,
		titulo: "PS5 Digital",
		img: "imagenes/ps5digital.jpg",
		precio: 169999,
		categoria: "PS5",
		cantidad: 1,
	},

	{
		id: 8,
		titulo: "PS5",
		img: "imagenes/ps5.jpg",
		precio: 239999,
		categoria: "PS5",
		cantidad: 1,
	},
]

// ----------------------- FUNCIONES

// Utiles para carrito
function updateTotal(arrayCarrito) {
	const total = arrayCarrito.reduce(
		(acumulador, producto) => acumulador + producto.precio,
		0
	)
	document.getElementById("botonCarrito").textContent = `$ ${total}`
}

function agregarProductoCarrito(productoClickeado) {
	const productoFiltrado = productos.find(
		(producto) => producto.id == productoClickeado
	)

	carrito.push(productoFiltrado)

	Toastify({
		text: "Producto agregado al carrito",
		duration: 2000,
		destination: "https://github.com/apvarun/toastify-js",
		newWindow: true,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "right", // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: "linear-gradient(to right, #00b09b, #96c93d)",
		},
		onClick: function () { }, // Callback after click
	}).showToast()

	localStorage.setItem("carrito", JSON.stringify(carrito))
	updateTotal(carrito)
	generarCardsCarrito(carrito)
}

function borrarTodoCarrito() {
	carrito.length = 0
	localStorage.setItem("carrito", JSON.stringify(carrito))
	updateTotal(carrito)

	Toastify({
		text: "Se vació el carrito por completo",
		duration: 2000,
		destination: "https://github.com/apvarun/toastify-js",
		newWindow: true,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "right", // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: "linear-gradient(to right, #06a9be, #0b8798)",
		},
		onClick: function () { }, // Callback after click
	}).showToast()
}

function eliminarDelCarrito(productoId) {
	const prod = carrito.find((producto) => producto.id == productoId)
	let i = carrito.indexOf(prod)
	if (i != -1) {
		carrito.splice(i, 1)
	}
	updateTotal(carrito)
	localStorage.setItem("carrito", JSON.stringify(carrito))

	generarCardsCarrito(carrito)

	Toastify({
		text: "Producto eliminado del carrito",
		duration: 2000,
		destination: "https://github.com/apvarun/toastify-js",
		newWindow: true,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "right", // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: "linear-gradient(to right, #ff0000, #be3636)",
		},
		onClick: function () { }, // Callback after click
	}).showToast()
}

function generarCardsCarrito(arrayCarrito) {
	document.getElementById("carritoVista").innerHTML = ""
	arrayCarrito.forEach((producto) => {
		document.getElementById("carritoVista").innerHTML += `
        <tr> 
            <td>${producto.titulo}</td>
            <td>$${producto.precio}</td>
            <td> <img src=${producto.img} class="imagenesCarrito"> </td>
            <td>${producto.cantidad}</td>
            <td><button type="button" class="btn btn-secondary borrar-producto" onclick="eliminarDelCarrito(${producto.id})" info-borrar="${producto.id}">Eliminar</button></td>
        </tr>`
	})
}

function generarCards(productosRender) {
	contenedorDeProductos.innerHTML = ""
	let acumulador = ""
	productosRender.forEach((producto) => {
		const idButtonAgregar = `add-card${producto.id}`
		acumulador += `
            <div class="card">
            <h4>${producto.titulo}</h4>
            <img src="${producto.img}" style="width: 15rem">
            <h5>$${producto.precio}</h5>
            <button class="botonAgregar" id="${idButtonAgregar}"  data-id="${producto.id}"> Añadir al carrito </button>
        </div>`
	})
	contenedorDeProductos.innerHTML = acumulador
}

// Filtrado

function filtroPorCategoria(categoria) {
	if (categoria == "todos") {
		generarCards(productos)
	} else {
		const productosFiltrados = productos.filter(
			(producto) => producto.categoria == categoria
		)
		generarCards(productosFiltrados)
	}
}

// LLAMADOS FUNCIONES

function baseDeDatos() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (productos.length > 0) {
				updateTotal(carrito)
				generarCardsCarrito(carrito)
				resolve(generarCards(productos))
			} else {
				reject(
					Swal.fire({
						icon: "error",
						title: "Te pedimos disculpas",
						text: "Algo no funciono correctamente, por favor, ingrese mas tarde",
					})
				)
			}
		}, 1000)
	})
}

baseDeDatos()


// API

function apiDolarBlue () {
	
	fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
		.then(res => res.json())
		.then(response => {
			console.log(response)
			const cotizacionDolarBlue = (response[1])
			console.log(cotizacionDolarBlue)

			contenedorDolar.innerHTML =
				`<h5 style="margin: 2rem 0rem" class= "d-flex justify-content-center" >Te dejamos la cotizacion del dolar, aceptamos dolares al valor del dolar blue del dia.</h5>
				<div class="card d-flex justify-content-center d-inline bg-danger bg-gradient"> 
					<p> COTIZACION DOLAR COMPRADOR </p> <p><strong> ${cotizacionDolarBlue.casa.compra} </strong></p>
					<p> COTIZACION DOLAR VENTA </p> <p> <strong>${cotizacionDolarBlue.casa.venta} </strong></p>
				</div>`


		})

}

apiDolarBlue();

