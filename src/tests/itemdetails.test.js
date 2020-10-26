import React from 'react';
import ItemDetails from '../containers/Item/ItemDetails/ItemDetails';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Col } from 'react-bootstrap';
import { render } from 'enzyme';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({
    repository: {
        data: {
            id: 888,
            itemName: "Test Item 888",
            cost: 888
        }
    }
});

describe('<ItemDetails /> component', () => {
    it("should render without crashing", () => {        
        shallow(<ItemDetails store={store} />);
    });

    it("should render data", () => {
        const wrapper = render(<ItemDetails store={store} />);
        expect(wrapper.text()).toContain("Test Item 888");
    });

    it("should mount and have 6 columns", () => {
        const wrapper = mount(<ItemDetails store={store} match={{ params: { id: 888 }, isExact: true, path: "", url: "" }} />);
        expect(wrapper.find(Col).length).toEqual(6);
    });

    it("should show currency value", () => {
        const wrapper = mount(<ItemDetails store={store} match={{ params: { id: 888 }, isExact: true, path: "", url: "" }} />);
        const value = wrapper.find("CurrencyFormat").props().value;
        expect(value).toEqual(888);
    });
});

