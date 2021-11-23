class Carrito {

    /* LECTURA DE PRODUCTOS */

    comprarProducto(e) {
        if (e.target.classList.contains("agregar-carrito")) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto) {

        const infoProducto = {
            img: producto.querySelector("img").src,
            titulo: producto.querySelector(".title-card a").textContent,
            descripcion: producto.querySelector(".description-card span").textContent,
            precio: producto.querySelector(".price-card span").textContent,
            id: producto.querySelector("button").getAttribute("data-id"),
            cantidad: 1,
            total: producto.querySelector(".price-card span").textContent
        }

        let productosLS;
        let productoCantidad;
        let prdDescripcion;
        let prdImg;
        let prdPrecio;
        let prdTitulo;
        let prdTotal;
        productosLS = this.obtenerProductoLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id == infoProducto.id) {
                productosLS = productoLS.id;
                productoCantidad = productoLS.cantidad;
                prdDescripcion = productoLS.descripcion;
                prdImg = productoLS.img;
                prdPrecio = productoLS.precio;
                prdTitulo = productoLS.titulo;
                prdTotal = productoLS.total;
            }
        });


        if (productosLS == infoProducto.id) {

            /*
            let cantidadd = (parseInt(productoCantidad) + 1);

            let productos = new Object();

            productos.id = productosLS;
            productos.descripcion = prdDescripcion;
            productos.img = prdImg;
            productos.titulo = prdTitulo;
            productos.precio = prdPrecio;
            productos.total = prdTotal;

            this.sumarItem(cantidadd, productos);
            */

            Swal.fire({
                type: "alert",
                title: "Ooops...",
                icon: "warning",
                text: "Usted ya agrego este producto",
                timer: 1000,
                showConfirmButton: false,
            });
        }


        else {
            this.insertarCarrito(infoProducto);
            this.calcularTotal();
        }

    }



    /* INSERT DE PRODUCTOS EN DOCUMENT */

    insertarCarrito(producto) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${producto.img}" width=60 height=60></td>
            <td class="title-prd fs-8"><span>${producto.titulo}</span></td>
            <td class="cantidad-precio"><p class="text-muted" id="cantidadProducto-${producto.id}">${producto.cantidad}x</p><span>${producto.precio}</span></td>
            <td><span id="precioProducto-${producto.id}">$${producto.total}</span></td>
            <td class="prd-id"><a href="#" class="borrar-producto fw-bold p-2 btn rounded-pill btn-outline-secondary" style="font-size: 12px;" data-id="${producto.id}"> x</a></td>
            `;

        listaProducto.appendChild(row);
        this.guardarProductosLocalStotarge(producto);
    }

    /* ELIMINICACION DE PRODUCTOS POR ID */

    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoId, productoCantidad;
        if (e.target.classList.contains("borrar-producto")) {
            producto = e.target.parentElement.parentElement;
            productoCantidad = producto.querySelector(".cantidad-precio p").value;
            productoId = producto.querySelector("p").getAttribute("data-id");


                e.target.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement;
                productoId = producto.querySelector("a").getAttribute("data-id");

                this.eliminarProductoLocalStorage(productoId);
                this.calcularTotalCompra(productoId);
        }


    }


    /* VACIAR CARRITO */


    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProducto.firstChild) {
            listaProducto.removeChild(listaProducto.firstChild);
        }

        this.vaciarLocalStorage();
        this.calcularTotal();
        return false;
    }

    /* USO DE LOCALSTORAGE */
    /* GUARDAR PRODUCTOS EN LOCAL STORAGE */

    guardarProductosLocalStotarge(producto) {
        let productos;
        productos = this.obtenerProductoLocalStorage();
        productos.push(producto);
        console.log(productos);
        localStorage.setItem("productos", JSON.stringify(productos));
    }

    /* LECTURA DE PRODUCTOS DEL LOCALSTORAGE */

    obtenerProductoLocalStorage() {
        let productoLS;
        let total;

        if (localStorage.getItem("productos") == null) {
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem("productos"));
        }
        return productoLS
    }

    /* ELIMINACION DE PRODUCTOS DEL LOCALSTORAGE */

    eliminarProductoLocalStorage(productoId) {
        let productosLS;
        productosLS = this.obtenerProductoLocalStorage();
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id == productoId) {
                productosLS.splice(index, 1);
            }
        });

        localStorage.setItem("productos", JSON.stringify(productosLS));
    }

    /* INSERT DE PRODUCTOS DESDE LOCALSTORAGE */

    leerLocalStorage() {

        let productosLS;
        productosLS = this.obtenerProductoLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td><img src="${producto.img}" width=60 height=60></td>
            <td class="title-prd"><span>${producto.titulo}</span></td>
            <td class="cantidad-precio">
            <p class="text-muted" id="cantidadProducto-${producto.id}">${producto.cantidad}x</p>
            <span>${producto.precio}</span></td>
            <td><span id="precioProducto-${producto.id}">$${producto.total}</span></td>
            <td class="prd-id"><a href="#" class="borrar-producto fw-bold p-2 btn rounded-pill btn-outline-secondary" style="font-size: 12px;" data-id="${producto.id}"> x</a></td>
            `;

            listaProducto.appendChild(row);
        });

        this.calcularTotal();
    }

    /* VACIAR LOCAL STORAGE */

    vaciarLocalStorage() {
        localStorage.clear();
        this.calcularTotal();
    }

    /* CALCULAR TOTAL DE PRODUCTOS */

    calcularTotal() {
        let productoLS;
        let total = 0;
        let totalCantidad = 0;
        let element;
        let elementCantidad;
        productoLS = this.obtenerProductoLocalStorage();
        for (let i = 0; i < productoLS.length; i++) {
            element = Number(productoLS[i].total);
            elementCantidad = Number(productoLS[i].cantidad);
            total = (total + element);
            totalCantidad = (totalCantidad + elementCantidad);
        }


        if (totalCantidad > 0) {
            document.getElementById("noti").style.display = "inline-block";
            document.getElementById("noti").innerHTML = totalCantidad;
            document.getElementById("noti-navbar").style.display = "inline-block";
            document.getElementById("noti-navbar").innerHTML = totalCantidad;
        } else {
            document.getElementById("noti-navbar").style.display = "none";
            document.getElementById("noti").style.display = "none";
        }

        document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
        return total;
    }

    /* PASAR A PROCESAR COMPRA */

    procesarPedido(e) {
        e.preventDefault();

        if (this.obtenerProductoLocalStorage().length == 0) {
            Swal.fire({
                type: "error",
                title: "Ooops...",
                icon: "warning",
                text: "El carrito se encuentra vacio",
                timer: 1000,
                showConfirmButton: false,
            })
        } else {
            location.href = "purchase.html";
        }
    }


    /* PROCESO DE COMPRA - CARRITO DE COMPRAS */


    /* INSERT DESDE LOCAL STORAGE */

    leerLocalStorageCompra() {

        let productosLS;
        productosLS = this.obtenerProductoLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement("div");
            row.className = "row";
            row.className = "row row-cols-2 row-cols-md-6 mb-5";
            row.innerHTML = `
                                <div class="col mb-2">
                                <img src="${producto.img}" width=80 height=80>
                                </div>
                                <div class="col  mb-2">
                                <p class="fs-7">${producto.titulo}</p>
                                <span class="fs-7">${producto.descripcion}</span>
                                </div>
                                <div class="col  mb-2 cantidad-precio">  
                                <input name="cantidad" type="number" class="text-muted w-100 cantidad" id="${producto.id}" value="${producto.cantidad}" min="1">
                                </div>
                                <div class="col  mb-2">
                                <span>$ ${producto.precio}</span>
                                </div>
                                <div class="col  mb-2">
                                <span class="fw-bold" id="precioProducto-${producto.id}">$ ${producto.total}</span>
                                </div>
                                <div class="col  mb-2">
                                    <a href="#" class="borrar-producto fw-bold p-2 btn rounded-pill btn-outline-secondary" style="font-size: 12px;" data-id="${producto.id}"> x</a>
                                </div>
            `;

            listaCompra.appendChild(row);
        });

        this.calcularTotalCompra();
    }

    

    /* SUMA DE PRODUCTOS POR CANTIDAD */

    sumarItem(e) {
        e.preventDefault();
        let producto, productoId, productoCantidad;
        if (e.target.classList.contains("cantidad")) {
            producto = e.target.parentElement.parentElement;
            productoCantidad = producto.querySelector(".cantidad-precio input").value;
            productoId = producto.querySelector("input").getAttribute("id");
        }


        productoCantidad = parseInt(productoCantidad);

        let productos = new Object();

        let productosLS = this.obtenerProductoLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id == productoId) {
                productos.cantidad = productoCantidad;
                productos.id = productoLS.id;
                productos.descripcion = productoLS.descripcion;
                productos.img = productoLS.img;
                productos.precio = productoLS.precio;
                productos.titulo = productoLS.titulo;
            }
        });

        
        document.getElementById("precioProducto-"+productos.id).innerHTML = "$ "+parseFloat(productos.cantidad * productos.precio).toFixed(2);

        const infoProducto = {
            img: productos.img,
            titulo: productos.titulo,
            descripcion: productos.descripcion,
            precio: parseFloat(productos.precio).toFixed(2),
            id: productos.id,
            cantidad: productoCantidad,
            total: (parseFloat(productos.precio * productoCantidad).toFixed(2))
        }


        this.eliminarProductoLocalStorage(infoProducto.id);
        this.guardarProductosLocalStotarge(infoProducto)
        this.calcularTotalCompra();
    }

    /* ELIMINICACION DE PRODUCTOS POR ID */

    eliminarProductoCompra(e) {
        e.preventDefault();
        let producto, productoId, productoCantidad;
        if (e.target.classList.contains("borrar-producto")) {
            producto = e.target.parentElement.parentElement;
            productoCantidad = producto.querySelector(".cantidad-precio input").value;
            productoId = producto.querySelector("input").getAttribute("data-id");


                e.target.parentElement.parentElement.remove();
                producto = e.target.parentElement.parentElement;
                productoId = producto.querySelector("a").getAttribute("data-id");

                this.eliminarProductoLocalStorage(productoId);
                this.calcularTotalCompra();
        }
    }

    calcularTotalCompra() {
        let productoLS;
        let total = 0;
        let totalCantidad = 0;
        let element;
        let elementCantidad;


        productoLS = this.obtenerProductoLocalStorage();
        for (let i = 0; i < productoLS.length; i++) {
            element = Number(productoLS[i].total);
            elementCantidad = Number(productoLS[i].cantidad);
            total = (total + element);
            totalCantidad = (totalCantidad + elementCantidad);
        }


        if (totalCantidad > 0) {
            document.getElementById("noti").style.display = "inline-block";
            document.getElementById("noti").innerHTML = totalCantidad;
            document.getElementById("noti-navbar").style.display = "inline-block";
            document.getElementById("noti-navbar").innerHTML = totalCantidad;
        } else {
            document.getElementById("noti-navbar").style.display = "none";
            document.getElementById("noti").style.display = "none";
        }


        document.getElementById("subtotal").innerHTML = parseFloat(total).toFixed(2);
        document.getElementById("totalCompra").innerHTML = parseFloat(total).toFixed(2);

        return total;
    }






}


