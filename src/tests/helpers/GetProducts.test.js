import { getProducts } from "../../helpers/GetProducts"

describe('Pruebas GetProducts Fetch', () => {
    
    const productSearch = 'nevera';
    const limit = 4;
    let products = [];

    beforeAll(async()=>{
        products = await getProducts(productSearch, limit);
    });
    
    test('should arrive un object', () => {
        expect(typeof products).toBe('object');
    });

    test('should have un array de items with 4 items', () => {
        expect( Array.isArray(products.items)).toBe(true);
        expect(products.items.length).toBe(limit);
    });

    test('should have un array of categories', () => {
        expect( Array.isArray(products.categories)).toBe(true);
    });

    test('should have un array items vacio', async () => {
        const newProducts = await getProducts('');
        expect( newProducts.items.length).toBe(0);
    });

    test('should have un array categories vacio', async () => {
        const newProducts = await getProducts('');
        expect( newProducts.categories.length).toBe(0);
    });
    
});
