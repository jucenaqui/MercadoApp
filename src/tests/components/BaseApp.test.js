import { shallow } from "enzyme";
import BaseApp from "../../components/BaseApp";
import { createLocation } from 'history';

describe('Test to <App />', () => {

    const location = createLocation();
    let wrapper = shallow(<BaseApp location={location} />);

    test('should show the component succesfull', () => {
        expect( wrapper ).toMatchSnapshot();
    });

});