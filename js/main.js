
var mascaraStock = 9;
var shampooStock = 9;
let userInput = prompt('Hola, bienvenid@! te gustaria comprar alguno de nuestros productos? Si o No.');

if(userInput == 'si'){
    let userCarrito = prompt('Actualmente en stock tenemos Máscaras y Shampoo, que te gustaria?');

    let userCantidad = prompt('Indica la cantidad.');
    if(userCarrito == 'mascara' && mascaraStock >= userCantidad) {
        mascara.stock = mascarastock - userCantidad;
        alert(`Gracias por comprar ${userCantidad} mascaras`);
    } 
        else if(userCarrito == 'mascara' && mascaraStock < userCantidad){
        alert(`No tenemos esa cantidad en stock de ${mascaras.categoria}`);
    } 
        else if(userCarrito == 'shampoo' && shampoo.stock >= userCantidad){
        shampoo.stock = computadoras.stock - userCantidad;
        alert(`Gracias por comprar ${userCantidad} ${shampoo.nombre}`);
    } 
        else if(userCarrito == 'shampoo' && shampoo.stock < userCantidad){
        alert(`No tenemos esa cantidad en stock de ${shampoo.categoria}`);
    }
} else {
    alert('Puede seguir viendo lo que tenemos para usted');
}