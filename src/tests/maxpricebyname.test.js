import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MaxPriceByName from '../containers/Item/MaxPriceByName/MaxPriceByName';
import repositoryReducer from '../store/reducers/repositoryReducer';
import errorHandlerReducer from '../store/reducers/errorHandlerReducer';
import thunk from 'redux-thunk';
import { Button } from 'react-bootstrap';
import { render } from 'enzyme';

const rootReducers = combineReducers({
    repository: repositoryReducer,
    errorHandler: errorHandlerReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk));

describe('<MaxPriceByName /> component', () => {
    it("should render without crashing", () => {        
        shallow(<MaxPriceByName store={store} />);
    });
});

