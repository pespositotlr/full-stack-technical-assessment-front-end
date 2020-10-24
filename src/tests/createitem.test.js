import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import CreateItem from '../containers/Item/CreateItem/CreateItem';
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

describe('<CreateItem /> component', () => {
    it("should render without crashing", () => {
        
        shallow(<CreateItem store={store} />);
    });
});

