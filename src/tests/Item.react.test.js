import React from 'react';
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