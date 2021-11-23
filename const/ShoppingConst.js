export const ITEM_PRODUCTS = {
    products: [
        {
            id: 1,
            name: "producto 1",
            barcode: "123456",
            description: "STARK LOVE BICI R12",
            information: "&nbspTela/02Algodon/&nbspColor/02zul/&nbspOrigen/02Argentina/&nbspMarca/02tulipan",
            cost: "10", /* Costo del producto, invisible para el front */
            offerstatus: "off", /*SI offer Status esta Off el producto no esta en oferta, si es ON es ta en oferta y pasa a verificar el porcentaje de oferta */
            offer: "1", /* Porcentaje de oferta */
            price: "100", /* Precio final Costo + iva + ganancia + oferta */
            finance_id: "", /*Metodo de pago seleccionado*/
            sale: "1", /* Cantidad de ventas completadas */
            stock: null, /* Si es nulll pasa a verificar por Talle el stock del producto, si se encuentra implicito no lleva Talles */
            img_1: "./img_1_error.png",
            img_2: "./img_2_error.png",
            img_3: "./img_3_error.png",
            categorie: "Hombre", 
            subcategorie: "Indumentaria",
            section: "Zapatillas",
            marca: "adidas",
            model: "A2B", 
            update_at: "10/10/21", /* Ultima actualizacion del producto */
            status: "" /* Estado del producto "ACTIVO" "INACTIVO" "PAUSADO" */
        }, 
    ],
    talle: [
        {
            id: 1,
            name: "xl",
            product_id: 1,
            sale: "1",
            stock: "7",
            update_at: ""
        },
    ],
}