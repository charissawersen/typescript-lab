"use strict";
// 2. mountains array exists with given data.
const mountains = [
    { name: "Kilamanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
// 7. findNameOfTallestMountain takes Mountain array parameter and returns correct
// string.
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallestHeight = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
// 4. products array exists withs everal objects of data.
const products = [
    { name: "phone", price: 500 },
    { name: "key", price: 10 },
    { name: "computer", price: 1500 },
];
// 8. calcAverageProductPrice takes Product array parameter and returns correct
// number.
const calcAverageProductPrice = (prdts) => {
    let { length } = prdts;
    return prdts.reduce((acc, val) => {
        return acc + val.price / length;
    }, 0);
};
let averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
// 6. inventory array exists with given data.
const inventory = [
    { name: "motor", price: 10.0, quantity: 10 },
    { name: "sensor", price: 12.5, quantity: 4 },
    { name: "LED", price: 1.0, quantity: 20 },
];
// 9. calcInventoryValue takes InventoryItem array parameter and returns correct
// number.
function calcInventoryValue(invtry) {
    let value = 0;
    let sum = 0;
    inventory.forEach((invtry) => {
        value = invtry.price * invtry.quantity;
        sum += value;
    }, 0);
    return sum;
}
let totalValue = calcInventoryValue(inventory);
console.log(totalValue);
