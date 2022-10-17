
let inputComprar
let aux = 0
const iva = 1.21;
const carrito = [];
const div = document.getElementById("contenedor")
const filtro = document.getElementById("nombre")
const card = document.getElementsByClassName("card")
class Producto {
    constructor(id, nombre, categoria, imagen, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
    }
    descuento() {
        if (this.precio > 1000) {
            this.precio = this.precio * 0.9;
        }
    }
    comprar(cantidad) {
        let cantidadNumero = parseInt(cantidad);
        let precioOriginal = this.precio;
        if (this.stock > 0) {
            while (cantidadNumero > this.stock || cantidadNumero <= 0 || Number.isNaN(cantidadNumero)) {
                alert("ingrese una cantidad valida. Stock disponible: " + this.stock);
                cantidadNumero = parseInt(prompt("Ingrese nueva cantidad a pedir."));
            }
            this.descuento();
            alert("Se realizo su pedido de " + cantidadNumero + " unidades del producto " + this.nombre);
            alert("El precio por esas unidades es de " + (this.precio * cantidadNumero));
            if (carrito.findIndex(producto => (producto.id === this.id)) >= 0) {
                carrito[carrito.findIndex(producto => (producto.id === this.id))].stock += cantidadNumero 
            } else { carrito.push(new Producto(this.id, this.nombre, this.categoria, this.precio, cantidadNumero)) } //carrito
            this.stock -= cantidadNumero;
            this.precio = precioOriginal;
        } else {
            alert("No tenemos stock disponible. Disculpe las molestias");
        }
    };
}
function valorCarrito(carrito) {
    const totalCarrito = (carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0) * 1.21).toFixed(2);
    alert("el valor total de la compra es de: $" + totalCarrito)
    return (totalCarrito)
}

const producto1 = new Producto(01, "Shampoo para pelo natural", "Pelo Natural");
const producto2 = new Producto(06, "Shampoo para pelo teñido", "Pelo Teñido");
const producto3 = new Producto(02, "Acondicionador para pelo natural", "Pelo Natural");
const producto4 = new Producto(04, "Acondicionador para pelo teñido", "Pelo Teñido");
const producto5 = new Producto(03, "Mascara para pelo natural", "Pelo Natural");
const producto6 = new Producto(05, "Mascara para pelo teñido", "Pelo Teñido");
let listaProductos = JSON.parse(localStorage.getItem("productos")) || [producto1, producto2, producto3, producto4, producto5, producto6]

function ingresarShampoo(modelo, cantidad) {
    let shampooNuevo = modelo.toLowerCase();
    while ((shampooNuevo != "amd") && (shampooNuevo != "intel")) {
        procesadorNuevo = prompt("elija un modelo de shampoo valida. pelo natural($500) o pelo teñido($350)?").toLowerCase();
    }
    if (shampooNuevo === "pelo natural") {
        producto1.comprar(cantidad)
    } else {
        producto2.comprar(cantidad)
    }
}
function ingresarAcondicionador(modelo, cantidad) {
    let acondicionadorNuevo = modelo.toLowerCase();
    while ((acondicionadorNuevo != "pelo natural") && (acondicionadorNuevo != "pelo teñido")) {
        acondicionadorNuevo = prompt("elija un modelo de acondicionador valido. pelo natural($650) o pelo teñido ($350)?").toLowerCase();
    }
    if (acondicionadorNuevo === "pelo natural") {
        producto3.comprar(cantidad)
    } else {
        producto4.comprar(cantidad)
    }
}
function ingresarMascara(modelo, cantidad) {
    let mascaraNueva = modelo.toLowerCase();
    while ((mascaraNueva != "pelo natural") && (mascaraNueva != "pelo teñido")) {
        mascaraNueva = prompt("elija un modelo de mascara valido. pelo natural($800) o pelo teñido($600)?").toLowerCase();
    }
    if (memoriaNueva === "pelo natural") {
        producto5.comprar(cantidad)
    } else {
        producto6.comprar(cantidad)
    }
}
function comprarProductos() {
    let agregarMas = "si"
    let opcionComprar
    while (agregarMas === "si") {
        opcionComprar = parseInt(prompt("que quiere comprar? 1)Shampoo 2)Acondicionador 3)Mascara 4)Salir"));
        while (opcionComprar != 1 && opcionComprar != 2 && opcionComprar != 3 && opcionComprar != 4) {
            alert("Ingrese un valor valido");
            opcionComprar = parseInt(prompt("que quiere comprar? 1)Shampoo 2)Acondicionador 3)Mascara"));
        }
        if (opcionComprar === 1) {
            let opcionProcesador = prompt("elija un modelo de shampoo valida. pelo natural($500) o pelo teñido($350)?").toLowerCase();
            let cantidadComprar = parseInt(prompt("cuantos unidades quieres comprar?"));
            ingresarProcesador(opcionProcesador, cantidadComprar);
            agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            while (agregarMas != "si" && agregarMas != "no") {
                alert("Valor ingresado no valido. Ingrese si o no.");
                agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            }
        } if (opcionComprar === 2) {
            let opcionPlaca = prompt("elija un modelo de acondicionador valido. pelo natural($650) o pelo teñido ($350)?").toLowerCase();
            let cantidadComprar = parseInt(prompt("cuantos unidades quieres comprar?"));
            ingresarPlaca(opcionPlaca, cantidadComprar);
            agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            while (agregarMas != "si" && agregarMas != "no") {
                alert("Valor ingresado no valido. Ingrese si o no.");
                agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            }
        } if (opcionComprar === 3) {
            let opcionMemoria = prompt("elija un modelo de mascara valido. pelo natural($800) o pelo teñido($600)?").toLowerCase();
            let cantidadComprar = parseInt(prompt("cuantos unidades quieres comprar?"));
            ingresarMemoria(opcionMemoria, cantidadComprar);
            agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            while (agregarMas != "si" && agregarMas != "no") {
                alert("Valor ingresado no valido. Ingrese si o no.");
                agregarMas = prompt("Desea agregar mas productos? si/no").toLowerCase();
            }
        } if (opcionComprar === 4) {
            break
        }
    }
    valorCarrito(carrito);
}
function mayuscula (palabra){
    let capital = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    return(capital)
}
function armarCard (lista){
    lista.forEach(producto => {
        div.innerHTML += `<div class="card productos_estilo" style="width: 18rem;">
                        <img src="${producto.imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                        </div>
                        `
    })
}
function comprarPeluqueria() {
    do {
        if (JSON.parse(localStorage.getItem("productos")) == null){
            localStorage.setItem("productos",JSON.stringify(listaProductos))
        }
        inputComprar = parseInt(prompt("Desea: 1)Comprar Productos 2)Ver total de compras 3)Salir"));
        while (inputComprar != 1 && inputComprar != 2 && inputComprar != 3) {
            alert("Valor ingresado no valido.");
            inputComprar = parseInt(prompt("Desea: 1)Comprar Productos 2)Ver total de compras 3)Salir"));
        }
        if (inputComprar === 1) {
            comprarProductos();
            valorCarrito(carrito);
        } if (inputComprar === 2) {
            valorCarrito(carrito);
        }
    } while (inputComprar !== 3)
    alert("Gracias, vuelva pronto!.");
}