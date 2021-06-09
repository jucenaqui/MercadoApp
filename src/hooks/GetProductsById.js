
export const getProductsById = async ( theId ) => {
    
    const urlItem = `https://api.mercadolibre.com/items/${theId}`;
    const urlItemDescription = `https://api.mercadolibre.com/items/${theId}/description`;
    const urlItemCategories = `https://api.mercadolibre.com/categories/`;

    const resp = await fetch(urlItem);
    const { thumbnail, id, title, price, currency_id, 
             condition, shipping, sold_quantity, category_id
    } = await resp.json();
   
    const resp2 = await fetch(urlItemDescription);
    const { plain_text } = await resp2.json();

    const resp3 = await fetch(urlItemCategories + category_id);
    const { path_from_root } = await resp3.json();


    const result =  {
        author: {
            name: "julio cesar",
            lastname: "naranjo"
        },
        categories: path_from_root,
        item: {
            picture: thumbnail, 
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: 0
            },
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: plain_text
        }
    }
    console.log(result)
    return result;

}