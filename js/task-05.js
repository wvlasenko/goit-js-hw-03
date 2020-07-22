'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const arreyOfproperties = [];
  for (let i = 0; i < arr.length; i += 1) {
    const arreyOfProducts = arr[i];
    if (arreyOfProducts[prop] === undefined) {
      console.log('Продукт не обладает таким свойством');
      // return arreyOfproperties;
      continue;
    }
    arreyOfproperties.push(arreyOfProducts[prop]);
  }
  return arreyOfproperties;
};
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));
