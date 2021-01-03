// 1. Mountain interface exists with name(string) andh eight(number) properties.
interface Mountain {
  //types in here
  name: string;
  height: number;
}
// 2. mountains array exists with given data.
const mountains: Mountain[] = [
  { name: "Kilamanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

// 7. findNameOfTallestMountain takes Mountain array parameter and returns correct
// string.
function findNameOfTallestMountain(mtns: Mountain[]): string {
  let nameOfTallestMountain: string = "";
  let tallestHeight: number = 0;
  for (const mtn of mtns) {
    if (mtn.height > tallestHeight) {
      tallestHeight = mtn.height;
      nameOfTallestMountain = mtn.name;
    }
  }
  return nameOfTallestMountain;
}

let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

// 3. Product interface exists with name(string) and price(number) properties.
interface Product {
  name: string;
  price: number;
}
// 4. products array exists withs everal objects of data.
const products: Product[] = [
  { name: "phone", price: 500 },
  { name: "key", price: 10 },
  { name: "computer", price: 1500 },
];
// 8. calcAverageProductPrice takes Product array parameter and returns correct
// number.
const calcAverageProductPrice = (prdts: Product[]): number => {
  let { length } = prdts;
  return prdts.reduce((acc, val) => {
    return acc + val.price / length;
  }, 0);
};
let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);

// 5. InventoryItem interface exists with product(Product) and quantity(number) properties.
interface InventoryItem extends Product {
  quantity: number;
}
// 6. inventory array exists with given data.
const inventory: InventoryItem[] = [
  { name: "motor", price: 10.0, quantity: 10 },
  { name: "sensor", price: 12.5, quantity: 4 },
  { name: "LED", price: 1.0, quantity: 20 },
];
// 9. calcInventoryValue takes InventoryItem array parameter and returns correct
// number.
function calcInventoryValue(invtry: InventoryItem[]): any {
  let value: number = 0;
  let sum: number = 0;
  inventory.forEach((invtry) => {
    value = invtry.price * invtry.quantity;
    sum += value;
  }, 0);
  return sum;
}
let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);
