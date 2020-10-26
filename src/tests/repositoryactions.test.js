import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as repositoryActions from '../store/actions/repositoryactions'
const mock = new MockAdapter(axios);

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('Repository actions', () => {

    beforeEach(() => {
        store.clearActions();
    });
    
    it('performs getData request', () => {
        const props = { };
        const items = [];

        store.dispatch(repositoryActions.getData('api/GetItems', props));
        expect(store.getActions()).toEqual(items);

    });	

    it('performs postData request', () => {
        let item = { itemName: "Test Name", cost: 100 };
        let props = {};
        store.dispatch(repositoryActions.postData('api/CreateItem', item, props))
    });	
    
});
