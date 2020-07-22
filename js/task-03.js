'use strict';
/*Если  в массиве со значениями найдем индекс наибольшего значения 
то в массиве с ключами по тому же индексу будет искомое имя работника */

/* Vatiant  by used Object.keys and Object.values*/
const findBestEmployee = function (employees) {
  const employeeList = Object.keys(employees);
  const worksDoneList = Object.values(employees);
  let maxDoneWorksIndex;
  let bestEmploeeIndex;
  let doneWorks = 0;
  for (let i = 0; i < worksDoneList.length; i += 1) {
    const maxDoneWorks = worksDoneList[i];
    if (doneWorks < maxDoneWorks) {
      maxDoneWorksIndex = i;
      doneWorks = maxDoneWorks;
      const bestEmploeeIndex = maxDoneWorksIndex;
    }
  }
  return employeeList[maxDoneWorksIndex];
};
/* Vatiant  by used Object.entries*/
// const findBestEmployee = function (employees) {
//   const employeeList = Object.entries(employees);
//   let bestEmploeeIndex;
//   let doneWorks = 0;
//   for (let i = 0; i < employeeList.length; i += 1) {
//     const bestEmploee = employeeList[i];
//     if (doneWorks < bestEmploee[1]) {
//       bestEmploeeIndex = i;
//       doneWorks = bestEmploee[1];
//     }
//   }
//   return employeeList[bestEmploeeIndex];
// };

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);
console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);
