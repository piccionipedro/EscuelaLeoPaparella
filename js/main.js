const contenedorProductos = document.getElementById('contenedor-productos');

let carrito = [];
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
let stockProductos =[
    {id: 1, nombre: "Mascara para cabello natural", tipo: "pelo natural", cantidad: 1,precio: 400},
    {id: 2, nombre: "Mascara para cabello teñido", tipo: "pelo teñido", cantidad: 1,precio: 500},
    {id: 3, nombre: "Shampoo para cabello natural", tipo: "pelo natural", cantidad: 1,precio: 300},
    {id: 4, nombre: "Shampoo para cabello teñido", tipo: "pelo teñido", cantidad: 1,precio: 250},
    {id: 5, nombre: "Acondicionador para cabello natural", tipo: "pelo natural", cantidad: 1,precio: 300},
    {id: 6, nombre: "Acondicionador para cabello teñido", tipo: "pelo teñido", cantidad: 1,precio: 200}
]
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <h3> ${producto.nombre}</h3>
    <p class="precioProducto"> Precio:$ ${producto.precio}</p>
    <button id="Agregar${producto.id}" class = "boton-agregar"> Agregar <i class fas-fa-shopping-cart> </i></button>
    `
    contenedorProductos.appendChild(div);
    const boton = document.getElementById('Agregar${producto.id}')
    boton.addEventListener('click', () =>{
        agregarAlCarrito(producto.id)
    })
})
const agregarAlCarrito = (prodId) => {
    if(existe){
        const prod = carrito.map(prod =>{
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id===prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
}
const actualizarCarrito = () =>{
    carrito.forEeach((prod) =>{
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML =` 
        <p> ${prod.nombre}</p>
        <p> Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${prod.cantidad}</span></p>
        <button onclick> "eliminarDelCarrito(${prod.id})" class ="boton-eliminar" <i class ="fas-fa-trash-alt"></i></button>        `
        contenedorCarrito.appendChild(div)  

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innetText = carrito.length;
}
