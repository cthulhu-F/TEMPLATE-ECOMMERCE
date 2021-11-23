export const ITEM_CATEGORY = {
    categories: [
        { 
            id: 1, 
            name: "Hombre", 
            description: "",
            img: "./img_1_error.png", 
            update_at: "08/10/21", 
            status: "ACTIVE", 
        },
    ],

    subCategories: [
        { 
            id: 1, 
            name: "Indumentaria", 
            description: "",
            img: "", 
            categories_id: "Hombre", 
            update_at: "08/10/21", 
            status: "ACTIVE", 
        },
    ],

    indicator: [
        { 
            id: 1, 
            name: "Remera", 
            description: "",
            img: "", 
            subcategories_id: "Indumentaria", 
            categories_id: "Hombre", 
            update_at: "08/10/21", 
            status: "ACTIVE", 
        },
    ],

}