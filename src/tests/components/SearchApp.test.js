import { shallow } from "enzyme";
import SearchApp from "../../components/search/SearchApp";

import { createMemoryHistory } from 'history'

describe('Test to <SearchApp />', () => {

    let history = createMemoryHistory()
    let wrapper = shallow(<SearchApp history={ history } />);
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        history = createMemoryHistory()
        wrapper = shallow(<SearchApp history={ history } />);
    });

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'nevera';
        input.simulate('change', {target:{value}});
        expect(wrapper.find('input').prop('value')).toBe(value);
    });

    test('should not change input value', () => {
        const form = wrapper.find('form');
        form.simulate('submit',{ preventDefault(){} });
        expect(wrapper.find('input').prop('value')).toBe('')
    });

    test('should change input value', () => {

        const value = 'nevera';
        wrapper.find('input').simulate('change', {target:{value}});

        const form = wrapper.find('form');
        form.simulate('submit',{ preventDefault(){} });
        expect( wrapper.find('input').prop('value')).toBe(value);
    }); 

})
