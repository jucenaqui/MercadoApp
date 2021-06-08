
export const getProducts = async ( product ) => {
    
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${product}&limit=4`;
    const resp = await fetch(url);
    const { results} = await resp.json();
    const data = results.map((items) => {
        return {
             thumbnail: items.thumbnail, 
             id: items.id,
             title: items.title,
             price: items.price
        }
    })
   return  data;
}