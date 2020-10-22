import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';
//import OwnerList from './Owner/OwnerList/OwnerList';
import asyncComponent from '../hoc/AsyncComponent/AsyncComponent';
import internalServer from '../components/ErrorPages/InternalServer/InternalServer';
import ItemDetails from './Item/ItemDetails/ItemDetails';
import MaxPricesPerItem from './Item/MaxPricesPerItem/MaxPricesPerItem';
import MaxPriceByName from './Item/MaxPriceByName/MaxPriceByName';
import CreateItem from './Item/CreateItem/CreateItem';
import UpdateItem from './Item/UpdateItem/UpdateItem';
import DeleteItem from './Item/DeleteItem/DeleteItem';

const AsyncItemList = asyncComponent(() => {
    return import('./Item/ItemList/ItemList');
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/item-list" component={AsyncItemList} />
            <Route path="/item-details/:id" component={ItemDetails} />
            <Route path="/max-prices-per-item/" component={MaxPricesPerItem} />
            <Route path="/max-price-by-name/:itemName" component={MaxPriceByName} />                    
            <Route path="/create-item" component={CreateItem} />
            <Route path="/update-item/:id" component={UpdateItem} />
            <Route path="/delete-item/:id" component={DeleteItem} />
            <Route path="/500" component={internalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
