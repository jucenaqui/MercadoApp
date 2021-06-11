import { shallow } from "enzyme";
import App from "../../App";

describe('Test to <App />', () => {

    let wrapper = shallow(<App />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a AppRouter component', () => {
        expect( wrapper.find('AppRouter').exists() ).toBe(true);
    });

});
