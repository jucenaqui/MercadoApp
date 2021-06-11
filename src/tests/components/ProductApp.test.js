import { shallow } from "enzyme";
import ProductApp from "../../components/product/productApp/ProductApp";
import { categoriesMuck, productsMuck } from "../mocks/product";

describe('Test to <ProductApp />', () => {
    
    const product = productsMuck;
    const categories = categoriesMuck;
    const wrapper = shallow(<ProductApp products={ productsMuck } categories={ categories } />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a <p> with className product-category', () => { 
        const className = 'product-category';
        const p = wrapper.find('p');
        expect(p.prop('className').trim()).toBe(className);
    });

    test('should have a <p> with categories type string', () => { 
        const catgories = 'Electrodomésticos > Refrigeración > Refrigeradores';
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(catgories);
    });

    test('should have a <p> with className animate__fadeIn', () => { 
        const classAnimate = 'animate__fadeIn';
        const p = wrapper.find('ol');
        const className = p.prop('className');
        expect(className.includes(classAnimate)).toBe(true);
    });

})
