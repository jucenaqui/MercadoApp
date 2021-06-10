import { shallow } from "enzyme"
import { ProductItemDescriptionApp } from "../../components/product/producto-item-description/ProductItemDescriptionApp";
import { productMuck, categoriesMuck } from '../mocks/product';

describe('Pruebas <ProductItemDescription />', () => {
    
    const product = productMuck;
    const categories = categoriesMuck;
    const wrapper = shallow(<ProductItemDescriptionApp 
                            product={ product} categories={ categories } />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a <p> with the title', () => { 
        const title = 'Heladera';
        const p = wrapper.find('p.producto-item-title');
        expect(p.text().trim()).toBe(title);
    });

    test('should have a <h3> with a price', () => {
        const price = `$ ${product.price.amount}`;
        const div = wrapper.find('div.product-item-params');
        const h2 = div.props().children.filter(i=>i.type==='h2')[0].props.children;
        expect(h2.join('')).toBe(price);
    });
    
    test('should have a img with a src and alt attibutes', () => {
        const imgSrc = product.picture;
        const imgAlt = product.title;
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(imgSrc)
        expect(img.prop('alt')).toBe(imgAlt);
        expect(img.prop('src').includes('http://')).toBe(true);
    });

    test('should have a h2 with title description', () => {
        const description = 'Descrición del producto';
        const h2 = wrapper.find('h2.description-title');
        expect(h2.text().trim()).toBe(description);
    });

    test('should have a p with a description', () => {
        const description = productMuck.description;
        const p = wrapper.find('p.description');
        expect(p.text().trim()).toBe(description);
    });

    test('should have a p with a category string', () => {
        const categories = categoriesMuck.map(i=>i.name).join(' > ');
        const p = wrapper.find('p.product-category');
        expect(p.text().trim()).toBe(categories);
    });
    
    

})
