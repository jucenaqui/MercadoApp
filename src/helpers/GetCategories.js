
export const GetCategories = async ( categoryId ) => {

    const urlCategories = `https://api.mercadolibre.com/categories/${categoryId}`;
    const resp = await fetch(urlCategories);
    const data = await resp.json();
    return data;

}
