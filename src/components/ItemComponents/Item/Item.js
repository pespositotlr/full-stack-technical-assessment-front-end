import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import CurrencyFormat from 'react-currency-format';
import { Button } from 'react-bootstrap';

const redirectToItemDetails = (id, history) => {
    history.push('/item-details/' + id);
}

const redirectToUpdateItem = (id, history) => {
    history.push('/update-item/' + id);
}

const redirectToDeleteItem = (id, history) => {
    history.push('/delete-item/' + id);
}

const redirectToMaxPrice = (itemName, history) => {
    history.push('/max-price-by-name/' + itemName);
}

const item = (props) => {
    return (
        <Aux>
            <tr>
                <td>{props.item.id}</td>
                <td>{props.item.itemName}</td>
                <td><CurrencyFormat value={props.item.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td>
                    <Button onClick={() => redirectToItemDetails(props.item.id, props.history)}>Details</Button>
                </td>
                <td>
                    <Button className="btn btn-success" onClick={() => redirectToUpdateItem(props.item.id, props.history)}>Update</Button>
                </td>
                <td>
                    <Button className="btn btn-danger" onClick={() => redirectToDeleteItem(props.item.id, props.history)}>Delete</Button>
                </td>
                <td>
                    <Button className="btn btn-warning" onClick={() => redirectToMaxPrice(props.item.itemName, props.history)}>Max Price</Button>
                </td>
            </tr>
        </Aux>
    )
}

export default item;