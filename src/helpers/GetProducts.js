import { GetCategories } from "./GetCategories";

export const getProducts = async ( product, limit ) => {
    
    let categories = [];
    let categoryId = '';
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=${limit}`;
    
    // se consultan productos
    const resp = await fetch(url);
    const { results, filters, available_filters } = await resp.json();

    // se validan filtros para las categorias
    if ( filters?.length > 0 ) {
        let data = filters[0];
        let path_from_root = data.values[0].path_from_root;
        categories = path_from_root;
    } else {
        if ( available_filters?.length > 0 ) {
            
            let available_filter = available_filters.filter( item => item.id === 'category');
            let intCategories = available_filter[0].values;
            intCategories.sort( (a,b) =>  b.results - a.results);
            categoryId = intCategories[0].id;
            const data = await GetCategories(categoryId);
            categories = data.path_from_root;
        }
    }
 
    const result =  {
        author: {
            name: "julio cesar",
            lastname: "naranjo"
        },
        categories,
        items: results.map((items) => {
            return {
                picture: items.thumbnail, 
                id: items.id,
                title: items.title,
                price: {
                    currency: items.currency_id,
                    amount: items.price,
                    decimals: 0
                },
                free_shipping: items.free_shipping,
                condition: items.condition
            }
        })
    }
    return result;
}