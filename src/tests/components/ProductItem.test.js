import { shallow } from "enzyme"
import { ProductItemApp } from "../../components/product/producto-item/ProductItemApp"
import { productMuck } from '../mocks/product';

describe('Pruebas <ProductItem />', () => {
    
    const product = productMuck;
    const wrapper = shallow(<ProductItemApp product={ product} />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a <p> with the title', () => { 
        const title = 'Heladera';
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('should have a <h3> with a price', () => {
        const price = `$ ${product.price.amount}`;
        const h3 = wrapper.find('h3');
        expect(h3.text().trim()).toBe(price);
    });
    
    test('should have a img with a src and alt attibutes', () => {
        const imgSrc = product.picture;
        const imgAlt = product.title;
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(imgSrc)
        expect(img.prop('alt')).toBe(imgAlt);
        expect(img.prop('src').includes('http://')).toBe(true);
    });
    

})
