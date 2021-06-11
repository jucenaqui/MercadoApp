import { GetDescription } from "../../helpers/GetDescription";

describe('Pruebas a GetDescription Fetch', () => {
    
    const itemId = 'MLA856481792';
    let description = {};

    beforeAll(async()=>{
        description = await GetDescription(itemId);
    });

    test('should bring a object', () => {
        expect(typeof description).toBe('object');
    });

    test('should bring a field text', () => {
        expect(description).toHaveProperty('text');
    });

    test('should bring a field text empty', () => {
        expect(description.text).toBe('');
    });

    test('should bring a field plain_text with text', () => {
        expect(description.plain_text.length).toBeGreaterThan(0);
    });

    test('should bring error "no_found" when idItem es null', async () => {
        let description = await GetDescription(null);
        expect(description.error).toBe('not_found');
    });

    test('should bring message "Item descriptions of item id null not found" when idItem es null', async () => {
        let description = await GetDescription(null);
        expect(description.message).toBe('Item descriptions of item id null not found');
    });

    test('should bring error "resource not found" when idItem is vacio', async () => {
        let description = await GetDescription('');
        expect(description.error).toBe('resource not found');
    });

})
