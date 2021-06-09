
export const getProductsById = async ( theId ) => {
    
    const urlItem = `https://api.mercadolibre.com/items/${theId}`;
    const urlItemDescription = `https://api.mercadolibre.com/items/${theId}/description`;
   
    const resp = await fetch(urlItem);
    const { thumbnail, id, title, price, currency_id, 
             condition, shipping, sold_quantity
    } = await resp.json();
   
    const resp2 = await fetch(urlItemDescription);
    const { plain_text } = await resp2.json();

    const result = {
        "picture": thumbnail, 
        id,
        title,
        "price": {
            currency: currency_id,
            amount: price,
            decimals: 0
        },
        condition,
        "shipping": shipping.free_shipping,
        sold_quantity,
        "description": plain_text
    };
    return result;

}