import { getProductById } from "../../helpers/GetProductsById";


describe('Pruebas Getproduct Fetch', () => {
    
    const productId = 'MLA910460060';
    let product = {};

    beforeAll(async()=>{
        product = await getProductById(productId);
    });
    
    test('should arrive un object', () => {
        expect(typeof product).toBe('object');
    });

    test('should have un object item', () => {
        expect( typeof product.item).toBe('object');
    });

    test('should have un array of categories', () => {
        expect( Array.isArray(product.categories)).toBe(true);
    });

    test('should bring object vacio when id params equal vacio or not exist', async () => {
        const newproduct = await getProductById();
        expect( newproduct).toEqual({});
    });
    
});
