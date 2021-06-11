import { shallow } from "enzyme";
import React from 'react'
import ReactRouter from 'react-router';


import { ProductListApp } from "../../components/product/product-list/ProductListApp";

describe('Test to <ProductListApp />', () => {
    

    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: 'MLA856481792' });
    const wrapper = shallow(<ProductListApp />);
   

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a field categories array', () => { 
        const productIDes = wrapper.find('ProductItemDescriptionApp');
        expect( Array.isArray(productIDes.prop('categories'))).toBe(true);
    });

    test('should have a field product object', () => { 
        const productIDes = wrapper.find('ProductItemDescriptionApp');
        expect(typeof productIDes.prop('categories')).toBe('object');
    });

})