import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ItemDetails from '../containers/Item/ItemDetails/ItemDetails';
import repositoryReducer from '../store/reducers/repositoryReducer';
import errorHandlerReducer from '../store/reducers/errorHandlerReducer';
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
        match: { params: { id: 8 } },
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

});

