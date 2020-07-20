'use strict';
const countProps = function (obj) {
  const property = Object.keys(obj);
  const quantityOfProperty = property.length;
  return quantityOfProperty;
};
console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
