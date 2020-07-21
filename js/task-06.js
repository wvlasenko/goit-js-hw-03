'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;
  for (const product of allProdcuts) {
    if (productName === product.name) {
      totalPrice = product.price * product.quantity;
      return totalPrice;
    }
  }
  // console.log(`Товара с названием ${productName} нет в наличии`);
  const message = `Товара с названием ${productName} нет в наличии`;
  return message;
};
console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));
console.log(calculateTotalPrice(products, 'Тепловизор'));
