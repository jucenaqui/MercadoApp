import { shallow } from "enzyme";
import history from 'history'
import SearchApp from "../../components/search/SearchApp";

describe('Test to <SearchApp />', () => {

    const wrapper = shallow(<SearchApp history={ history } />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change input text', () => {
        const input = wrapper.find('input');
        const value = 'nevera';
        input.simulate('change', {target:{value}});
    });

})
