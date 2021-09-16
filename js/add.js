const carro = new Carrito();
const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProducto = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const procesarPedido = document.getElementById("procesarCompra");
const compraCarrito = new Carrito();

cargarEventos();

function cargarEventos(){
    productos.addEventListener("click", (e)=>{carro.comprarProducto(e)});

    carrito.addEventListener("click",(e)=>{carro.eliminarProducto(e)});

    vaciarCarrito.addEventListener("click", (e)=>{carro.vaciarCarrito(e)})

    document.addEventListener("DOMContentloaded", carro.leerLocalStorage());

    compraCarrito.calcularTotal();

    procesarPedido.addEventListener("click", (e)=>carro.procesarPedido(e));
}