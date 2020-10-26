import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ItemList from '../containers/Item/ItemList/ItemList';
import repositoryReducer from '../store/reducers/repositoryReducer';
import errorHandlerReducer from '../store/reducers/errorHandlerReducer';
import { StaticRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Col } from 'react-bootstrap';
import { render } from 'enzyme';

const rootReducers = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer
})

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({
    repository: {
        data: [
            { id: 1, itemName: "ITEM 1", cost: 100 },
            { id: 2, itemName: "ITEM 2", cost: 200 },
            { id: 3, itemName: "ITEM 1", cost: 250 },
            { id: 4, itemName: "ITEM 3", cost: 300 },
            { id: 5, itemName: "ITEM 4", cost: 50 },
            { id: 6, itemName: "ITEM 4", cost: 40 },
            { id: 7, itemName: "ITEM 2", cost: 200 }
        ]
    }
});

describe('<ItemList /> component', () => {

    it("should render without crashing", () => {        
        shallow(<ItemList store={store} />);
    });

    it("should render data", () => {
        const context = {};
        const location = {};
        const wrapper = render(<StaticRouter location={location} context={context}>
            <ItemList store={store} />
        </StaticRouter>);
        expect(wrapper.text()).toContain("ITEM 1");
    });

    it("should mount and have 2 columns", () => {
        const context = {};
        const location = {};
        const wrapper = mount(<StaticRouter location={location} context={context}>
            <ItemList store={store} />
        </StaticRouter>);
        expect(wrapper.find(Col).length).toEqual(2);
    });

    it("should mount and have 7 column headers", () => {
        const context = {};
        const location = {};
        const wrapper = mount(<StaticRouter location={location} context={context}>
            <ItemList store={store} />
        </StaticRouter>);
        expect(wrapper.find(".table-striped").length).toEqual(1);
        expect(wrapper.find("th").length).toEqual(7);
    });

});

