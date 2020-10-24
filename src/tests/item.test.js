import React from 'react';
import { Button } from 'react-bootstrap';
import renderer from 'react-test-renderer';
import Item from '../components/itemcomponents/Item/Item';

it("renders without crashing", () => {
    const item = {
        "id": 888,
        "itemName": "Test Item 888",
        "cost": 888
    }

    shallow(<Item key={item.id} item={item}></Item>);
});

test('Item renders without crashing', () => {
    const item = { "id": 888,
        "itemName": "Test Item 888",
        "cost": 888
    }

    const component = renderer.create(
        <Item key={item.id} item={item}></Item>,
    );

});

it("Item contains the cost in a span", () => {
    const item = {
        "id": 888,
        "itemName": "Test Item 888",
        "cost": 888
    }
    const wrapper = shallow(<Item key={item.id} item={item}></Item>);
    const value = wrapper.find("CurrencyFormat").props().value;
    expect(value).toEqual(888);
});

it("Item contains 4 buttons", () => {
    const item = {
        "id": 888,
        "itemName": "Test Item 888",
        "cost": 888
    }
    const wrapper = shallow(<Item key={item.id} item={item}></Item>);
    expect(wrapper.find(Button).length).toEqual(4);
});

it("Item contains the 4 buttons", () => {
    const item = {
        "id": 888,
        "itemName": "Test Item 888",
        "cost": 888
    }
    const wrapper = shallow(<Item key={item.id} item={item}></Item>);
    const valuePrimary = wrapper.find(".btn-primary").text();
    const valueSuccess = wrapper.find(".btn-success").text();
    const valueDanger = wrapper.find(".btn-danger").text();
    const valueWarning = wrapper.find(".btn-warning").text();
    expect(valuePrimary).toEqual("Details");
    expect(valueSuccess).toEqual("Update");
    expect(valueDanger).toEqual("Delete");
    expect(valueWarning).toEqual("Max Price");
});