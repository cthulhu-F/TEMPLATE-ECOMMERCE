export const ITEM_SALES = {
    order_active: [
        {
            id: 1,
            user_id: 1,
            name: "",
            list_product: "",
            finance_id: "",
            detail: "",
            update_at: "",
            status: ""
        }
    ],

    order_cancel: [
        {
            id: 1,
            user_id: 1,
            name: "",
            list_product: "",
            finance_id: "",
            detail: "",
            update_at: "",
            status: ""
        },
    ],

    order_completed: [{

    },
    ],

    order_paused: [
    {

    }, 
    ],

    detail_payment: [
    {
        id: 1,
        order_active_id: 1, /* Orden lanzada desde la compra */
        price: "", /* Precio total sin interes */
        dues: "", /* Cantidad de cuotas en total a pagar */
        status_dues: "", /* Estado de cuotas /cuota01:Active/Cuota02:Cancel/Cuota03:Paused/   por cada cuota pausada se agrega interes compuesto  */
        rate_compound: "",  /* Interes compuesto por retrazo */
        rate_nominal: "", /* Interes por cuota */
        update_at: "",
    

    },
],

}