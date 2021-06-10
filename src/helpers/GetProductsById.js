import { GetCategories } from "./GetCategories";
import { GetDescription } from "./GetDescription";

export const getProductById = async ( theId = '') => {
    
    if ( !theId ) return {};

    const urlItem = `https://api.mercadolibre.com/items/${theId}`;

    const resp = await fetch(urlItem);
    const { thumbnail, id, title, price, currency_id, 
             condition, shipping, sold_quantity, category_id
    } = await resp.json();
   
    if ( !id ) return {};

    // search description
    const { plain_text } = await GetDescription(theId);

    // search categories
    const { path_from_root } = await GetCategories(category_id);


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
    return result;

}