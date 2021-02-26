'use strict';

// function calcAge(birthYear) {
// const age = 2037 - birthYear;

// function printAge() {
// const output = `${firstName} are ${age}, born in ${birthYear}`;
// console.log(output);

// if (birthYear >= 1981 && birthYear <= 1996) {
// const str = `Oh, and you're a milenial, ${firstName}`;
// console.log(str);
// }
// }
// printAge();

// return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(`${firstName}`);

//hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Mehtab';

// let job = 'student';
// const year = 1991;

// Function

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
// return a + b;
// }

// const addExpr = function (a, b) {
// return a + b;
// };

// var adddArrow = (a, b) => a + b;

// Example;

// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
// console.log('All producrs deleted!');
// }

// console.log(this);
/*
 *
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const clacAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

clacAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matila = {
  year: 2017,
};

matila.calcAge = jonas.calcAge;
matila.calcAge();


// var firstName = 'Mtilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    // console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('Me', me);

// premitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 28,
};
const merriedJessica = jessica;
merriedJessica.lastName = 'Davis';
console.log('before merried', jessica);
console.log('after merried', merriedJessica);

//copying objesct

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 28,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.familypush('mary');
jessicaCopy.family.push('john');

console.log('before merried', jessica2);
console.log('after merried', jessicaCopy);
*/
