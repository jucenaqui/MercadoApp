import { GetCategories } from "../../helpers/GetCategories";

describe('Pruebas a GetCategories Fetch', () => {
    
    let categories = {};
    const categoryId = 'MLA398582';

    test('should bring error status 400 when categoryId is empty', async () => {
        categories = await GetCategories('');
        expect(categories.status).toBe(400);
    });

    test('should bring error status 404 when categoryId is null',async () => {
        categories = await GetCategories(null);
        expect(categories.status).toBe(404);
    });

    test('should bring message Category not found: null when do not find category', async () => {
        categories = await GetCategories('898978e');
        expect(categories.message).toBe('Category not found: 898978e');
    });

    test('should bring a array path_from_root', async () => {
        let categoriess = await GetCategories(categoryId);
        expect( Array.isArray(categoriess.path_from_root)).toBe(true);
    });

})
