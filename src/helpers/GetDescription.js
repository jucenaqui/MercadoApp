
export const GetDescription = async ( itemId ) => {

    const urlDescription = `https://api.mercadolibre.com/items/${itemId}/description`;
    const resp = await fetch(urlDescription);
    const data = await resp.json();
    return data;

}
