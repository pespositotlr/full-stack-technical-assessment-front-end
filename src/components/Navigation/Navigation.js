import React from 'react';
import './Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";

const redirectToHome = (history) => {
    history.push('/');
}

const redirectToItemList = (history) => {
    history.push('/item-list/');
}

const redirectToCreateItem = (history) => {
    history.push('/create-item/');
}

const redirectToMaxPricesPerItem = (history) => {
    history.push('/max-prices-per-item/');
}

const navigation = (props) => {
    return (
        <Navbar bg="dark" variant="dark" inline className="nav-fea" >
            <Navbar.Brand onClick={() => redirectToHome(props.history)}>Front-End Application</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => redirectToItemList(props.history)}>Item List</Nav.Link>
                <Nav.Link onClick={() => redirectToCreateItem(props.history)}>Create Item</Nav.Link>     
                <Nav.Link onClick={() => redirectToMaxPricesPerItem(props.history)}>Max Prices For Each Item</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(navigation)