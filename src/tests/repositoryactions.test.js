import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as repositoryActions from '../store/actions/repositoryactions'
import * as repositoryReducer from '../store/reducers/repositoryreducer'
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

const baseUrl = 'https://localhost:44346';

describe('Repository actions', () => {

    beforeEach(() => { store.clearActions(); });
    
    it('performs getData request', () => {
            let props = {};
            store.dispatch(repositoryActions.getData('api/GetItems', props))
    });	

    it('performs postData request', () => {
        let item = { itemName: "Test Name", cost: 100 };
        let props = {};
        store.dispatch(repositoryActions.postData('api/CreateItem', item, props))
    });	
    
});
