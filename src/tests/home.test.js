import React from 'react';
import renderer from 'react-test-renderer';

describe('<Home /> component', () => {
    it("renders welcome text", () => {
        const wrapper = shallow(<Home />);
        const welcome = "Welcome to my Test Application!";
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it("renders welcome div", () => {
        const wrapper = shallow(<Home />);
        const welcome = <div className="homeText">
            Welcome to my Test Application!
        </div>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    
    it("renders correctly", () => {
        const tree = renderer
            .create(<Home />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});


