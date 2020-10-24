const items = [
        { "id": 1, "itemName": "ITEM 1", "cost": 100 },
        { "id": 2, "itemName": "ITEM 2", "cost": 200 },
        { "id": 3, "itemName": "ITEM 1", "cost": 250 },
        { "id": 4, "itemName": "ITEM 3", "cost": 300 },
        { "id": 5, "itemName": "ITEM 4", "cost": 50 },
        { "id": 6, "itemName": "ITEM 4", "cost": 40 },
        { "id": 7, "itemName": "ITEM 2", "cost": 200 }
];

export default function request() {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
        items[0]
            ? resolve(items[0])
        : reject({
            error: 'Item with ' + 0 + ' not found.',
          }),
    );
  });
}