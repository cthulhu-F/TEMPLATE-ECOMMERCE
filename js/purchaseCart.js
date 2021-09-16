const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra");
const carritoCompra = document.getElementById("carritoCompra");

cargarEventos();

function cargarEventos(){

    document.addEventListener("DOMContentLoaded", compra.leerLocalStorageCompra());

    carritoCompra.addEventListener("click",(e)=>{compra.eliminarProductoCompra(e)});

    carritoCompra.addEventListener("click",(e)=>{compra.sumarItem(e)});

}