'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydaving';
user.premium = false;

const keys = Object.keys(user);
/* Use for of */
for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}

/* Use for in without Object.keys */
console.log('____________________________');

for (const key in user) {
  console.log(`${key} : ${user[key]}`);
}
