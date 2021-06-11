import { shallow } from "enzyme";
import { AppRouter } from "../../router/AppRouter";

describe('Test to <App />', () => {

    let wrapper = shallow(<AppRouter />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have a Router component', () => {
        expect( wrapper.find('Router').exists() ).toBe(true);
    });

    test('should have a HeaderBarApp component', () => {
        expect( wrapper.find('HeaderBarApp').exists() ).toBe(true);
    });

});